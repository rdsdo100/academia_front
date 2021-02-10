import React from 'react';
import {useSelector} from "react-redux";
import {NotesState} from "../../../store/notesReducer";


const CadastroDieta: React.FC = () => {

    const notes = useSelector<NotesState, NotesState["notes"]>(
        (state) => state.notes
    );
    console.log( notes)


    return(
        
<div>
<h1>dieta</h1>
</div>

    )
}
export default CadastroDieta