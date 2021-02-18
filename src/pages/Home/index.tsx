import React from 'react'
import Menu from "../../component/Menu";
import Layout from "../../component/Layout";
import {useSelector} from "react-redux";
import {ApplicationState} from "../../store";



 const Home: React.FC = () => {

     const  repo = useSelector((state: ApplicationState) => {

         return state.auth.auth
     })


return(
    <Layout>
        <div>
            <Menu/>
            <h2>{repo}</h2>
        </div>
    </Layout>

)
}
export default Home

//https://mariosouto.com/inputs-materializados-com-css/