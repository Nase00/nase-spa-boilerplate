import React from 'react';
import PropTypes from 'prop-types';

import NavigationContainer from './navigation/container';

import { base } from '../config/composition';

const Body = (props) => {
  const isProd = process.env.NODE_ENV === 'production';
  const DevTools = isProd ? null : require('./dev-tools').default;

  return (
    <div>
      {isProd ? null : <DevTools/>}
      <NavigationContainer {...props}/>
      {props.children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default base(Body);
