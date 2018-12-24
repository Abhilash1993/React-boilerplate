import {home} from "./home/home.saga";
import { takeEvery } from 'redux-saga/effects';

export default () => [
	takeEvery("CALL_HOME", home)
];

//all saga functions in this file