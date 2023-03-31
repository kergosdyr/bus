const nearByBusStop = async (busStopXy: { tmX: number, tmY: number }) => {
    const res = await fetch(`/api/rest/stationinfo/getStationByPos?serviceKey=apikey&tmX=${encodeURIComponent(busStopXy.tmX)}&tmY=${encodeURIComponent(busStopXy.tmY)}&radius=200&resultType=json`);
    return await res.json();
}





export default nearByBusStop;