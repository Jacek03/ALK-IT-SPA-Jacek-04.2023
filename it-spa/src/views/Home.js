import { createEl } from '../common/createEl';
import { MyNAvi } from '../common/MyNAvi';
import { Register } from '../views/Register';
import { RoomList } from './RoomList';

// Home.js
export function Home() {
	const section = document.createElement('section');
	section.classList.add('homeContener');

	const img = document.createElement('img');
	img.src = require('../assets/support.png');
	img.style.width = '50vw'; // vw = view width

	section.innerHTML = `
	<div>
		<div class="car car1"></div>
		<div class="text-center caption">
	  <h1 class = "welcomeText">Witaj w IT SPA!</h1>
	 <a class="go-to-spa btn btn-lg" href="#course" background-color:#605A56>Przejdź do SPA!</a>
	</div>
	</div>

    `;
	

	const img1 = document.createElement('img');
	img1.classList.add('d-block', 'w-100');
	img1.src = require('../assets/lemonSPA.jpg');

	const div1 = section.querySelector('.car1');
	div1.append(img1);

	const course = createEl('div', [], { id: 'course' });
	course.innerHTML = `
  <div id="course">
          <div id="features">
		<div class="jumbotron text-center">
			<h2>Poznaj nas!</h2>
			<ul class="features-list">
				<li><span>
				Hotel
			  </span>
					
				</li>
         <div class ="hotelText">
		
			<div>Hotel IT SPA to znakomite miejsce na nocleg w centrum Wrocławia, blisko Rynku i Dworca Głównego. 
			Spokojna, zielona okolica i dogodne położenie, sprawia że jest często wybierany zarówno przez turystów, 
			jak i w celach służbowych. Hotel doskonale skomunikowany - z pobliskiego przystanku komunikacji miejskiej 
			(ul. Grabiszyńska), co 4 min. odjazd w kierunku najważniejszych miejsc i atrakcji Wrocławia. 
			Do dyspozycji Gości wygodne pokoje i rodzinne apartamenty. Ponadto w obiekcie znajduje się Chill Zone SPA, 
			klimatyzowana restauracja, sale konferencyjne, sale weselne i bankietowe. 
			Bezpośrednio przy hotelu parking dla samochodów osobowych, dostawczych i autokarów. Serdecznie zapraszamy!.
		  </div>
		  <div class= "imgHotelBox imgHotelBox1"></div>
		   </div>
			<li>
			<span>Nowoczesne SPA</span>
			</li>

			<div class ="hotelText">
          <p>Odprężająca kąpiel z hydromasażem
		  Ciepła kąpiel z hydromasażem to przede wszystkim przyjemność, ale również solidna porcja zdrowia.
		  Już dziesięciominutowa kąpiel obniża poziom stresu i działa na nas rozluźniająco. 
		  Pozwala oderwać się od codziennych problemów i zwiększa komfort psychiczny. 
		  W trakcie kąpieli w jacuzzi uwalniane są endorfiny czyli tzw. hormony szczęścia, 
		  które wprawiają w dobre samopoczucie oraz tłumią odczuwanie bólu.
		  Odzyskaj energię i witalność. Masaż to świetny sposób na odpoczynek i zniwelowanie zmęczenia zarówno fizycznego jak i psychicznego. Uwolnij się od ciągłego napięcia spowodowanego szybkim tempem życia i codziennymi troskami. 
		  Pozwól sobie na odrobinę luksusu i postaw na dobry masaż który przywróci energię i równowagę między ciałem a duchem.
		  </p>
		  <div class="imgHotelBox imgHotelBox2"></div>
		  </div>
			</ul>
		</div>
	</div>
  </div>
  `;

	// 	const gallery = document.createElement('gallery');

	// 	gallery.innerHTML = `  `;

	const imgHotel = document.createElement('img');
	imgHotel.classList.add('imgHotel');
	imgHotel.src = require('../assets/image 4.jpg');
	//imgHotel.style.width = '50vw'; // vw = view width



	const hotelText = course.querySelector('.imgHotelBox1');
	hotelText.append(imgHotel);


	const imgHotel2 = document.createElement('img');
	imgHotel2.classList.add('imgHotel2');
	imgHotel2.src = require('../assets/image 3.jpg');
	//imgHotel2.style.width = '50vw'; // vw = view width



	const hotelText2 = course.querySelector('.imgHotelBox2');
	hotelText2.append(imgHotel2);



	

	const resour = createEl('div', [], { id: 'resour' });
	resour.innerHTML = `

  <div id="resour">
  <div class="jumbotron">
    <div class="narrow">
      <div class="heading col-12">
	  <ul>
	 <li> 
	 <span>Zalety Hotelu</span>
	 </li> 
	  
	 </ul>
        
      </div>

      <div class="row text-center">
        <div class="col-lg-3">
          <div class="resource">
            <i class="fa fa-globe fa-3x" aria-hidden="true"></i>
            <h2>Odwiedzają nas</h2>
            <p>Nasz Hotel odwiedzają goście z całego świata bo jest on idealny dla osób, 
			które szukają miejsca do relaksu, zabawy i wytchnienia na świeżym powietrzu.
			Znajdziesz tu wszystko dla siebie i to w jednym miejscu.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fa fa-tree fa-3x" aria-hidden="true"></i>
            <h2>Krajobraz</h2>
            <p>Hotel malowniczo położony w okolicach lesów i jezior oferuje niezapomniane widoki, możliwość obcowania z naturą. 
			To tu znajdziesz ciszę i spokój, z dala od miejskiego zgiełku.
			Aktywne spędzenie czasu na świeżym powietrzu możesz realizować poprzez piesze lub rowerowe wycieczki</p>
          </div>	
        </div>
        <div class="col-lg-3">
          <div class="resource">
		  <i class="fa fa-area-chart fa-3x" aria-hidden="true"></i>
            <h2>Sporty wodne</h2>
            <p>Hotel nad jeziorem to idealne miejsce na spędzenie wolnego czasu dla osób, 
			które lubią aktywny wypoczynek na świeżym powietrzu związany z wędkowaniem, pływaniem, 
			czy uprawianiem różnego rodzaju dyscyplin wodnych. Na naszych gości czekają w wypożyczalni różnego rodzaju sprzęty.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fa fa-camera fa-3x" aria-hidden="true"></i>
            <h2>Atrakcje</h2>
            <p>Okolica bogata w przyrodę, z przepięknymi krajobrazami, niezliczoną mnogością róznych gatunków fauny i flory, 
			przyciąga w to miejsce pasjonatów fotografii, pieszych i rowerowych wycieczek oraz niezliczonych aktywnosci na wodzie.
			To wszystko możesz uwiecznić w kadrze.</p>
          </div>
      </div>
    </div>
  </div>
</div>
`;

	const clients = createEl('div', [], { id: 'clients' });
	clients.innerHTML = `

<div id="clients">
		<div class="jumbotron">
		<ul>
	 <li>
	 <span>Opinie naszych klientów:</span>
	
	 </li> 
	  </ul>
			
			</div>
			


			<div class="row text-center">
				<div class="col-md-3">
					<div class="row rowclient">
						<div id=client1 class="col-lg-4 col-sm-4">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Pierwszy raz skorzystałam z usług IT-SPA kilka miesięcy temu i to był strzał w diesiątkę. 
								Wcześniej szukałam możliwości zrelaksowania się w innych miejscach, ale to mnie urzekło. 
								Nigdy wcześniej nie udało mi się tak wypocząć i się zrelaksować. </p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Magda Mirecka</cite>
							</footer>
						</div>
					</div>
				</div>
				
        <div class="col-md-3">
					<div class="row rowclient">
						<div id=client2 class="col-lg-4 col-sm-4">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Ciche i kameralne miejsce z dala od centrum, w dodatku bardzo szeroki zakres usług przyciągnął mnie do IT SPA. To tu można naładować akumulatory i solidnie sie zrelaksować i wypocząć przy aromatycznej kawie i zapachu świec. </p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Ania Frankowska</cite>
							</footer>
						</div>
					</div>
				</div>

				<div class="col-md-3">
				<div class="row rowclient">
					<div id=client4 class="col-lg-4 col-sm-4">
					</div>
					<div class="col-lg-8 col-sm-8">
						<blockquote class="blockquote text-center">
							<p>Bywałam w wielu miejscach, ale to zrobiło na mnie i moim partnerze piorunujące wrwżenie.
							Jakość usług, której trudno szukać u konkurencji zdecydowanie pozwoliła mi na chwilę osobistej refleksji i podzielenia się 
							tymi wspaniałymi doznaniami z wami.</p>
						</blockquote>
						<hr class="jumbo-line">
						<footer class="blockquote-footer">
							<cite>Alexa Niemczyk</cite>
						</footer>
					</div>
				</div>
			</div>

				<div class="col-md-3">
					<div class="row rowclient">
						<div id=client3 class="col-lg-4 col-sm-4">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Spędziliśmy w hotelu z spa kilka dni i byliśmy zachwyceni. Pokoje były pięknie urządzone i bardzo wygodne, a obsługa była bardzo pomocna i przyjazna. Spa było niesamowite - masaże były świetne, a basen z gorącą wodą był idealny do relaksu. Gorąco polecam!!</p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Karolina Kowalczuk</cite>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
`;
	const imgClient1 = createEl('img', ['client']);
	const imgClient2 = createEl('img', ['client']);
	const imgClient3 = createEl('img', ['client']);
	const imgClient4 = createEl('img', ['client']);

	imgClient1.src = require('../assets/Ania.jpg');
	imgClient2.src = require('../assets/Magda.jpg');
	imgClient3.src = require('../assets/uwodzicielka.jpg');
	imgClient4.src = require('../assets/uwodzicielka1.jpg');

	const client1Div = clients.querySelector('#client1');
	const client2Div = clients.querySelector('#client2');
	const client3Div = clients.querySelector('#client3');
	const client4Div = clients.querySelector('#client4');

	client1Div.append(imgClient1);
	client2Div.append(imgClient2);
	client3Div.append(imgClient3);
	client4Div.append(imgClient4);

	const mapG = createEl('div', [], { id: 'mapG' });
	mapG.innerHTML = `


<ul>
	 <li> <span>Kontakt </span>
	 </li> 
	  </ul>

		<div class="contact">

		<div class=" text-center jumbotron">
			<p>  Al. Rzeczypospolitej 12 </p>
			<p>02-972, Warszawa</p>
			
			<div class="logoContact"></div>

				<strong>Zadzwoń: +48 (22) 555 000 333</strong>
				<hr/>
				
				</a>
				<a href="https://www.facebook.com" target="_blank">
				<i class="fab fa-facebook fa-2x"></i>
				
				<a href="https://www.youtube.com" target="_blank">
				<i class="fab fa-youtube-square fa-2x"></i>
				
				<a href="https://www.booksy.com" target="_blank">
				<i class="fas fa-coffee fa-2x fa-spin" style="color: #605a56;"></i>
				
				<a href="https://www.instagram.com" target="_blank">
				<i class="fab fa-instagram fa-2x"></i>
				
				<a href="https://www.twitter.com" target="_blank">
				<i class="fab fa-twitter fa-2x"></i>
				</a>
			</div>
		
		</div> 
	 
	  </div>

`;



	const contact = createEl('div', [], { id: 'contact' });
	contact.innerHTML = `

`;

	const logo = createEl('img', ['logoImgContact']);
	//Sprawdz to
	logo.src = require('../assets/itspaLogo.gif');
	const logoImg = mapG.querySelector('.logoContact');
	logoImg.append(logo);

	section.append(course, resour, clients, mapG, contact);

	return section;
}
