import { useNavigate } from 'react-router-dom';

function App() {
  const {
    navigate: navigate
  } = useNavigate();

  return <>
    <button onClick={() => navigate(-2)}>Go 2 pages back</button>
    <button onClick={() => navigate(-1)}>Go back</button>
    <button onClick={() => navigate(1)}>Go forward</button>
    <button onClick={() => navigate(2)}>Go 2 pages forward</button>
  </>;
}
