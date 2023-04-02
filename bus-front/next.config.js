/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
const rewrites = async () => {
  const busstopKey = encodeURIComponent(process.env.NEXT_PUBLIC_BUSSTOP_API_KEY);
  return [
    {
      source: "/api/rest/busStop/getByName/:name",
      destination: `http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?serviceKey=${busstopKey}&stSrch=:name&resultType=json`
    },
    {
      source: "/api/rest/busStop/getByPos/:lng/:lat",
      destination: `http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos?serviceKey=${busstopKey}&tmX=:lng&tmY=:lat&radius=200&resultType=json`
    },
  ];
};
module.exports = { rewrites };
