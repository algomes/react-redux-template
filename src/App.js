import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import MyComponent from './components/MyComponent';
import { Provider, } from 'react-redux';
import store from './redux/store';
import useMyCustomHook from './customHooks/useMyCustomHook';
import { useState } from 'react';
import withMessage from './HOCs/withMessage';

function App() {

  const [test, setTest] = useState('');

  const typeOfData = useMyCustomHook(test);

  //random numbers from 0 to 100
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Provider store={store}>

      <Router>
        <div className="App">
          <Link to="1">1</Link>
          <Link to="2">2</Link>
          <Link to="3">3</Link>
          <Link to="/">Home</Link>
        </div>
        <div>
        <Switch>
          <Route path="/1">
            <div>
              <button style={{margin: '1rem'}} onClick={() => setTest(getRandomIntInclusive(0, 100))}>Change Custom Hook</button>
              <span style={{margin: '1rem'}} >this is the value of customHook: {typeOfData}</span>
              <span style={{margin: '1rem'}} >this is the value of Test: {test}</span>
            </div>
          </Route>
          <Route path="/2"><span>This is 2</span></Route>
          <Route path="/3"><span>This is 3</span></Route>
          <Route path="/"><MyComponent/></Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default withMessage(App, "This is the message I want");
