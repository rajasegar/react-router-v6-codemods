const MyApp = ({ title }) => {
  return (
    <NavLink to="/messages" style={{ color: 'blue' }} activeStyle={{ color: 'green' }}>
      Messages
    </NavLink>
  );
};
