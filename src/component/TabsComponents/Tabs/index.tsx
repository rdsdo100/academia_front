import React from 'react';
import {Content, LabelTabs, LI, RdTabs} from "./styles";

interface ITab {
    IdNameTab: string
    text?: string
    defaultCheckedTab?: boolean
}


const TabBody: React.FC<ITab> = ({children ,
                                     defaultCheckedTab ,
                                     text,
                                     IdNameTab}) => (

    <LI>
        <div>
            <RdTabs type='radio' name='tabs' id={IdNameTab}  defaultChecked={  defaultCheckedTab ? true : false  } />
            <LabelTabs  htmlFor={IdNameTab}>{text}</LabelTabs>
            <Content>
                {children}
            </Content>
        </div>
    </LI>
);

export default TabBody

