import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { GiftExpertApp } from '../src/GiftExpertApp';

describe('Pruebas en <GiftExpertApp/>', () => {
    
    const categories = ['ONE PIECE ANIME', 'NARUTO', 'CALAMARDO'];
    const inputValue = 'NARUTO';
    
    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<GiftExpertApp/>);
        expect(container).toMatchSnapshot();
        //screen.debug();
    });

    test('Debe de eliminar y repostear la categoria en caso de ya existir en el arreglo', () => {
        render(<GiftExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: categories[1]}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: categories[2]}});
        fireEvent.submit(form);
        screen.debug();
        fireEvent.input(input, {target: {value: categories[1]}});
        fireEvent.submit(form);
        screen.debug();
        const h4Arrays = screen.getAllByRole('heading', {level: 4}).at(0).innerHTML;
        expect(h4Arrays).toContain(inputValue);

    })
    
})