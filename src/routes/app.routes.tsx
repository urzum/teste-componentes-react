import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Cadastros/Produtos';
import Despesas from '../pages/Cadastros/Despesas';
import Entidades from '../pages/Cadastros/Entidades';
import CondicoesPagamento from '../pages/Cadastros/CondicoesPagamento';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cad_essencial/produtos" exact component={Produtos} />
      <Route path="/cad_essencial/entidades" exact component={Entidades} />
      <Route path="/cad_financeiro/despesas" exact component={Despesas} />
      <Route
        path="/cad_financeiro/condpgto"
        exact
        component={CondicoesPagamento}
      />
    </Switch>
  </Layout>
);

export default AppRoutes;
