import React, {ChangeEvent, useState} from 'react'
import Menu from "../../component/Menu";
import Layout from "../../component/Layout";
import {useDispatch, useSelector} from "react-redux";
import {addNote} from "../../store/actions";
import {NotesState} from "../../store/notesReducer";

 const Home: React.FC = () => {


     const dispatch = useDispatch();

     const onAddNote = (note: string) => {
         dispatch(addNote(note));
     };
const [ok , setOk] = useState<string>('')



function tt (event : ChangeEvent<HTMLInputElement> ){
    const {name , value} = event.target
setOk(String(value))

}



function cadastrar () {
    onAddNote(String(ok))
}


return(
    <Layout>
        <div>
            <Menu/>
            <input type="text" onChange={tt}/>
            <button onClick={()=>{cadastrar()}} >Registrar</button>

        </div>
    </Layout>

)
}
export default Home

//https://mariosouto.com/inputs-materializados-com-css/