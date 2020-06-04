import React from 'react';
import usersView from '../components/UsersView/UsersView';
import UsersViewPage1 from '../components/UsersView/UsersView';
import HeaderUsers from '../components/UsersView/HeaderUsers';
import FooterUsers from '../components/UsersView/FooterUsers';


const UsersViewPage = () => {
  return (
    <>
      <HeaderUsers/>
      <UsersViewPage1/>
      <FooterUsers/>
    </>
  );
};

export default UsersViewPage;
