const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash].[ext]",
            publicPath: "/_next/",
            mimetype: "audio/mpeg",
          },
        },
      });
    }

    return config;
  },
};
