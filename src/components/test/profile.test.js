import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import MyProfile from '../Views/MyProfile';
import store from '../../redux/store';
import Missions from '../Views/Missions';
import Rockets from '../Views/Rockets';

describe('Profile', () => {
  it('Snapshot of Profile Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <MyProfile />
        <Rockets />
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Table of My mission exist', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const tableElement = screen.getByText(/My Mission/i);
    expect(tableElement).toBeInTheDocument();
  });

  it('Table of My rockets exist', () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <MyProfile />
      </Provider>,
    );
    const tableElement = screen.getByText(/My Rockets/i);
    expect(tableElement).toBeInTheDocument();
  });

  it('Check rockets buttons exist', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
        <Rockets />
        <Missions />
      </Provider>,
    );
    const reserveBtn = await screen.findAllByText('Reserve Rocket');
    expect(reserveBtn).toHaveLength(4);
  });

  it('Reserve Rocket works properly', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <MyProfile />
      </Provider>,
    );

    act(() => {
      const reserveBtn = screen.getAllByText('Reserve Rocket');
      reserveBtn[0].click();
    });

    const reckets = await screen.getAllByText('Reserve Rocket');
    expect(reckets).toHaveLength(3);
  });

  it('Check clicked rocket exist in Myprofile', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const rocketName = await screen.findAllByText('Falcon 1');
    expect(rocketName).toHaveLength(1);
  });

  it('cancel Rockets works properly', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <MyProfile />
      </Provider>,
    );

    act(() => {
      const cancelBtns = screen.getAllByText('Cancel Reservation');
      cancelBtns[0].click();
    });
    const reserveBtns = await screen.getAllByText('Reserve Rocket');
    expect(reserveBtns).toHaveLength(4);
  });

  it('Check canceled rocket does not exist in Myprofile', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const rockets = await screen.getByTestId('rocket-container');
    expect(rockets.childElementCount).toBe(0);
  });

  it('Check missions buttons exist', async () => {
    render(
      <Provider store={store}>
        <Missions />
        <MyProfile />
      </Provider>,
    )
    const joinBtn = await screen.findAllByText('Join Mission');
    expect(joinBtn).toHaveLength(10);
  });

  it('Reserve Mission works properly', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <MyProfile />
      </Provider>,
    );

    act(() => {
      const joinBtns = screen.getAllByText('Join Mission');
      joinBtns[0].click();
    });
    const status = await screen.getAllByText('Active Member');
    expect(status).toHaveLength(1);
  });

  it('Check clicked mission exist in Myprofile', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const missionName = await screen.findAllByText('Thaicom');
    expect(missionName).toHaveLength(1);
  });

  it('leave Mission works properly', async () => {
    render(
      <Provider store={store}>
        <Rockets />
        <Missions />
        <MyProfile />
      </Provider>,
    );

    act(() => {
      const leaveBtn = screen.getAllByText('Leave Mission');
      leaveBtn[0].click();
    });
    const status = await screen.getAllByText('NOT A MEMBER');
    expect(status).toHaveLength(10);
  });

  it('Check leaved mission does not exist in Myprofile', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const missions = await screen.getByTestId('mission-container');
    expect(missions.childElementCount).toBe(0);
  });

});
