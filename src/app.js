import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import notesReducer from './notesReducer';

import NotesApp from './AppContainer';

const store = createStore(notesReducer);



render(
	<Provider store={store}>
		<NotesApp/>
	</Provider>,
	document.getElementById('app')
)