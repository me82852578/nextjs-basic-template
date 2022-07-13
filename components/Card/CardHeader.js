import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeader({ title = '' }) {
  var x = 1;
  var x = 2;
  return (
    <div>
      {title}
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
};
