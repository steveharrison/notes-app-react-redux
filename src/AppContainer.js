import React from 'react';
import { connect } from 'react-redux';

import NotesListView from './NotesListView';
import NotesTopBar from './NotesTopBar';

import { newNote } from './actions'

export class AppContainer extends React.Component {
	render() {
		return (
			<div className="main-container">
				<NotesTopBar onNewNote={this.props.newNote} />
				<NotesListView notes={this.props.notes} />
			</div>
		);
	}
}

const WrappedAppContainer = connect(
  function mapStateToProps(state) {
    return { notes: state };
  },
  function mapDispatchToProps(dispatch) {
  	return {
  		newNote: () => dispatch(newNote())
  	};
  }
)(AppContainer);

export default WrappedAppContainer;