import { useState } from "react";
import Time from "../components/date/Date";
import MenuMobile from "../components/menuMobile/MenuMobile";
import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";
import { Container, Header } from "./style";

const title = "MyFriend";

const MyFriendHome = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container>
      <MenuMobile />
      <Sidebar title={title}/>
      <Header>
        <h3>{title}</h3>
        <Time />
      <Search />
      </Header>
    </Container>
  );
}

export default MyFriendHome;