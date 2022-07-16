import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeader({ title = '' }) {
  const unLint = true;
  return (
    <div>
      {title}
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
};
