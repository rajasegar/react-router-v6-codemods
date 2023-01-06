function App() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
