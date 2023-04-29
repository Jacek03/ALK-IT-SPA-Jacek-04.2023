import { cartManager } from '../cart/cart-manager';
import { createEl } from '../common/createEl';

export function Checkout() {
	const section = document.createElement('section');

	section.innerHTML = `
    <title>Checkout example for Bootstrap</title>


  <body class="bg-light">

    <div class="container">
      <div class="py-5 text-center head">
        
        <h2>Ostatni krok przed zamówieniem!</h2>
        <p class="lead">Wprowadź dane, wybierz rodzaj wysyłki oraz płatności.</p>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Twój koszyk</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="listCart list-group mb-3">
          </ul>

        </div>
            <h4 class="mb-3">Forma płatności</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                <label class="custom-control-label" for="credit">Karta kredytowa</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="debit">Karta debetowa</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="paypal">BLIK</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Nazwisko właściciela karty</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Numer karty</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Data ważności karty</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <button id="orderButton" class="btn btn-success btn-lg btn-block" type="submit">Zamawiam
        </div>
      </div>
    </div>
    `;
	const ul = section.querySelector('.listCart');
	const tableRows = cartManager.getAllItems().map((item) => {
		const li = createEl('li', [
			'list-group-item',
			'd-flex',
			'justify-content-between',
			'lh-condensed',
		]);
		const div = createEl('div');
		const h6 = createEl('h6', ['my-0', 'col-lg-2']);
		h6.textContent = item.name;
		const small = createEl('small', ['text-muted']);
		small.textContent = "Ilość: " + item.quantity;
		const span = createEl('small', ['text-muted']);
		span.textContent = item.price + " PLN";
		li.append(div, span);
		div.append(h6, small);

		return li;
	});
	ul.append(...tableRows);


section.querySelector("#orderButton").addEventListener('click', () =>{


  alert("Właśnie straciłeś pieniądze!");
})

const img = document.createElement('img');
img.classList.add('logo');
img.src = require('../assets/itspaLogo.gif');

const head = section.querySelector('.head');
head.append(img);

	return section;
}
