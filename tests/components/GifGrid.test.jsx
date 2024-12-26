import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid/>', () => {

    const category = 'ONE PIECE'

    test('Debe de mostrar el Loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid cat={category}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
        
    });
    
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abs',
                title: 'LUFFY',
                url: 'https://localhost/luffy.jpg'
            },
            {
                id: 'abc',
                title: 'ZORO',
                url: 'https://localhost/ZORO.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
            
        render(<GifGrid cat={category}/>);

        //screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
        
    });
})