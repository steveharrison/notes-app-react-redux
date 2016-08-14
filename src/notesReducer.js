import { NEW_NOTE, SELECT_NOTE } from './actions';

const initialState = {
	selectedNoteIndex: null,
	notes: []
};

export default function notesReducer(state = initialState, action) {
	switch(action.type) {
		case NEW_NOTE: {
			const newState = {
				...state,
				notes: [
					...state.notes,
					{
						title: 'My note',
	  					content: 'Lorem ipsum **dolor** sit amet, consectetur adipisicing elit. Nam excepturi, rerum maiores aliquam voluptatibus. Sunt ullam, in alias, minus omnis quis obcaecati, similique eum quibusdam excepturi quisquam fugit hic, maxime.',
	  					starred: false,
	  					dateCreated: new Date(),
	  					dateUpdated: new Date()
					}
				]
			};

			const newStateNotes = newState.notes;
			newState.selectedNoteIndex = newStateNotes[newStateNotes.length - 1];

			return newState;
		}

		case SELECT_NOTE: {
			return {
				...state,
				selectedNoteIndex: action.index
			};
		}

		default: {
			return state;
		}
	}
}