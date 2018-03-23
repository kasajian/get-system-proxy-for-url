var shell = require('node-powershell');
var Promise = require('bluebird')

function getSystemProxyForUrl(urlReq)
{
      return new Promise(function (resolve, reject) {
            let ps = new shell({
                  executionPolicy: 'Bypass',
                  noProfile: true,
                  debugMsg: false
            });
            
            var params = [{reqUrl:urlReq}];
            ps.addCommand(`& "${require('path').resolve(__dirname, 'getSystemProxyForUrl.ps1')}"`, params);
            ps.invoke()
            .then(output => {
                  resolve(output.trim());
                  ps.dispose();
            })
            .catch(err => {
                  reject(err);
                  ps.dispose();
            });
      });
}

module.exports = getSystemProxyForUrl;