import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

it('Check header label', () => {
    render(<Header onSelected={(coin) => 'BTC'}/>)
        expect(screen.getByText('BTC'));
})