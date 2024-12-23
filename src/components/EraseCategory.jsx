import React from 'react';

import {Eraser} from 'react-bootstrap-icons';

export const EraseCategory = ({cat,onEraseCategory}) => {
    
    // onEraseCategory(cat);
    console.log(cat)

    const onErase = (event) => {
        event.preventDefault();
        const newCat = inputValue.trim();
        if(newCat.length <= 0) return;
        // setCategories(categories => [inputValue, ...categories ]);
        onNewCategory(newCat);
        setInputValue('');
    }

    return (
        <>
            <button key={cat.concat('2')} onClick={onErase}><Eraser color='red' size='15px'/></button>
        </>
    )
}
