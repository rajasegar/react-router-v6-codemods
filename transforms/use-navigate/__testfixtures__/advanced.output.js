import { useNavigate } from 'react-router-dom-v5-compat';
function Project(props) {
  const navigate = useNavigate();

  return (
    <div>
      <MenuList>
        <MenuItem
          onClick={() => {
            navigate('/elsewhere');

            navigate('/elsewhere', {
              replace: true
            });

            navigate(-1);
          }}
        />
      </MenuList>
    </div>
  );
}
