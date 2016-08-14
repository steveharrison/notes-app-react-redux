export const NEW_NOTE = '@@NOTES/NEW_NOTE';
export const SELECT_NOTE = '@@NOTES/SELECT_NOTE';

export function newNote() {
	return { type: NEW_NOTE };
}

export function selectNote(index) {
	return {
		type: SELECT_NOTE,
		index
	};
}