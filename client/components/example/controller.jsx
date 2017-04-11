import React from 'react';
import PropTypes from 'prop-types';

const ExampleController = (props) => (
  <span>
    {props.helloWorldMessage}
  </span>
);

ExampleController.propTypes = {
  helloWorldMessage: PropTypes.string.isRequired
};

export default ExampleController;
