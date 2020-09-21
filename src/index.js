import './scss/index.scss'
import {Excel} from './components/excel/excel'
import {Toolbar} from './components/toolbar/Toolbar';
import {Header} from './components/header/Header';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';
import {createStore} from './core/createStore';
import {rootReducer} from './redux/rootReducer';
import {storage, debounce} from './core/utils';
import {initialState} from './redux/initialState';

const store = createStore(rootReducer, initialState);

const stateListener = debounce(state => {
    console.log('App State: ', state);
    storage('excel-state', state);
}, 300);

store.subscribe(stateListener);

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()