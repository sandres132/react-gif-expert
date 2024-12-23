import React from 'react';

import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({cat}) => {

  const {images, isLoading} = useFetchGifs(cat);
  
  return (
    <>
        <h4>{cat}</h4>
        {
          isLoading && (<h2>Loading...</h2>)
        }
        
        <div className='card-grid'>
          {
            images.map( (img) => (
              <GifItem key={img.id} {...img}/>
            ))
          }
        </div>
        
    </>
    
  )
}
