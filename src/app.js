import React from 'react';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';

import Header from './components/header/header.js';

import SavedList from './components/savedlist/saved-list.js';
import Form from './components/form/form.js';
import Result from  './components/results/results.js'

import Footer from './components/footer/footer.js';


function App() {

  return (

    <>

      <Provider store={store}>
        <CssBaseline/>
          <Header />
          <SavedList />
          <Form />
          <Result />
          <Footer />
      </Provider>

    </>

  );
}

export default App;
