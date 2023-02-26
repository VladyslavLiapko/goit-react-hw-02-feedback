import PropTypes from 'prop-types';
import React from 'react';


export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};