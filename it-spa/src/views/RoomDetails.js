// RoomDetails.js
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';
import { RoomList } from './RoomList';

export function RoomDetails(roomId) {
	const section = document.createElement('section');

	section.innerHTML = `
      <h2>Pokój</h2>
      <p class="loading">Ładuję pokój...</p>
    `;

	// pobieramy wybrany pokoj z serwera
	fetch(`http://localhost:3000/rooms/${roomId}`)
		.then((response) => response.json())
		.then((room) => {
			const details = document.createElement('article');

			details.innerHTML = `
            <h3>${room.name}</h3>
            <p>Liczba łóżek: ${room.beds}</p>
            <p>Liczba gości: ${room.guests}</p>
            <p>${room.description}</p>
            <p>
              <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

			const addToCartButton1 = document.createElement('button');
			addToCartButton1.innerText = 'Dodaj do koszyka';
			addToCartButton1.classList.add('btn');
			addToCartButton1.addEventListener('click', () =>
				cartManager.addItem(room)
			);
			const ReturnButton1 = NavButton('Wróć...', () => RoomList(room.id), [
				'btn',
			]);
			details.querySelector('footer').append(addToCartButton1, ReturnButton1);

			// usuwamy element mowiacy o ladowaniu
			section.querySelector('.loading').remove();
			// podstawiamy gotowa liste z pokojami
			section.append(details);
		});

	return section;
}
