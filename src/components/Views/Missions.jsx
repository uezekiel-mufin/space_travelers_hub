import React from 'react';
import { useDispatch } from 'react-redux';
import asyncMission from '../../redux/slices/api/apiSlice';

const Missions = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(asyncMission())}>
      click
    </button>
  );
};
export default Missions;
