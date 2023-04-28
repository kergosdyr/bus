const getStationBusBasicInfo = async (arsId : string) => {
    const res = await fetch(`/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId)}`);
    return await res.json();
}





export default getStationBusBasicInfo;