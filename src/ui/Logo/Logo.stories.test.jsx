import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './Logo.stories';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('FluidGrid component', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  });
  it('renders the correct logo', () => {
    const { container } = render(
      <Router history={history}>
        <Logo {...Logo.args} />
      </Router>,
    );

    expect(
      container.querySelector(`a[href="/${Logo.args.url}"]`),
    ).toBeInTheDocument();
  });

  it('renders the correct logo', () => {
    const { container } = render(
      <Router history={history}>
        <Logo
          {...Logo.args}
          site={'Biodiversity Information System for Europe'}
        />
      </Router>,
    );

    expect(
      container.querySelector(`a[href="/https://biodiversity.europa.eu/"]`),
    ).toBeInTheDocument();
  });

  it('renders the correct logo', () => {
    const { container } = render(
      <Router history={history}>
        <Logo
          {...Logo.args}
          site={'Marine Water Information System for Europe'}
        />
      </Router>,
    );

    expect(
      container.querySelector(`a[href="/https://water.europa.eu/marine"]`),
    ).toBeInTheDocument();
  });

  it('renders the correct logo', () => {
    const { container } = render(
      <Router history={history}>
        <Logo {...Logo.args} site={'Forest Information System for Europe'} />
      </Router>,
    );

    expect(
      container.querySelector(`a[href="/https://forest.eea.europa.eu/"]`),
    ).toBeInTheDocument();
  });

  it('renders the correct logo', () => {
    const { container } = render(
      <Router history={history}>
        <Logo
          {...Logo.args}
          site={'Fresh Water Information System for Europe'}
        />
      </Router>,
    );

    expect(
      container.querySelector(`a[href="/https://water.europa.eu/freshwater"]`),
    ).toBeInTheDocument();
  });
});
