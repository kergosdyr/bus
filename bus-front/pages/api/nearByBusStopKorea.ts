const nearByBusStopKorea = async (busStopXy: { lng: number, lat: number }) => {

    const res = await fetch(`/api/rest/busStopKorea/getByPos/${encodeURIComponent(busStopXy.lng)}/${encodeURIComponent(busStopXy.lat)}`);
    return await res.json();
}





export default nearByBusStopKorea;