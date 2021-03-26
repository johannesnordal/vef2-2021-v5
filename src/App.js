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
        <Route path="/allar" component={NewsPage}/>
        <Route path="/innlent" component={NewsPage}/>
        <Route path="/erlent" component={NewsPage}/>
        <Route path="/ithrottir" component={NewsPage}/>
        <Route path="/menning" component={NewsPage}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  );
}
