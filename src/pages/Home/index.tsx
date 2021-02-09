import React from 'react'
import Menu from "../../component/Menu";
import Layout from "../../component/Layout";
import {useDispatch, useSelector} from "react-redux";

 const Home: React.FC = () => {

     const dispatch = useDispatch()


/*// TS infers type: (state: RootState) => boolean
     const selectIsOn = (state: RootState) => state.isOn

// TS infers `isOn` is boolean
     const isOn = useSelector(selectIsOn)*/


return(
    <Layout>
        <div>
            <Menu/>
        </div>
    </Layout>

)
}
export default Home

//https://mariosouto.com/inputs-materializados-com-css/