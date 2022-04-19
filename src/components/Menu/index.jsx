import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filtered_favorite_pokemon } from '../../actions';
import { Menu as SemanticMenu, Container, Image, Message } from "semantic-ui-react";
import logo from "../../statics/images/logo_v4.svg";
import './index.css';

const Menu = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.FPstatus);
  const favMessage = useSelector(state => state.noFav);

  const handleClick = () => {
    dispatch(filtered_favorite_pokemon(activeItem));
  }



  return (
    <SemanticMenu fixed="top">
      <Container>
        <SemanticMenu.Item to="/">
          <Image size="small" src={logo} />
        </SemanticMenu.Item>
        <button onClick={handleClick} >Favorites</button>
        {favMessage &&(
        <div className="menuError">
          <Message
          content="No favorite pokemon found, please add pokemon to your favorites and try again"
          color='red'
          />
        </div>
      )}
        {}
      </Container>
    </SemanticMenu>
  );
};

export default Menu;
