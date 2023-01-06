import { Route } from 'react-router-dom';

export function SomComp() {
  return (
    <Switch>
      <Route path="/project/:id" component={Project} />
    </Switch>
  );
}
