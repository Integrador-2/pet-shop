import styled from "styled-components";

import { Modal, AlertContainer } from "../alert/style.jsx";

import px2vw from "../../utils/px2vw";

export const Container = styled(AlertContainer) `
  z-index: 4;
`

export const ModalScreen = styled(Modal)`
margin-top: ${px2vw(100)};  
width: ${px2vw(500)};
  height: ${px2vw(500)};
  background: #FFF;
  justify-content: left;
`;

export const Strong = styled.strong`
  margin: 0 0 ${px2vw(10)} ${px2vw(5)};
`;

export const TitleTicket = styled(Strong)`
  font-size: 1.25rem;
  margin: ${px2vw(10)} 0 ${px2vw(20)} ${px2vw(5)};
`;

export const TitleItem = styled(Strong)`
  font-size: 1rem;
  margin-bottom: ${px2vw(2)};
`;

export const Item = styled.span`
  font-size: 1rem;
  margin: 0 0 ${px2vw(20)} ${px2vw(5)};
  color: red;
`;

export const ContainerButton = styled.div`
  width: ${px2vw(500)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: ${px2vw(100)};
  background: var(--purple);
  font-size: 1.25rem;
`;