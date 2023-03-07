/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  cancelReservation,
  reserveRocket,
} from '../redux/slices/rockets/rocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReservation = (e, rocket) => {
    if (e.target.textContent === 'Reserve Rocket') {
      dispatch(reserveRocket(rocket.id));
    } else {
      dispatch(cancelReservation(rocket.id));
    }
  };
  return (
    <article className="grid md:grid-cols-5 gap-4">
      <div className="md:col-span-1">
        <img
          src={rocket.flickr_images[0]}
          alt={rocket.name}
          className="w-full h-full"
        />
      </div>
      <div className="md:col-span-4 flex flex-col gap-2 items-start">
        <h2 className="font-bold m-0 text-xl">{rocket.name}</h2>
        <p>
          {rocket.reserved === true && (
            <span className="mr-3 bg-blue-500 text-white px-2 rounded-md text-center">
              Reserved
            </span>
          )}
          {rocket.description}
        </p>

        <button
          type="button"
          className={` px-4 py-2 rounded-md text-white ${
            rocket.reserved === true
              ? 'bg-white border-gray-700 border text-gray-700'
              : 'bg-blue-500'
          }`}
          onClick={(e) => handleReservation(e, rocket)}
        >
          {rocket.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </article>
  );
};

export default Rocket;
Rocket.propTypes = { rocket: PropTypes.objectOf.isRequired };
