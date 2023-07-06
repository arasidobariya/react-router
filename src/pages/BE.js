import { Outlet } from 'react-router-dom';

function BE() {
  return (
    <>
      <h2>This is my BE info</h2> <Outlet />
    </>
  );
}

export default BE;
