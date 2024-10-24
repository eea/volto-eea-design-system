import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Default } from './Footer.stories';
import { Provider } from 'react-redux';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';

describe('Default', () => {
  let history;
  let observe;
  let unobserve;

  beforeEach(() => {
    history = createMemoryHistory();
    observe = jest.fn();
    unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(function () {
      this.observe = observe;
      this.unobserve = unobserve;
    });
  });

  const mockStore = configureStore();
  const store = mockStore({
    intl: {
      locale: 'en',
      messages: {},
    },
  });

  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Default {...Default.args} />
        </Router>
      </Provider>,
    );

    expect(container.querySelector('#footer')).toBeInTheDocument();
    expect(container.querySelector('.footer-wrapper-nobg')).toBeInTheDocument();

    expect(container.querySelector('.subfooter')).toBeInTheDocument();
    expect(container.querySelector('.site.logo')).toBeInTheDocument();
    expect(container.querySelector('.contact')).toBeInTheDocument();
    expect(container.querySelector('.social')).toBeInTheDocument();

    expect(container.querySelector('.actions')).toBeInTheDocument();
    expect(container.querySelector('a[href="/privacy"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/sitemap"]')).toBeInTheDocument();
    expect(
      container.querySelector('a[href="https://www.eea.europa.eu/en/login"]'),
    ).toBeInTheDocument();
    expect(container.querySelector('.actions')).toBeInTheDocument();
    expect(container.querySelector('.theme-sites-button')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Footer>
            <Footer.SubFooter {...Default.args}>
              <div>SubFooter test</div>
            </Footer.SubFooter>
            <Footer.Header>{Default.args.header}</Footer.Header>
            <Footer.Sites sites={Default.args.sites}>
              <div>Sites test</div>
            </Footer.Sites>
            <Footer.Actions
              actions={Default.args.actions}
              copyright={Default.args.copyright}
            />
          </Footer>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('#footer')).toBeInTheDocument();
    expect(container.querySelector('.footer-wrapper-nobg')).toBeInTheDocument();

    expect(container.querySelector('.actions')).toBeInTheDocument();
    expect(container.querySelector('a[href="/privacy"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/sitemap"]')).toBeInTheDocument();
    expect(
      container.querySelector('a[href="https://www.eea.europa.eu/en/login"]'),
    ).toBeInTheDocument();
    expect(container.querySelector('.actions')).toBeInTheDocument();
    expect(getByText('Sites test')).toBeInTheDocument();
    expect(getByText('SubFooter test')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Footer>
            <Footer.SubFooter
              {...Default.args}
              description={'test description'}
              social={undefined}
            />
            <Footer.Header>{Default.args.header}</Footer.Header>
            <Footer.Sites sites={Default.args.sites} />
            <Footer.Actions
              actions={Default.args.actions}
              copyright={Default.args.copyright}
            >
              <div>Actions test</div>
            </Footer.Actions>
          </Footer>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('#footer')).toBeInTheDocument();
    expect(container.querySelector('.footer-wrapper-nobg')).toBeInTheDocument();
    expect(getByText('Actions test')).toBeInTheDocument();
  });
});
