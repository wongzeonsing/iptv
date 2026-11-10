// 请求层：删掉 If-None-Match，避免服务端回 304 让注入脚本拿不到 body。
// 为什么要用脚本而不是模块里的 [Header Rewrite]：header-del 是 Surge/Loon 的指令，
// Shadowrocket 对它的支持不确定；用请求脚本改 headers 是各端都认的写法。
if ($request && $request.headers) {
  for (const k of Object.keys($request.headers)) {
    if (k.toLowerCase() === "if-none-match") delete $request.headers[k];
  }
}
$done($request ? { headers: $request.headers } : {});
