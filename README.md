# get-system-proxy-for-url

>  Gets the proxy to be used for a given url from the operating system.  Currently only supports Windows.  Internally will use PowerShell script getSystemProxyForUrl.ps1 (included)

## Installation
```bash
$ npm i -S get-system-proxy-for-url
$ yarn add get-system-proxy-for-url
```

## Quick start
```javascript
var url = require('url');
var getSystemProxyForUrl = require('get-system-proxy-for-url');

getSystemProxyForUrl("http://google.com")
.then(function(proxy) {
    if (proxy === "DIRECT") {
        console.log("proxy not required");
    } else {
        var endpoint = url.parse(proxy);
        console.log(endpoint.href);
    }
});
```