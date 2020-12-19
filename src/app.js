import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';



import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Result from  './components/results/results.js'


function App() {
  return (


    <>

      <CssBaseline/>
      <Header />
      <Form />
      <Result />
      <Footer />

    </>
  );
}

export default App;
