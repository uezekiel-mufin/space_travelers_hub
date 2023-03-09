import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import Missions from '../Views/Missions';
import store from '../../redux/store';

describe('Missions', () => {
  it('Snapshot of Missions Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Table of Missions exist', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const tableElement = screen.getByText(/Mission/i);
    expect(tableElement).toBeInTheDocument();
  });

  it('Join buttion', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinBtn = await screen.findAllByText('Join Mission');
    expect(joinBtn).toHaveLength(10);
  });

  it('Status exist', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const leaveBtn = await screen.findAllByText('NOT A MEMBER');
    expect(leaveBtn).toHaveLength(10);
  });

  it('Click on Join button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const joinBtns = screen.getAllByText('Join Mission');
      joinBtns[0].click();
    });

    const status = await screen.getAllByText('Active Member');
    expect(status).toHaveLength(1);
  });

  it('Click on Leave button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const leaveBtn = screen.getAllByText('Leave Mission');
      leaveBtn[0].click();
    });
    const status = await screen.getAllByText('NOT A MEMBER');
    expect(status).toHaveLength(10);
  });

  it('Click more than one Join button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const joinBtns = screen.getAllByText('Join Mission');
      joinBtns[0].click();
    });

    act(() => {
      const joinBtns = screen.getAllByText('Join Mission');
      joinBtns[0].click();
    });

    const status = await screen.getAllByText('Active Member');
    expect(status).toHaveLength(2);
  });

  it('Click on more than one Leave button', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    act(() => {
      const leaveBtn = screen.getAllByText('Leave Mission');
      leaveBtn[0].click();
    });

    act(() => {
      const leaveBtn = screen.getAllByText('Leave Mission');
      leaveBtn[0].click();
    });

    const status = await screen.getAllByText('NOT A MEMBER');
    expect(status).toHaveLength(10);
  });
});
