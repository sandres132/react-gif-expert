import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newCat = inputValue.trim();
        if(newCat.length <= 0) return;
        // setCategories(categories => [inputValue, ...categories ]);
        onNewCategory(newCat);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired,
}
