import { MyNAvi } from '../common/MyNAvi';
import { Home } from '../views/Home';
//Register.js

export function Register() {
	const section = document.createElement('section');


	section.classList.add('register');
	section.innerHTML = `
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">Nick</label>
    <input type="text" class="form-control" id="validationCustom01" placeholder="nick" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-md">
    <label for="validationEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationEmail" placeholder="e-mail" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md">
  </div>
  <div class="col-12">
    <button class="regi btn btn-primary" >Zarejestruj</button>
  </div>
</form>
    `;
	//asynchroniczne wywoływanie funkcjii , 
	//jak wykorzystac funckję async w addEventListner w czystym js MSDN 
	
	const RegisterInButton = section.querySelector('.regi');
	RegisterInButton.addEventListener('click', (event) => {
		event.preventDefault();
		console.log('test');
		getMaxId().then((id) => {
			console.log('test2', id);
			const user = {
				id1: 2,
				email: section.querySelector('#validationEmail').value,
				name: section.querySelector('#validationCustom01').value,
				lastName: section.querySelector('#validationCustom02').value,
				password: section.querySelector('#validationCustom03').value,
			};
			addUserToDataBase(
				user.id1,
				user.email,
				user.name,
				user.lastName,
				user.password
			);
		});
	});

	return section;
}

async function addUserToDataBase(
	idValue,
	validationEmail,
	validationCustom01,
	validationCustom02,
	validationCustom03
) {
	let answer;
	const user = {
		id1: idValue,
		firstName: validationCustom01,
		lastName: validationCustom02,
		password: validationCustom03,
		email: validationEmail,
	};

	await fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('SUCCESS:', 'Zarejestrowano!');
			answer = true;
		})
		.catch((error) => {
			console.error('Error:', error);
			answer = false;
		});
}

async function getMaxId() {
	let idCheck;

	await fetch('http://localhost:3000/users')
		.then((rep) => rep.json())
		.then((users) => {
			console.log('consolfetch');
			id = Math.max.apply(
				Math,
				users.map(function (e) {
					console.log('consolreturnID', e.id);
					idCheck = e.id;
					return e.id;
				})
			);
			console.log('retIDIDID', id);
			return id;
		})
		.catch((error) => {
			console.error('Error: ', error);
		});
	return idCheck;
}
