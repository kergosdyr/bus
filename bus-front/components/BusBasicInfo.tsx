import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import getStationBusBasicInfo from "@/pages/api/getStationBusBasicInfo";

const BusBasicInfo = (props) => {
    return (
        <Box>
            <Typography>정류장 버스 기본 정보</Typography>
            <Typography>{props?.busBasicListCnt || 0}개의 버스노선이 있습니다.</Typography>
        </Box>
    );
};

export default React.memo(BusBasicInfo);