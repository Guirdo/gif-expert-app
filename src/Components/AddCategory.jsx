import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const AddCategory = ({setCategories}) => {

    const [inputValue,setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue,...c]);
            setInputValue('');
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control 
                type="text"
                value={inputValue}
                placeholder="Search anything you want"
                onChange={ handleInputChange }
            />
        </Form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
