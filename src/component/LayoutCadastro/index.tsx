import React from 'react'
import {Container, Teste} from "./styles"
import BarraOpcoes from "../BarraOpcoes";

const LayoutCadastro: React.FC = ({ children }) => {
    return(
      <Container>
          {children}
          <BarraOpcoes>

              <Teste></Teste>
              <Teste></Teste>


          </BarraOpcoes>
      </Container>
    )
}

export default LayoutCadastro