const busstop = async ({busStopName}: { busStopName: string }) => {
    const res = await fetch(`/api/rest/stationinfo/getStationByName?serviceKey=apikey&stSrch=${encodeURIComponent(busStopName)}&resultType=json`);
    return await res.json();
}

export default busstop;