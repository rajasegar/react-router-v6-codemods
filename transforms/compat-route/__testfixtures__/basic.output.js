import { CompatRoute } from 'react-router-dom-v5-compat';
import { Route } from 'react-router-dom';

export function SomComp() {
  return (
    <Switch>
      <CompatRoute path="/project/:id" component={Project} />
    </Switch>
  );
}
