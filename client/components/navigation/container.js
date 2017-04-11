import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavigationController from './controller';

import * as NavigationActions from '../../ducks/navigation';

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
)(NavigationController);
