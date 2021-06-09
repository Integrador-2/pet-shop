import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: ${px2vw(240)};
`;