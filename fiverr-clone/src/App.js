import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
