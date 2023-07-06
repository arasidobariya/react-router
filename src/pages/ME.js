import { Outlet } from 'react-router-dom';

function ME() {
  return (
    <>
      <h2>This is my ME info</h2> <Outlet />
    </>
  );
}

export default ME;
