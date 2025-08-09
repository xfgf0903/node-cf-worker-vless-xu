const fs = require('fs');
const path = require('path');
const http = require('http');
const net = require('net');
const { execSync } = require('child_process');

function ensureModule(name) {
    try {
        require.resolve(name);
    } catch (e) {
        execSync(`npm install ${name}`, { stdio: 'inherit' });
    }
}
ensureModule('ws');

const { WebSocket, createWebSocketStream } = require('ws');

const ID = '2ea73714-138e-4cc7-8cab-d7caf476d51b';
const PORT = 443;

const httpServer = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
});

httpServer.listen(PORT);

const wss = new WebSocket.Server({ server: httpServer });
const id = ID.replace(/-/g, '');

wss.on('connection', ws => {
    ws.once('message', msg => {
        const [VERSION] = msg;
        const messageId = msg.slice(1, 17);
        if (!messageId.every((v, i) => v === parseInt(id.substr(i * 2, 2), 16))) return;

        let i = msg.slice(17, 18).readUInt8() + 19;
        const port = msg.slice(i, i += 2).readUInt16BE(0);
        const ATYP = msg.slice(i, i += 1).readUInt8();

        const host = ATYP === 1
            ? msg.slice(i, i += 4).join('.')
            : (ATYP === 2
                ? new TextDecoder().decode(msg.slice(i + 1, i += 1 + msg.slice(i, i + 1).readUInt8()))
                : (ATYP === 3
                    ? msg.slice(i, i += 16).reduce((s, b, j, a) => (j % 2 ? s.concat(a.slice(j - 1, j + 1)) : s), []).map(b => b.readUInt16BE(0).toString(16)).join(':')
                    : ''));

        ws.send(new Uint8Array([VERSION, 0]));

        const duplex = createWebSocketStream(ws);
        net.connect({ host, port }, function () {
            this.write(msg.slice(i));
            duplex.on('error', () => { }).pipe(this).on('error', () => { }).pipe(duplex);
        }).on('error', () => { });
    }).on('error', () => { });
});
