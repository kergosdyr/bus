const busstop = async ({busStopName}: { busStopName: string }) => {
    const res = await fetch(`/api/rest/busStop/getByName/${encodeURIComponent(busStopName)}`);
    return await res.json();
}





export default busstop;