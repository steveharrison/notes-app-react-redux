
const initialState = {
	message: 'hello world'
};

export default function notesReducer(state = initialState, action) {
	switch(action.type) {
		default: {
			return state;
		}
	}
}