import React from "react";
import tw from "tailwind-styled-components";

const GridWrapper = tw.div`
    grid
    grid-cols-3
    grid-rows-1
    grid-flow-row-dense
    gap-4
`;

export default GridWrapper;