import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => (

    <input value = {props.value} onChange = {props.onChange} />

);

export default Field;

Field.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };