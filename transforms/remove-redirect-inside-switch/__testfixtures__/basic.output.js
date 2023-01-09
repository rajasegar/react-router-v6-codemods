const MyApp = ({ title }) => {
  return (
    <div>
      <Switch>
        <Route path="about" render={() => <Route to="about-us" />} />
      </Switch>
      <Switch>
        <Route from="about" to="about-us" />
      </Switch>
    </div>
  );
};
