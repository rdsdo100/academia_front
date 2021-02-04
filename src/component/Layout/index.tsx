import React from 'react'
import './styles.css'

const Layout: React.FC = ({ children }) => {
    return(
      <div className='layout_principal'>
          {children}
      </div>
    )
}

export default Layout