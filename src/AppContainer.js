import React from 'react';
import { connect } from 'react-redux';

import NotesListView from './NotesListView';

import { newNote } from './actions'

export class AppContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>Notes app</h1>
				<NotesListView notes={this.props.notes} onNewNote={this.props.newNote} />
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