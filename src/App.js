import { Switch, Route } from 'react-router-dom';

import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/not-found/NotFound';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/allar" component={NewsPage}/>
        <Route exact path="/innlent" component={NewsPage}/>
        <Route exact path="/erlent" component={NewsPage}/>
        <Route exact path="/ithrottir" component={NewsPage}/>
        <Route exact path="/menning" component={NewsPage}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  );
}
