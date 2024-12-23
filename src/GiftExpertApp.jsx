import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['ONE PIECE ANIME']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory.toUpperCase())){
            categories.splice(categories.indexOf(newCategory.toUpperCase()),1);
        }
        setCategories([newCategory.toUpperCase(), ...categories ])
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            onNewCategory={onAddCategory}
        />

        {
            categories.map(category => (
                <GifGrid key={category} cat={category}/>
            ))
        }

    </>
  )
}
