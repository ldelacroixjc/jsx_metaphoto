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
    const publicUrl =
    'http://analytics-metabase.apps.dev.relishiq.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJleHAiOjE3MjYxNTM5NTYsImlhdCI6MTcyNjE1MzM1NX0.TZv20ClLgoMDdIpxwqPsbH-bl0l9sZLSb_rt_N86EFs#bordered=true&titled=true';

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationBar 
                    onFilter={() => setShowFilters(!showFilters)}
                    onChangeLimit={setLimit}
                    limit={limit}
                />
                <iframe src={publicUrl} width={1560} height={850} />
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
