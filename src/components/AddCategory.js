import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() !== '')//validar que no este vacio
        setCategories(cats => [inputValue, ...cats]); //paso como argumento el callback con el estado anterior y el nuevo inputValue
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Buscar GIFs"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
            
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} 
