import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleController from './controller';

import * as ExampleActions from '../../ducks/example';

const mapStateToProps = ({ exampleReducer }) => ({
  helloWorldMessage: exampleReducer.get('helloWorldMessage')
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ExampleActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleController);
