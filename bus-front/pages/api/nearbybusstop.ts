const nearByBusStop = async (busStopXy: { lng: number, lat: number }) => {

    const res = await fetch(`/api/rest/busStop/getByPos/${encodeURIComponent(busStopXy.lng)}/${encodeURIComponent(busStopXy.lat)}`);
    return await res.json();
}





export default nearByBusStop;