import styled from "styled-components";

import px2vw from "../../utils/px2vw";

import { ProductsList, ProductListDiv, Line } from "../register/style";


export const Table = styled(ProductsList)`
    height: ${px2vw(props => props.height)};
`;

export const TableContainer = styled(ProductListDiv)`
    height: ${px2vw(500)};
`;

export const TableLine = styled(Line)`
    max-height: 30px;
`;