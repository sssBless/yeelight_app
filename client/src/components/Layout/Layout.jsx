import { Outlet } from 'react-router-dom';
import { VerticalMenu } from '../VerticalMenu/VerticalMenu';

export const Layout = () => {
  return (
    <div>
      <VerticalMenu />
      <Outlet />
    </div>
  );
};
