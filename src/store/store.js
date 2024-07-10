import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import reducers from './reducers/reducers';
import sagas from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: [],
};

const rootReducer = reducers();
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const { store, persistor } = configureStore();

function configureStore() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        persistedReducer,
        composeEnhancers(
            applyMiddleware(             
                ...middlewares
            )
        )        
    ); 

    const persistor = persistStore(store);
    
    sagaMiddleware.run(sagas);

    return { store, persistor };
}
