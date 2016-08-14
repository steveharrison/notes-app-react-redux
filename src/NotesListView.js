import React from 'react';

export default class NotesListView extends React.Component {
	render() {
		const { notes, onNewNote, onSelectNote } = this.props;

		return (
			<ul className="notes-list-view">
				{notes.map(function(note, index) {
					return (
						<li className="notes-list-item" key={index} onClick={() => onSelectNote(index)}>
							<h3>{note.title}</h3>
							<small>{note.content}</small> {/* need to add ellipsis and just have a snippet of actual note content... performance? */}
						</li>
					);
				})}
			</ul>
		);
	}
}