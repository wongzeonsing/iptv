# iptv

自用的 IPTV 播放列表，仅作个人设备订阅用，**请勿分发或二次转载**。

- 文件：`iptv-all.m3u`，分「香港」「国内」两组。
- 流地址全部来自互联网公开资源，随时可能失效；本仓库不保证可用性、稳定性或合法性，也不提供任何形式的支持。
- 不包含账号、密钥或服务器凭据，只有频道名和源地址。
- 如权利人认为内容侵权，请开 issue，我会直接删除对应条目或整个仓库。

## 分流规则（Shadowrocket）

`sr-direct.list` / `sr-proxy.list` 是给 Shadowrocket 用的远程规则集，配合 m3u 使用：直连可达的域名走 DIRECT，jdshipin 家族（大陆直连不通）走 PROXY。

```ini
[Rule]
RULE-SET,https://raw.githubusercontent.com/wongzeonsing/iptv/main/sr-proxy.list,PROXY
RULE-SET,https://raw.githubusercontent.com/wongzeonsing/iptv/main/sr-direct.list,DIRECT
GEOIP,CN,DIRECT
FINAL,PROXY
```

要求全局路由设为「配置」模式；PROXY 那行必须在 `GEOIP,CN` 之前，否则会被 GEOIP 抢成直连。
