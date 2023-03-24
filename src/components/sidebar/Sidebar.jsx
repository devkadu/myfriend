import React from 'react';
import PropTypes from 'prop-types';
import { SidebarContainer, SidebarMenu } from './style';

function Sidebar({ title }) {
  return (
    <SidebarContainer>
      <h2>{title}</h2>
      <SidebarMenu />
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Sidebar;
