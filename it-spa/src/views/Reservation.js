import { MyNAvi } from "../common/MyNAvi";
import { Cart } from "./Cart";
import { RoomList } from "./RoomList";
import { Alert, Modal } from "bootstrap";
import { cartManager } from "../cart/cart-manager";

export function Reservation(room) {
	const div = document.createElement('section');
	div.classList.add('date-picker-container');
	// name='asd';
	div.innerHTML = `
    <section>
    <h3>Zarezerwuj ${room.name}</h3>
	<div class="col-sm-10 date-picker" >

    <div class="col-sm-10" >
		<label for='date_picker'>OD:</label>
      <input type="date" class="form-control" id="date_picker"  >
    </div>
    <div class="col-sm-10">
		<label>DO:</label>
      <input type="date" class="form-control" id="date_picker2" >
    </div>
	<footer>
		<button class="reserve-button btn btn-warning" disabled>Rezerwuj</button>
	</footer>
    </section>
    `;

	var modal = document.createElement("div");
	modal.className = "modal fade";
	modal.id = "myModal";
	modal.tabIndex = -1;
	modal.setAttribute("aria-hidden", "true");
	modal.innerHTML =`
	<div class="modal-dialog modal-dialog-centered" role="document">
	<div class="modal-content">
	<div class="modal-header">
	  <h5 class="modal-title">Zarezerwuj ${name}</h5>
	  <button type="button" class="btn-close btn-modal-close" aria-label="Zamknij"></button>
	</div>
	<div class="modal-body">
		<div class="col-sm-10 date-picker" >

		<div class="col-sm-10" >
			<label for='date_picker'>OD:</label>
		<input type="date" class="form-control" id="date_picker"  >
		</div>
		<div class="col-sm-10">
			<label>DO:</label>
		<input type="date" class="form-control" id="date_picker2" >
		</div>
		<footer class="summaryFooter">
			<h6>Dni: </h6>
		</footer>
		</section>
	</div>
	
	<div class="modal-footer">
	  <button type="button" class="btn btn-success btn-modal-moveToRoomList" disabled>Rezerwuj</button>
	  <button type="button" class="btn btn-primary closeBtn">Cofnij</button>
	</div>
  </div>

	`;

	document.body.appendChild(modal);
	var myModal = new Modal(modal);

	const buttonClose = modal.querySelector(".btn-modal-close");
	buttonClose.addEventListener("click", function () {
	  myModal.hide();
	});

	const buttonClose2 = modal.querySelector(".closeBtn");
	buttonClose2.addEventListener("click", function () {
	  myModal.hide();
	});
	

	let today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');

	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	
	today = yyyy + '-' + mm + '-' + dd;
	const date_picker = modal.querySelector('#date_picker');
	date_picker.setAttribute('min', today);

	const date_picker2 = modal.querySelector('#date_picker2');
	date_picker2.setAttribute('disabled', 'true');

	date_picker.addEventListener('input', () => {
		//date_picker2.setAttribute('disabled', 'false');
		date_picker2.disabled = false;
		date_picker2.setAttribute('min', date_picker.value);
		const date = new Date(date_picker.value);
		date.setFullYear(date.getFullYear() + 1);
		const dateMax = date.toISOString().slice(0, 10);
		date_picker2.setAttribute('max', dateMax);
	});

	// return div;
	let reservedDays;
		//róznica dni
		date_picker2.addEventListener('input', () => {

			const date1 = new Date(date_picker.value);
			const date2 = new Date(date_picker2.value);

			const timeDiff = Math.abs(date2.getTime() - date1.getTime());
			const diffDays = Math.ceil(timeDiff /(1000*3600*24));

			reservedDays = diffDays +1;

			const footer = modal.querySelector('.summaryFooter');
			footer.innerHTML=`<h6>Dni: ${reservedDays} </h6>`;
			
			const acceptBtn = modal.querySelector(".btn-modal-moveToRoomList");
			acceptBtn.disabled = false;
			

		})


	//rezerve

	const acceptBtn = modal.querySelector(".btn-modal-moveToRoomList");
	acceptBtn.addEventListener('click', () =>{

		let i = 0;
		for (i; i < reservedDays; i++) {
		  cartManager.addItem(room);
		}
		
		myModal.hide();
		alert('Dodano!');

	})
	

	myModal.show();
}
