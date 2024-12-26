import React from 'react';

import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    const title = 'Luffy GIF - Luffy - Discover & Share GIFs';
    const url = 'https://i.pinimg.com/originals/ec/5f/37/ec5f377a267f9e999a5f4b13bd0fb102.gif';

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<GifItem title={title} url={url} id={1} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} id={1} />);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} id={1} />);
        expect(screen.getByText(title)).toBeTruthy();
    })


})