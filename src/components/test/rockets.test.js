import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import store from '../../redux/store';
import Rockets from '../Views/Rockets';

describe('Missions', () => {
  it('Snapshot of Rocket Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Join button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveBtn = await screen.findAllByText('Reserve Rocket');
    expect(reserveBtn).toHaveLength(4);
  });

  it('Click on Reserve Rocket button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const reserveBtns = screen.getAllByText('Reserve Rocket');
      reserveBtns[0].click();
    });

    const status = await screen.getAllByText('Reserved');
    expect(status).toHaveLength(1);
  });

  it('Click more than one Join button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const reserveBtns = screen.getAllByText('Reserve Rocket');
      reserveBtns[2].click();
    });

    act(() => {
      const reserveBtns = screen.getAllByText('Reserve Rocket');
      reserveBtns[1].click();
    });

    const status = await screen.getAllByText('Cancel Reservation');
    expect(status).toHaveLength(3);
  });

  it('No of Reserve Rocket btn after Cancelling a rocket reservation', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const cancelBtns = screen.getAllByText('Cancel Reservation');
      cancelBtns[0].click();
    });

    const reserveBtns = await screen.getAllByText('Reserve Rocket');
    expect(reserveBtns).toHaveLength(2);
  });

  it('No of Reserved badge after Cancelling 2 rocket reservation', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    act(() => {
      const cancelBtns = screen.getAllByText('Cancel Reservation');
      cancelBtns[1].click();
    });

    const reserveBadge = await screen.getAllByText('Reserved');
    expect(reserveBadge).toHaveLength(1);
  });
});
