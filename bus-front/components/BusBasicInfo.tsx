import React, {useEffect, useState} from 'react';

const BusBasicInfo=(props)=>{



    /* useEffect(() => {
         console.log("BusBasicInfo list......"+JSON.stringify(props.BusBasicList));
     });
 */
    return (
       /* <GvBusBasicInfoList.Consumer>

       */ <div >
            <h2>정류장 버스 기본 정보</h2>
            <h4>{props.busBasicList.length}개의 버스노선이 있습니다.</h4>
            {/*<div>
                {props.BusBasicList.map((obj , index)=>(
                    <div>
                        <div>버스번호: {obj.busRouteAbrv}</div>
                        <div>첫차시간: {obj.firstBusTm}</div>
                        <div>막차시간: {obj.lastBusTm}</div>
                        <div>버스 시간주기(min): {obj.term}</div>
                    </div>
                ))}
            </div>*/}
        </div>
     /*   </GvBusBasicInfoList.Consumer>*/
    );
};

export default BusBasicInfo;