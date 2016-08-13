import { NEW_NOTE } from './actions';

const initialState = [];

export default function notesReducer(state = initialState, action) {
	switch(action.type) {
		case NEW_NOTE: {
			return [
				...state,
				{
					title: 'My note',
  					content: 'Lorem ipsum **dolor** sit amet, consectetur adipisicing elit. Nam excepturi, rerum maiores aliquam voluptatibus. Sunt ullam, in alias, minus omnis quis obcaecati, similique eum quibusdam excepturi quisquam fugit hic, maxime.',
  					starred: false,
  					dateCreated: new Date(),
  					dateUpdated: new Date()
				}
			];
		}

		default: {
			return state;
		}
	}
}