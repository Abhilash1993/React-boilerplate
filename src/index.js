import React from 'react';
import { AppContainer } from 'react-hot-loader';
import Routes from "./routes.js";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducer";
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./root.saga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

let sagaTask = sagaMiddleware.run(function* () {
	yield RootSaga();
});

render(
	<AppContainer >
		<Routes store={store} />
	</AppContainer>
	, document.getElementById('root'));




module.hot.accept();