/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import '@testing-library/jest-dom';
import TestRenderer, { act } from 'react-test-renderer';
import Header from '../header';

describe('Missions', () => {
  it('Snapshot of Rocket Component', () => {
    const tree = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Logo title check', async () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const title = await screen.findAllByText('Space Traveler');
    expect(title).toBeInTheDocument();
  });

  it('Click on Nav link', async () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    act(() => {
      const link = screen.getAllByText('Missions');
      link.click();
    });

    const link = screen.getAllByText('Missions');
    expect(link).toHaveStyle('text-decoration:underline');
  });
});
