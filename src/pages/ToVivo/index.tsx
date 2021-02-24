import React, {useEffect, useState} from 'react'
import {Component} from './styles'
import {useHistory} from "react-router-dom";
import {api} from "../../services/api";


interface IToVivo {
    ok: string
    Name: string,
    toVivo: boolean
}


 const ToVivo: React.FC = () => {


     const history = useHistory()
     const [toVivo , setToVivo] = useState<boolean>()

    useEffect(()=>{
        const ac = new AbortController();
          api.get<IToVivo>('/')
              .then((respnse) => {

              setToVivo(respnse.data.toVivo)
              if(respnse.data.toVivo === true){
                 history.push('/login')
              }else {
                 history.push('/home')
              }
          })
              .catch(ex => console.error(ex));
        return () => ac.abort();
         } , [toVivo])


return(
    <Component>
<p>{toVivo}</p>
    </Component>

)
}
export default ToVivo

//https://mariosouto.com/inputs-materializados-com-css/