# node-cf-worker-vless-xu

`node-cf-worker-vless-xu` 是一个将 `_worker.js` 部署在 Cloudflare Worker 上，`index.js` 部署在 Node.js 环境中的项目。

- `_worker.js` 仅保留核心部分。
- `index.js` 可以运行在 Node.js 环境中（记得复制一份 `package.json`），还可以作为 `_worker.js` 的 `/proxyip=wss://`，直连需要 `uuid`，`proxyip` 不需要验证（属于公益性质）。

---

## 🌟 极简版

> **_worker.js_**  
> - **167 行**  
> - **5285 字节**  
> - **功能**: 只保留直连和 `/proxyip=`

> **_index.js_**  
> - **57 行**  
> - **1966 字节**  
> - **功能**: 只保留直连

---

## 用法参考

## vless-ws-tls

### CF 直连

```
vless://2ea73714-138e-4cc7-8cab-d7caf476d51b@<hidden-domain>:443?encryption=none&security=tls&sni=<hidden-domain>&fp=randomized&allowInsecure=1&type=ws&host=<hidden-domain>&path=%2F#nless1
```

### 使用 `/proxyip`

#### 示例 1: `/proxyip=ProxyIP.US.CMLiussss.net`

```
vless://2ea73714-138e-4cc7-8cab-d7caf476d51b@<hidden-domain>:443?encryption=none&security=tls&sni=<hidden-domain>&fp=randomized&allowInsecure=1&type=ws&host=<hidden-domain>&path=%2Fproxyip%3DProxyIP.US.CMLiussss.net#nless2
```

#### 示例 2: `/proxyip=wss://<hidden-node-domain>.railway.app`

```
vless://2ea73714-138e-4cc7-8cab-d7caf476d51b@<hidden-domain>:443?encryption=none&security=tls&sni=<hidden-domain>&fp=randomized&allowInsecure=1&type=ws&host=<hidden-domain>&path=%2Fproxyip%3Dwss%3A%2F%2F<hidden-node-domain>.railway.app#nless3
```

### Node 示例

```
vless://2ea73714-138e-4cc7-8cab-d7caf476d511@<hidden-node-domain>.railway.app:443?encryption=none&security=tls&sni=<hidden-node-domain>.railway.app&fp=randomized&allowInsecure=1&type=ws&host=<hidden-node-domain>.railway.app&path=%2F#nless-production
```

---


---

## 推荐工具

### Cloudflare

推荐使用 [Cloudflare Dashboard](https://dash.cloudflare.com/)。

### Node 隧道

可以参考 [eooce/nodejs-argo](https://github.com/eooce/nodejs-argo)。

### 部署平台

#### 三幻神

- [Render](https://render.com)（代理容易封号）
- [Railway](https://railway.app)
- [Fly.io](https://fly.io)（可能需要卡）

#### 古神

- [Replit](https://replit.com)（牢大太牢了）

#### 其它 Node.js 平台（玩具）

- [Cyclic.sh](https://www.cyclic.sh)
- [Qovery](https://www.qovery.com)
- [Koyeb](https://www.koyeb.com)
- [Northflank](https://northflank.com)

#### 函数平台

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com)

#### 容器平台

- [Heroku](https://www.heroku.com)

---

## 🙏 感谢

### `_worker.js` 感谢

- [zizifn](https://github.com/zizifn/edgetunnel)
- [3Kmfi6HP](https://github.com/6Kmfi6HP/EDtunnel)
- [cm](https://github.com/cmliu/edgetunnel)

### `index.js` 感谢

- [eooce](https://github.com/eooce/nodejs-argo)
- [勇哥](https://github.com/yonggekkk/sb-nodejs)

---

## 🌟 感谢你的 Star

[![Stargazers over time](https://starchart.cc/abc15018045126/node-cf-worker-vless-xu.svg)](https://starchart.cc/abc15018045126/node-cf-worker-vless-xu)