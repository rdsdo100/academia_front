import React from 'react';
import RepositoryList from "../../../component/ListRepository/RepositoryList";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../store";
import {loadAuthSuccess} from "../../../store/ducks/auth/actions";


const CadastroDieta: React.FC = () => {

    const dispath = useDispatch()
    //const  repo = useSelector((state: ApplicationState) => state.auth.auth)
    const  repo = useSelector((state: ApplicationState) => {
        return state.auth.auth
    })

    function ok () {

dispath(loadAuthSuccess({name: 'rubens'}))

    }


    return(
        <div>
        <div>

            {
                String(repo)
            }
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


