// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource, userLogin } from 'admin-on-rest';

import Login from './components/login';
import Dashboard from './components/dashboard';
import customRoutes from './core/routes';
import { PostList } from './posts';
import authClient from './authClient';

const App = () => (
    <Admin 
        title="Pablo" 
        authClient={ authClient } 
        restClient={ jsonServerRestClient('http://jsonplaceholder.typicode.com') }
        loginPage={Login}
        customRoutes={customRoutes}
        dashboard={ Dashboard }>
        <Resource name="tours" list={PostList} />
    </Admin>
);

export default App;