import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage";
import { Provider } from 'react-redux'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router >
    </Provider>
  );
}

export default App;
