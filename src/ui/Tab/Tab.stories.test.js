import React from 'react';
import { render } from '@testing-library/react';
import { Tab } from './Tab.stories';
import '@testing-library/jest-dom/extend-expect';

describe('It renderes corectly', () => {
  it('renders corectly', () => {
    render(<Tab {...Tab.args} />);
  });
});
