import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../store";
import {loadAuthSuccess} from "../../../store/ducks/auth/actions";

const CadastroDieta: React.FC = () => {

    const [autTest, setAutTest ] = useState('')

    const dispath = useDispatch()
    //const  repo = useSelector((state: ApplicationState) => state.auth.auth) , [] ) // tem o monitorador igual ao useEffect
    const  repo = useSelector((state: ApplicationState) => {

        return state.auth.auth
    })

    function ok () {

        dispath(loadAuthSuccess({name: String(autTest)}))

    }

    function habdleInputChange(event : ChangeEvent<HTMLInputElement>) {
        const {name , value} = event.target
       setAutTest(String(value))

    }

    return(
        <div>
            <div>

                {
                    String(repo)
                }
            </div>
            <div>
                <input id='ok' type="text" name='ok' onChange={habdleInputChange} />
            </div>
            <div>
                <button
                    onClick={() =>{ok()}}
                >teste</button>
            </div>


        </div>
    )
}

export default CadastroDieta