import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import PhotoContainer from './components/PhotoContainer';
import { store, persistor } from './store/store';

function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationBar />
                <PhotoContainer />
            </PersistGate>
        </Provider>		
    );
}

export default App;
