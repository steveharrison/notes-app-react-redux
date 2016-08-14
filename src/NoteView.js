import React from 'react';
import moment from 'moment';
import NoteContentEditor from './NoteContentEditor';

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

		const dateCreated = moment(note.dateCreated);
		const dateUpdated = moment(note.dateUpdated);

		return (
			<div className="note-view">
				<h1>{note.title}</h1>
				<small title={dateCreated.format('dddd, Do MMMM YYYY, h:mm:ss a')}>Date created: {dateCreated.calendar()}</small>
				<small title={dateUpdated.format('dddd, Do MMMM YYYY, h:mm:ss a')}>Date updated: {dateUpdated.calendar()}</small>
				<small>Starred: {note.starred ? 'Yes' : 'No'}</small>
				<p>{note.content}</p>
				<NoteContentEditor />
			</div>
		);
	}
}