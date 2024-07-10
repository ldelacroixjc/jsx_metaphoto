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
    const [filters, setFilters] = useState('');
    const [limit, setLimit] = useState(25);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationBar 
                    onFilter={() => setShowFilters(!showFilters)}
                    onChangeLimit={setLimit}
                    limit={limit}
                />
                <PhotoContainer 
                    filters={filters}
                    limit={limit}
                />
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
