import React from 'react'
import {Container} from './styles'


const Layout: React.FC = ({ children }) => {
    return(
      <Container className='layout_principal'>
          {children}
      </Container>
    )
}

export default Layout