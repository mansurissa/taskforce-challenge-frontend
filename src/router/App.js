import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
