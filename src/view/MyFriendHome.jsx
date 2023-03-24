import React from 'react';
import AvatarIcon from '../components/avatarIcon/avatarIcon';
// import Time from '../components/date/Date';
import MenuMobile from '../components/menuMobile/MenuMobile';
import Search from '../components/search/Search';
import Sidebar from '../components/sidebar/Sidebar';
import {
  Container, ContainerView, ContainerViewInfo, Header,
} from './style';

const title = 'MyFriend';

function MyFriendHome() {
  // const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container>
      <MenuMobile />
      <Sidebar title={title} />
      <ContainerViewInfo>
        <Header>
          <h3>{title}</h3>
          <Search />
          <AvatarIcon />
        </Header>
        <ContainerView>teste</ContainerView>

      </ContainerViewInfo>
    </Container>
  );
}

export default MyFriendHome;
