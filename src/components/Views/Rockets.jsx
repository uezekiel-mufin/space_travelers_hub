import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/slices/rockets/rocketSlice';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log(rockets);

  useEffect(() => {
    dispatch(fetchRockets(rocketsUrl));
  }, [dispatch]);
  return <div>Hey</div>;
};

export default Rockets;
