import React from 'react';

export default class NoteView extends React.Component {
	render() {
		const { note } = this.props;

		if (!note) {
			console.log('not note');
			return (
				<div className="note-view no-note-selected">
					<small>No note selected</small>
				</div>
			);
		}

		return (
			<div className="note-view">
				<h1>{note.title}</h1>
				<small>Date updated: {note.dateUpdated}</small>
				<small>Date created: {note.dateCreated}</small>
				<small>Starred: {note.starred ? 'Yes' : 'No'}</small>
				<p>{note.content}</p>
			</div>
		);
	}
}