import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleController from './controller';

import * as ExampleActions from '../../ducks/example';

const ExampleContainer = (props) => (
  <ExampleController {...props}/>
);

ExampleContainer.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = ({ exampleReducer }) => ({
  helloWorldMessage: exampleReducer.get('helloWorldMessage')
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ExampleActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleContainer);
