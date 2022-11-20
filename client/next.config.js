const { redirect } = require("next/dist/server/api-utils");
const path = require("path");

const LOCAL_HOST = process.env.LOCAL_HOST;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // permanent: 브라우저나 검색엔진이 이 정보를 기억하는지
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // source: 내가 지정할 주소
      {
        source: "/api/abc",
        destination: LOCAL_HOST,
      },
      {
        source: "/api/abc/:id",
        destination: LOCAL_HOST,
      },
    ];
  },
  // next.js에서 sass옵션
  sassOptions: {
    includePaths: [path.resolve(__dirname, "./pages")],
  },
};
