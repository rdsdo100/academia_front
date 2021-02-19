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
                        <label className='labelTabs' htmlFor="tab1">Usuário</label>
                        <div className="content">
                            <div>
                                <Input type='text'> <label>Nome</label></Input>
                                <Input type='text'><label>Sobrenome</label></Input>
                                <Input type='password'> <label>Senha</label></Input>
                            </div>

                        </div>
                    </li>
                    <li>
                        <input type='radio' name='tabs' className='rd_tabs' id='tab2' />
                        <label className='labelTabs' htmlFor="tab2">Endereco</label>
                        <div className="content">
                            <div>
                                <Input type='text'><label>cpf</label></Input>
                                <Input type='text'><label>dataNacimento</label></Input>
                                <Input type='text'><label>logradouro</label></Input>
                                <Input type='text'><label>complemento</label></Input>
                                <Input type='text'><label>bairro</label></Input>
                                <Input type='text'><label>localidade</label></Input>
                                <Input type='text'><label>UF</label></Input>
                                <Input type='text'><label>ibge</label></Input>
                                <Input type='text'><label>numero</label></Input>
                                <Input type='text'><label>logradouro</label></Input>
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='tabs' className='rd_tabs' id='tab3' />
                        <label className='labelTabs' htmlFor="tab3">Telefone</label>
                        <div className="content">
                            <div>
                                <Input type='text'><label>DD</label></Input>
                                <Input type='text'><label>telefone</label></Input>
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type='radio' name='tabs' className='rd_tabs' id='tab4' />
                        <label className='labelTabs' htmlFor="tab4">Email</label>
                        <div className="content">
                            <div>
                                <Input type='email'><label>email</label></Input>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Tabs