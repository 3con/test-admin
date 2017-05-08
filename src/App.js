// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';
import authClient from './authClient';

const App = () => (
    <Admin title="Pablo" authClient={authClient} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="tours" list={PostList} />
    </Admin>
);

export default App;