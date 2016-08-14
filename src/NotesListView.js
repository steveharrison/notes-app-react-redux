import React from 'react';

export default class NotesListView extends React.Component {
	render() {
		const { notes, selectedNoteIndex, onNewNote, onSelectNote } = this.props;

		return (
			<ul className="notes-list-view">
				{notes.map(function(note, index) {
					const isSelected = index === selectedNoteIndex;
					const className = 'notes-list-item' + (isSelected ? ' notes-list-item--selected' : '');

					return (
						<li className={className} key={index} onClick={() => onSelectNote(index)}>
							<h3>{note.title}</h3>
							<small>{note.content}</small> {/* need to add ellipsis and just have a snippet of actual note content... performance? */}
						</li>
					);
				})}
			</ul>
		);
	}
}