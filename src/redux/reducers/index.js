import {combineReducers} from 'redux';

import auth from './auth';
import entries from './entries';
import filters from './filters';
import ui from './ui';

const rootReducer = combineReducers({
    auth: auth,
    entries: entries,
    filters: filters,
    ui: ui
});

export default rootReducer;