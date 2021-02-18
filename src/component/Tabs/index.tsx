import React from 'react';
import './styles.css'
import Input from "../Input";


const Tabs: React.FC = () => {
    return(
        <div>
        <nav className='nav_tabs'>
            <ul>
                <li>
                    <input type='radio' name='tabs' className='rd_tabs' id='tab1' />
                    <label className='labelTabs' htmlFor="tab1">Tab1</label>
                    <div className="content">
                        <Input type='text'> <label>Nome</label></Input>
                        <Input type='text'><label>Sobrenome</label></Input>
                    </div>
                </li>
                <li>
                    <input type='radio' name='tabs' className='rd_tabs' id='tab2' />
                    <label className='labelTabs' htmlFor="tab2">Tab2</label>
                    <div className="content">
                        <p>Deigo</p>
                    </div>
                </li>
                <li>
                    <input type='radio' name='tabs' className='rd_tabs' id='tab3' />
                    <label className='labelTabs' htmlFor="tab3">Tab3</label>
                    <div className="content">
                        <p>teste</p>
                    </div>
                </li>
                <li>
                    <input type='radio' name='tabs' className='rd_tabs' id='tab4' />
                    <label className='labelTabs' htmlFor="tab4">Tab4</label>
                    <div className="content">
                    </div>
                </li>
            </ul>
        </nav>
        </div>
    )
}
export default Tabs