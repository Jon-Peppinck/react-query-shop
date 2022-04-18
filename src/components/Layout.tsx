import { FC } from 'react';

import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className='px-32 py-4'>{children}</div>
    </>
  );
};

export default Layout;
