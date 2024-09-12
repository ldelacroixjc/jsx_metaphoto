import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { store, persistor } from './store/store';

function App() {

    return (        
        <iframe src="http://analytics-metabase.apps.dev.relishiq.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJleHAiOjE3MjYxNTU4OTUsImlhdCI6MTcyNjE1NTI5NH0.nfoMbSiE8Li5mytRYt0YUoGl5pS5alP6X-_6XqslvFY#bordered=true&titled=true" width={1560} height={850} />
    );
}

export default App;
