import { Route } from 'react-router-dom';

import { Layout } from './components/layout/Layout';

import { TestIndex } from './pages/TestPage';
import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Route exact path="/" component={Index}/>
      <Route path="/:id" component={NewsPage}/>
    </Layout>
  );
}
