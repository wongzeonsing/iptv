# iptv

自用 IPTV 分流规则集，**不再托管播放列表**。

- 播放列表直接用 iptv-org 官方：
  - 国内：`https://iptv-org.github.io/iptv/countries/cn.m3u`
  - 香港：`https://iptv-org.github.io/iptv/countries/hk.m3u`
- 本仓库只放 Shadowrocket 远程规则集，配合上面两个列表使用。
- 不含账号、密钥或服务器凭据。

## 分流规则（Shadowrocket）

```ini
[Rule]
RULE-SET,https://raw.githubusercontent.com/wongzeonsing/iptv/main/sr-proxy.list,PROXY
RULE-SET,https://raw.githubusercontent.com/wongzeonsing/iptv/main/sr-direct.list,DIRECT
GEOIP,CN,DIRECT
FINAL,PROXY
```

要求：全局路由设为「配置」模式；**PROXY 那行必须在 `GEOIP,CN` 之前**，否则香港源会被 GEOIP 抢成直连。

- `sr-proxy.list`：jdshipin 家族、港台 RTHK（Akamai 地区封锁）、境外源站
- `sr-direct.list`：国内 CDN 源，直连比代理快

## 已知限制

iptv-org 列表里大量国内频道指向**运营商 IPTV 内网地址**（`223.110.x.x`、`39.134.x.x`、`gslbserv.itv.cmvideo.cn` 等），
这类源需要机顶盒鉴权，**任何网络环境、任何客户端都播不了**，规则集也无法修复。它们约占 cn.m3u 的四成。
