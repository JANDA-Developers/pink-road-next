const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = {
    ...withCSS(
    withImages({
        webpack(config, {isServer}) {
            if (!isServer) {
                config.node = {
                    fs: 'empty',
                }
            }
            return config;
        }
    })
    ),
    async redirects() {
        return [
          {
            source: '/member',
            destination: '/service/announce', // Matched parameters can be used in the destination
            permanent: true,
          },
          {
            source: '/master/design',
            destination: '/master/design/display', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
}




// module.exports = {
//     webpack: (config, {
//         isServer
//     }) => {
//     // Fixes npm packages that depend on `fs, net, tls` module
//         if (!isServer) {
//             config.node = {
//                 fs: 'empty',
//                 net: 'empty',
//                 tls: 'empty',
//                 "fs-extra": 'empty'
//             }
//         }
//         return config
//     }
// }



