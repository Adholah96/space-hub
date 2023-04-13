import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/Rockets.css';
import {
  makeReservations,
  cancelReservations,
} from 'redux/rockets/rocketsSlice';

const RocketItem = ({
  name, description, img, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <article className="rocket" id={id}>
        <div className="image-container">
          <img src={img} alt={`placeholder-${name}`} />
        </div>
        <div className="detail-container">
          <h2>{name}</h2>
          <p>
            {reserved && <span className="reservation">Reserved</span>}
            {description}
          </p>
          {reserved ? (
            <button
              className="cancelbtn"
              type="button"
              onClick={() => {
                dispatch(cancelReservations(id));
              }}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="reservebtn"
              onClick={() => {
                dispatch(makeReservations(id));
              }}
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </article>
    </>
  );
};

RocketItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default RocketItem;
