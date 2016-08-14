import React from 'react';
import { connect } from 'react-redux';

import NotesListView from './NotesListView';
import NotesTopBar from './NotesTopBar';
import NoteView from './NoteView';

import { newNote, selectNote } from './actions'

export class AppContainer extends React.Component {
	render() {
		const { appState, ...props } = this.props;
		
		const notes = appState.notes;
		const selectedNoteIndex = appState.selectedNoteIndex;
		const selectedNote = notes[selectedNoteIndex];

		console.log('appState is ', appState);
		console.log('selectedNote is ', selectedNote);
		
		return (
			<div className="main-container">
				<NotesTopBar onNewNote={props.newNote} />
				<NotesListView notes={notes} selectedNoteIndex={selectedNoteIndex} onSelectNote={props.selectNote}/>
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
  		newNote: () => dispatch(newNote()),
  		selectNote: (index) => dispatch(selectNote(index))
  	};
  }
)(AppContainer);

export default WrappedAppContainer;