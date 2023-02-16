import React from 'react';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('textbox', { name: /Login/i });
//   expect(linkElement).toBe({});
// });

describe('User', () => {
  it('example', async () => {
    const test = 'test';

    expect(test).toBe('test');
  });
});
