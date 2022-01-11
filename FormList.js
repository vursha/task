import React from 'react';
import FormCard from './FormCard';

const FormList = (props) =>{
    console.log(props);

    const renderFormList = props.contacts.map((contact) => {
        return(
            <FormCard contact={contact}></FormCard>

        );
    
    });
    return(
        <div className='ui celled list'>
           {renderFormList}
        </div>
    );
}
export default FormList;