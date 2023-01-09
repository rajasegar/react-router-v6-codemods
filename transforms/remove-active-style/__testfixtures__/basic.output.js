const MyApp = ({ title }) => {
  return (
    <NavLink
      to="/messages"
      style={(
        {
          'isActive': isActive
        }
      ) => ({
        'color': isActive ? 'green' : 'blue'
      })}>
      Messages
    </NavLink>
  );
};
