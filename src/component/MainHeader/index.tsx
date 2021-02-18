import React from 'react';


import { 
    Container, 
    Profile, 
    Welcome, 
    UserName, 
}  from './styles';


const MainHeader: React.FC = ({children}) => {


    return (
        <Container>

            <Profile>
                {children}
                <Welcome>Olá</Welcome>
                <UserName>Rodrigo Gonçalves</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;