import React from 'react';

export default class NotesListView extends React.Component {
	render() {
		const { notes, onNewNote } = this.props;

		return (
			<div>
				<button onClick={onNewNote}>New note</button>
				<ul className="notes-list-view">
					{notes.map(function(note, index) {
						return (
							<li className="notes-list-item" key={index}>
								<h3>{note.title}</h3>
								<small>{note.content}</small> {/* need to add ellipsis and just have a snippet of actual note content... performance? */}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}