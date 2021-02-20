import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;   
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 0 10px;
  z-index: 1;
`;

export const Profile = styled.div`
    color: white;
`;

