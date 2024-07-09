import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import PhotoContainer from './components/PhotoContainer';
import Filters from './components/Filters';
import { store, persistor } from './store/store';

function App() {

    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState('')

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationBar 
                    onFilter={() => setShowFilters(!showFilters)}
                />
                <PhotoContainer filters={filters}/>
                <Filters
                    isOpen={showFilters}
                    onCancel={() => setShowFilters(!showFilters)}
                    onApply={setFilters}
                />
            </PersistGate>
        </Provider>		
    );
}

export default App;
