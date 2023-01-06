import { BrowserRouter } from 'react-router-dom';
import { CompatRouter } from 'react-router-dom-v5-compat';

export function App() {
  return (
    <BrowserRouter>
      <CompatRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... */}
        </Routes>
      </CompatRouter>
    </BrowserRouter>
  );
}
