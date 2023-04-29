// it-spa.js

import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home';
import { RoomList } from './views/RoomList';
import { SpaList } from './views/SpaList';
import { Nav } from './navigation/Nav';
import { Login } from './authorization/Login';
import { Reservation } from './views/Reservation';
import { Register } from './views/Register';
import { Checkout } from './views/Checkout';



const main = document.querySelector('main');


// przyczepiamy nawigacje PRZED elementem main
main.before(Nav());


// reagujemy na zdarzenie `navigate`
document.body.addEventListener('navigate', event => {
  const Component = event.detail;

  //czyscimy zawartosc elementu main
  main.innerHTML = '';
  // nastepnie podstawiamy nowy komponent
  main.append(Component());
});


// uzytkownik wystartuje na Home
//main.append(Home());
main.append(Home());
