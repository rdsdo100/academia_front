import React from 'react'
import {Container,TesteIcons, Teste} from "./styles"
import BarraOpcoes from "../../BarraOpcoes";


const LayoutCadastro: React.FC = ({ children }) => {
    return(
      <Container>
        <BarraOpcoes>
              <Teste>
                  <TesteIcons></TesteIcons>
              </Teste>
              <Teste></Teste>
          </BarraOpcoes>
          {children}
      </Container>
    )
}

export default LayoutCadastro