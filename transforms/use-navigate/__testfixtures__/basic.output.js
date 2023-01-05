import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
