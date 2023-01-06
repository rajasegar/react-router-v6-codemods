function Project(props) {
  const history = props.history;

  return (
    <div>
      <MenuList>
        <MenuItem
          onClick={() => {
            history.push('/elsewhere');

            history.replace('/elsewhere');

            history.go(-1);
          }}
        />
      </MenuList>
    </div>
  );
}
