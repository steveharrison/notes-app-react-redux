import React from 'react';

export default class NotesTopBar extends React.Component {
	render() {
		const { onNewNote } = this.props;

		return (
			<nav className="top-bar">
				<ul>
					<li><button onClick={onNewNote}>New note</button></li>
				</ul>
			</nav>
		);
	}
}