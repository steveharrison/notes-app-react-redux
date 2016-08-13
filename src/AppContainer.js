import React from 'react';
import { connect } from 'react-redux';

export class AppContainer extends React.Component {
	render() {
		console.log('render', this.props);
		return <h1>Hello</h1>;
	}
}

const WrappedAppContainer = connect(
  function mapStateToProps(state) {
    return { notes: state };
  },
  function mapDispatchToProps(dispatch) {
	  return {
	  };
  }
)(AppContainer);

export default WrappedAppContainer;