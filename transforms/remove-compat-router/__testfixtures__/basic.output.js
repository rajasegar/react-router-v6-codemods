import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}
