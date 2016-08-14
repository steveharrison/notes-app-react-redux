import React from 'react';
import { connect } from 'react-redux';

import NotesListView from './NotesListView';
import NotesTopBar from './NotesTopBar';
import NoteView from './NoteView';

import { newNote } from './actions'

export class AppContainer extends React.Component {
	render() {
		const { appState, newNote } = this.props;
		
		const notes = appState.notes;
		const selectedNote = notes[appState.selectedNoteIndex];

		console.log('appState is ', appState);
		console.log('selectedNote is ', selectedNote);
		
		return (
			<div className="main-container">
				<NotesTopBar onNewNote={newNote} />
				<NotesListView notes={notes} selectedNote={selectedNote} />
				<NoteView note={selectedNote} />
			</div>
		);
	}
}

const WrappedAppContainer = connect(
  function mapStateToProps(state) {
    return {
    	appState: state
    };
  },
  function mapDispatchToProps(dispatch) {
  	return {
  		newNote: () => dispatch(newNote())
  	};
  }
)(AppContainer);

export default WrappedAppContainer;