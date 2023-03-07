/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
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
      <p>{rocket.description}</p>
      <button
        type="button"
        className="bg-blue-500 px-4 py-2 rounded-sm text-white"
      >
        Reserve Rocket
      </button>
    </div>
  </article>
);

export default Rocket;
Rocket.propTypes = { rocket: PropTypes.objectOf.isRequired };
