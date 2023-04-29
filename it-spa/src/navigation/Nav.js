// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { SpaList } from '../views/SpaList';
import { Login } from '../authorization/Login';
import { Reservation } from '../views/Reservation';



const navItems = [
  { name: 'Home', component: Home },
  { name: 'Pokoje', component: RoomList },
  { name: 'SPA', component: SpaList },
  { name: '🛒', component: Cart },
  { name: 'Zaloguj', component: Login },
  

];

export function Nav() {
  const nav = document.createElement('nav');

  const img = document.createElement('img');
	img.src = require('../assets/ITSPA.png');
	img.style.width = '3.75vw';

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });



  nav.append(...navButtons,img );

  return nav;
}

