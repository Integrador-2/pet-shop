import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    margin-left: ${px2vw(80)};
    widht: ${px2vw(1000)};
    height: ${props => px2vw(props.height)};
    display: flex;
    justify-content: left;
    align-items: left;
`;

export const AdvancedFilterContainer = styled.div`
    height: ${props => props.display === "flex" ? px2vw(80) : px2vw(40)};
    width: ${props => px2vw(props.width)};
    transition: 0.2s;
    border-style: solid;
    border-radius: ${px2vw(15)};
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: ${props => props.display};
    flex-direction: row;
    margin-left = ${px2vw(5)};
    width: ${px2vw(1000)};
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    align-items: right;
    margin-right: ${px2vw(10)};
`;

export const Filter = styled.select`
    border-radius: ${px2vw(15)};
    border-style: solid;
`;

export const ContainerButton = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    width: 70vw;
    margin: ${px2vw(4)} 0 0 ${px2vw(4)};
`;

export const Button = styled.button`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    background-color: rgba(10,23,55,0);
    border-style: none;
    outline: 0;
`;

export const ImgContainer = styled.div`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
`;