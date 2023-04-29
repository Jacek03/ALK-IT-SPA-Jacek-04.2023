import { MyNAvi } from '../common/MyNAvi';
import { Register } from '../views/Register';
import { Home } from '../views/Home';
// dodać Mediaquery
// Podsumowanie koszyka
// Wybór daty przyjazdu i wyjazdu oraz pokoju

//przerób na form
//przykład formularzy https://getbootstrap.com/docs/5.0/forms/validation/
export function Login() {
	const div = document.createElement('section');
	div.classList.add('mb-3', 'row');
	div.classList.add('login');
	div.innerHTML = `
    <section>
    <h1>Zaloguj się</h1>
    <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
    <div>
    <footer></footer>
    </div>
    </section>
    <h1>Zarejestruj się</h1>
    <section class='Register'>
    </section>
    <section class='test'>
    </section>
    `;

	// const button = document.createElement('button');
	// button.classList.add('btn', 'btn-success');
	// button.innerText = 'button';
	// button.addEventListener('click', function () {
	// 	MyNAvi(Register);
	// });
	// const sectionRegister = div.querySelector('.Register');
	// sectionRegister.append(button);

	const button1 = document.createElement('button');
	button1.classList.add('btn', 'btn-success', 'registerButton');
	button1.innerText = 'Zarejestruj';
	button1.addEventListener('click', function () {
		MyNAvi(Register);
	});

	const sectionR = div.querySelector('.test');
	sectionR.append(button1);
	// <section id=100 class='Register'>
	// div.querySelector('#100')

	// div1.innerHTML=`
	// <button type="button" class="btn btn-danger" >Tralaa</button>
	// `;
	// div.append(div1);

	const logInButton = document.createElement('button');
	logInButton.innerText = 'Zaloguj';
	logInButton.classList.add('btn', 'btn-primary', 'loginButton');
	logInButton.addEventListener('click', () => {
		MyNAvi(Home);
	});

	// const registerButton = document.createElement('button');
	// registerButton.innerText = 'Zarejestruj';
	// registerButton.classList.add('btn','btn-success');
	// registerButton.addEventListener('click', () => {
	//  MyNAvi(Register);
	//  }
	// );
	div.querySelector('footer').append(logInButton);

	return div;
}
