import React from 'react'
import {Container,TesteIcons, Teste} from "./styles"
import BarraOpcoes from "../../BarraOpcoes";


const LayoutCadastro: React.FC = ({ children }) => {
    return(
      <Container>
          {children}
          <BarraOpcoes>
              <Teste>
                  <TesteIcons></TesteIcons>
              </Teste>
              <Teste></Teste>


          </BarraOpcoes>
      </Container>
    )
}

export default LayoutCadastro