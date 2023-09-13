/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{
                name: 'preset-default',
                params: {
                  overrides: {
                    // disable plugins
                    removeViewBox: false,
                  },
                },
              }]
            }
          }
        }
      ],
    });

    return config;
  }
}

module.exports = nextConfig