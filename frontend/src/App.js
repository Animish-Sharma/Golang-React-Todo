import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Create from './containers/Create';
import Detail from './containers/Detail';
import Update from './containers/Update';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path ="/:id" component={Detail}/>
          <Route exact path ="/:id/update" component={Update}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
