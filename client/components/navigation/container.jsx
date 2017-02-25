import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'immutable-props';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavigationController from './controller';

import * as NavigationActions from '../../ducks/navigation';

const NavigationContainer = (props) => (
  <NavigationController {...props}/>
);

NavigationContainer.propTypes = {
  navigation: ImmutablePropTypes.Map,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigationReducer }) => ({
  documentTitle: navigationReducer.get('documentTitle'),
  deviceWidth: navigationReducer.get('deviceWidth')
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(NavigationActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
