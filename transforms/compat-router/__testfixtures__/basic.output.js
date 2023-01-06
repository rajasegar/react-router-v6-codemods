import { CompatRouter } from 'react-router-dom-v5-compat';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <CompatRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* ... */}
        </Switch>
      </CompatRouter>
</BrowserRouter>
  );
}
