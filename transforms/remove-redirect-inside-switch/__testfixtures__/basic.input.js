const MyApp = ({ title }) => {
  return (
    <div>
      <Switch>
        <Redirect from="about" to="about-us" />
      </Switch>
      <Switch>
        <Route from="about" to="about-us" />
      </Switch>
    </div>
  );
};
