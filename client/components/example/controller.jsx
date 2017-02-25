import React, { PropTypes } from 'react';

const ExampleController = (props) => (
  <span>
    {props.helloWorldMessage}
  </span>
);

ExampleController.propTypes = {
  helloWorldMessage: PropTypes.string.isRequired
};

export default ExampleController;
