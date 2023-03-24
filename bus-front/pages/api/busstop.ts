const busstop = async () => {
    const res = await fetch('/api/rest/stationinfo/getStationByName?' +
        'serviceKey=apiKey' +
        '&stSrch='+ encodeURIComponent('가곡초교')
        +'&resultType=' + 'json' );
    return await res.json();
}

export default busstop;