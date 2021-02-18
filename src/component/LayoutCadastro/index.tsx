import React from 'react'
import {Container} from "./styles"
import MainHeader from "../MainHeader";
import Menu from "../Menu";


const Layout: React.FC = ({ children }) => {
    return(
      <Container>
          <MainHeader>
              <Menu></Menu>
          </MainHeader>

          {children}
      </Container>
    )
}

export default Layout