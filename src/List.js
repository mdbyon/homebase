import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  return(   
    <ul>
        {
            props.items.map()      
        }
    </ul>
    );
};

export default List;

List.propTypes = {
    items: PropTypes.arrayOf(String)
  };