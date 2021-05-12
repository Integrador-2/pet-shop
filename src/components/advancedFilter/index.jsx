import React, { useState } from "react";

import { Container, AdvancedFilterContainer, RowContainer, FilterContainer, Filter, ContainerButton, Button, Img, ImgContainer } from "./style";

import Open from "../../assets/open.png";
import Close from "../../assets/close.png";

const AdvanceFilter = () => {

    const [display, setDisplay] = useState('none');

    return (
        <Container height={display === "flex" ? "50" : "20"} >
            <AdvancedFilterContainer display={display} width="1000">
                <RowContainer display="flex">
                    <ContainerButton>
                        <Button onClick={() => setDisplay(display === "flex" ? "none" : "flex")}>
                            <ImgContainer>
                                <Img src={display === "flex" ? Close : Open} />
                            </ImgContainer>
                        </Button>
                    </ContainerButton>
                </RowContainer>
                <RowContainer display={display}>
                    <FilterContainer>
                        <span>Data:</span>
                        <Filter>
                            <option>Sem filtro</option>
                            <option>Mais recentes</option>
                            <option>Mais antigos</option>
                        </Filter>
                    </FilterContainer>
                    <FilterContainer>
                        <span>Valor:</span>
                        <Filter>
                            <option>Sem filtro</option>
                            <option>Mais caros</option>
                            <option>Mais baratos</option>
                        </Filter>
                    </FilterContainer>
                </RowContainer>
            </AdvancedFilterContainer>
        </Container >
    );
}

export default AdvanceFilter;