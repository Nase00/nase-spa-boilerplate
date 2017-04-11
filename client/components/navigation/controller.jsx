/* globals window, document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import { base } from '../../config/composition';

class NavigationController extends Component {
  componentWillMount() {
    window.addEventListener('resize', this.props.actions.emitDeviceWidthUpdate);
  }

  componentWillReceiveProps({ documentTitle }) {
    document.title = documentTitle;
  }

  componentWillUnmount() {
    window.remoteEventListener('resize', this.props.actions.emitDeviceWidthUpdate);
  }

  render() {
    return (
      <Header/>
    );
  }
}

NavigationController.propTypes = {
  actions: PropTypes.shape({
    emitDeviceWidthUpdate: PropTypes.func.isRequired
  }).isRequired
};

export default base(NavigationController);
