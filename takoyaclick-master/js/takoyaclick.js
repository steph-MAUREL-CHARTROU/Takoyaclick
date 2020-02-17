// ----------------------------------------------------mise en place des variables

//variables +1 mignon
let takoyaki=document.getElementById('takoyaki');

let plusScore1=document.getElementById('plusScore1');
let plusScore2=document.getElementById('plusScore2');
let	plusScore3=document.getElementById('plusScore3');
let	plusScore4=document.getElementById('plusScore4');
let	plusScore5=document.getElementById('plusScore5');
let	plusScore6=document.getElementById('plusScore6');
let	plusScore7=document.getElementById('plusScore7');
let	plusScore8=document.getElementById('plusScore8');
let	plusScore9=document.getElementById('plusScore9');
let	plusScore10=document.getElementById('plusScore10');
let	plusScore11=document.getElementById('plusScore11');
let	plusScore12=document.getElementById('plusScore12');
let	plusScore13=document.getElementById('plusScore13');
let	plusScore14=document.getElementById('plusScore14');
let	plusScore15=document.getElementById('plusScore15');
let	plusScore16=document.getElementById('plusScore16');
let	plusScore17=document.getElementById('plusScore17');
let	plusScore18=document.getElementById('plusScore18');

//variables element d'affichage
let wasabi=document.getElementById('wasabi');
let soja=document.getElementById('soja');

//variables element drapeau
let flag=document.getElementById('flag');
let flag2=document.getElementById('flag2');

//variables score et prix
let score=0;
let prixPate = 50;
let prixPoulpe = 500;
let prixSauce = 5000;
let prixKatsuo = 8000;
let prixBrochette = 1000;
let prixBento = 2500;
let prixKukku = 10000;
let prixLivreur = 100000;
let prixRestau1 = 1000000;
let prixRestau2 = 6500000;

//variables compteur de score, de secondes, des boutons et maximum des compteur
let cptTotal=1;
let cptSeconde=0;
let max1=500;
let max2=250;

let cptPate = 0;
let cptPoulpe = 0;
let cptSauce = 0;
let cptKatsuo = 0;
let cptBrochette = 0;
let cptBento = 0;
let cptKukku = 0;
let cptLivreur = 0;
let cptRestau1 = 0;
let cptRestau2 = 0;

let cptDrapeau = 0;

//variables timer
let timer=Date.now();


//variables affichage des prix
let spanPate=document.getElementById('spanPate');
let spanPoulpe=document.getElementById('spanPoulpe');
let spanSauce=document.getElementById('spanSauce');
let spanKatsuo=document.getElementById('spanKatsuo');
let spanBrochette=document.getElementById('spanBrochette');
let spanBento=document.getElementById('spanBento');
let spanKukku=document.getElementById('spanKukku');
let spanLivreur=document.getElementById('spanLivreur');
let spanRestau1=document.getElementById('spanRestau1');
let spanRestau2=document.getElementById('spanRestau2');

//variables elements info-bulles
let infoPate=document.getElementById('infoPate');
let infoPoulpe=document.getElementById('infoPoulpe');
let infoSauce=document.getElementById('infoSauce');
let infoKatsuo=document.getElementById('infoKatsuo');
let infoBrochette=document.getElementById('infoBrochette');
let infoBento=document.getElementById('infoBento');
let infoKukku=document.getElementById('infoKukku');
let infoLivreur=document.getElementById('infoLivreur');
let infoRestau1=document.getElementById('infoRestau1');
let infoRestau2=document.getElementById('infoRestau2');
let saveAlert=document.getElementById('saveAlert');
let loadAlert=document.getElementById('loadAlert');

//variables element bouton
let pate=document.getElementById('pate').firstElementChild.firstElementChild;
let poulpe=document.getElementById('poulpe').firstElementChild.firstElementChild;
let sauce=document.getElementById('sauce').firstElementChild.firstElementChild;
let katsuo=document.getElementById('katsuo').firstElementChild.firstElementChild;
let brochette=document.getElementById('brochette').firstElementChild.firstElementChild;
let bento=document.getElementById('bonusBento').firstElementChild.firstElementChild;
let kukku=document.getElementById('kukku').firstElementChild.firstElementChild;
let livreur=document.getElementById('livreur').firstElementChild.firstElementChild;
let restau1=document.getElementById('restau1').firstElementChild.firstElementChild;
let restau2=document.getElementById('restau2').firstElementChild.firstElementChild;

//initialisation du background
document.getElementById('container').parentNode.style.background='url("Image/bg'+(cptDrapeau+1)+'.png")';

//variable random
let cpt1=(Math.round(Math.random()*(max1-1))+1);
let cpt2=(Math.round(Math.random()*(max2-1))+1);
let cptChoisie=Math.round(Math.random()*8);

//---------------------------------------fonction afin de désactiver le bouton entrer
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    return false;
  }
}, true);


//---------------------------------------------------------------fonction sauvegarde
function save(){
	localStorage.setItem('score', score);
	localStorage.setItem('prixPate', prixPate);
	localStorage.setItem('prixPoulpe', prixPoulpe);
	localStorage.setItem('prixSauce', prixSauce);
	localStorage.setItem('prixKatsuo', prixKatsuo);
	localStorage.setItem('prixBrochette', prixBrochette);
	localStorage.setItem('prixBento', prixBento);
	localStorage.setItem('prixKukku', prixKukku);
	localStorage.setItem('prixLivreur', prixLivreur);
	localStorage.setItem('prixRestau1', prixRestau1);
	localStorage.setItem('prixRestau2', prixRestau2);
	localStorage.setItem('cptTotal', cptTotal);
	localStorage.setItem('cptSeconde', cptSeconde);
	localStorage.setItem('cptPate', cptPate);
	localStorage.setItem('cptPoulpe', cptPoulpe);
	localStorage.setItem('cptSauce', cptSauce);
	localStorage.setItem('cptKatsuo', cptKatsuo);
	localStorage.setItem('cptBrochette', cptBrochette);
	localStorage.setItem('cptBento', cptBento);
	localStorage.setItem('cptKukku', cptKukku);
	localStorage.setItem('cptLivreur', cptLivreur);
	localStorage.setItem('cptRestau1', cptRestau1);
	localStorage.setItem('cptRestau2', cptRestau2);
	localStorage.setItem('cptDrapeau', cptDrapeau);
	localStorage.setItem('max1', max1);
	localStorage.setItem('max2', max2);
	localStorage.setItem('timer',Date.now());

	//alert
	saveAlert.style.display='block';
	function stopSave(){
		saveAlert.style.display='none';
	}
	setTimeout(stopSave,2000);
}

//---------------------------------------------function de mise a jour des variables
function maj(){

	//maj drapeau
	switch(cptDrapeau){
		case 0:
		flag.firstElementChild.src='Image/japon.png';
		break;

		case 1:
		flag.firstElementChild.src='Image/france.jpg';
		break;

		case 2:
		flag.firstElementChild.src='Image/usa.png';
		break;

		default:
		flag.firstElementChild.src='Image/drapeau';
	}

	//maj compteur wasabi/soja
	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
	soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';

	//maj pate
	spanPate.innerHTML=ecritureNb(prixPate)+' x';
	infoPate.innerHTML='info<span>Rajoute de la pâte à beignet petit Kukku ! <br>Chaque pâte à beignet te rajoute 1 clique <br><br><br>'+ecritureNb(cptPate)+' / '+ecritureNb(max1)+'</span>';
	if(cptPate>=max1){
		pate.disabled=true;
		pate.firstElementChild.src="Image/pateGris.png";
		spanPate.innerHTML='MAX';
	}else{
		pate.disabled=false;
		pate.firstElementChild.src="Image/pate.png";
	}

	//maj poulpe
	spanPoulpe.innerHTML=ecritureNb(prixPoulpe)+' x';
	infoPoulpe.innerHTML='info<span>Rajoute du poulpe petit Kukku ! <br>Chaque pouple te rajoute 5 cliques <br><br><br>'+ecritureNb(cptPoulpe)+' / '+ecritureNb(max1)+'</span>';
	if(cptPoulpe>=max1){
		poulpe.disabled=true;
		poulpe.firstElementChild.src="Image/poulpeGris.png";
		spanPoulpe.innerHTML='MAX';
	}else{
		poulpe.disabled=false;
		poulpe.firstElementChild.src="Image/poulpe.png";
	}

	//maj sauce
	spanSauce.innerHTML=ecritureNb(prixSauce)+' x';
	infoSauce.innerHTML='info<span>Rajoute de la sauce petit Kukku ! <br>Chaque sauce te rajoute 10 cliques <br><br><br> '+ecritureNb(cptSauce)+' / '+ecritureNb(max1)+'</span>';
	if(cptSauce>=max1){
		sauce.disabled=true;
		sauce.firstElementChild.src="Image/sauceGris.png";
		spanSauce.innerHTML='MAX';
	}else{
		sauce.disabled=false;
		sauce.firstElementChild.src="Image/sauce.png";
	}

	//maj Katsuobushi
	spanKatsuo.innerHTML=ecritureNb(prixKatsuo)+' x';
	infoKatsuo.innerHTML='info<span>Rajoute du Katsuobushi petit Kukku ! <br>Chaque Katsuobushi te rajoute 20 cliques <br><br><br> '+ecritureNb(cptKatsuo)+' / '+ecritureNb(max2)+'</span>';
	if(cptKatsuo>=max2){
		katsuo.disabled=true;
		katsuo.firstElementChild.src="Image/boniteGris.png";
		spanKatsuo.innerHTML='MAX';
	}else{
		katsuo.disabled=false;
		katsuo.firstElementChild.src="Image/bonite.png";
	}

	//maj Brochette
	spanBrochette.innerHTML=ecritureNb(prixBrochette)+' x';
	infoBrochette.innerHTML='info<span>Fais des brochettes petit Kukku ! <br>Chaque brochette clique pour toi X 3 <br><br><br>'+ecritureNb(cptBrochette)+' / '+ecritureNb(max2)+'</span>';
	if (cptBrochette>=max2){
		brochette.disabled=true;
		brochette.firstElementChild.src="Image/brochetteGris.png";
		spanBrochette.innerHTML='MAX';
	}else if (cptBrochette>=1){
		brochette.disabled=false;
		brochette.firstElementChild.src="Image/brochette.png";
	}else{
		brochette.disabled=false;
		brochette.firstElementChild.src="Image/brochette.png";
	}

	//maj Bento
	spanBento.innerHTML=ecritureNb(prixBento)+' x';
	infoBento.innerHTML='info<span>Fais des bentos petit Kukku ! <br> Chaque bento clique pour toi X 6 <br><br><br>'+ecritureNb(cptBento)+' / '+ecritureNb(max2)+'</span>';
	if (cptBento>=max2){
		bento.disabled=true;
		bento.firstElementChild.src="Image/bentoGris.png";
		spanBento.innerHTML='MAX';
	}else if (cptBento>=1){
		bento.disabled=false;
		bento.firstElementChild.src="Image/bento.png";
	}else{
		bento.disabled=false;
		bento.firstElementChild.src="Image/bento.png";
	}

	//maj Kukku
	spanKukku.innerHTML=ecritureNb(prixKukku)+' x';
	infoKukku.innerHTML='info<span>Engage plus de petits kukkus !<br> Chaque kukkus clique pour toi X 12 <br><br><br>'+ecritureNb(cptKukku)+' / '+ecritureNb(max2)+'</span>';
	if (cptKukku>=max2){
		kukku.disabled=true;
		kukku.firstElementChild.src="Image/kukkuGris.png";
		spanKukku.innerHTML='MAX';
	}else if (cptKukku>=1){
		kukku.disabled=false;
		kukku.firstElementChild.src="Image/kukku.png";
	}else{
		kukku.disabled=false;
		kukku.firstElementChild.src="Image/kukku.png";
	}

	//maj livreur
	spanLivreur.innerHTML=ecritureNb(prixLivreur)+' x';
	infoLivreur.innerHTML='info	<span>Engage plus de petits livreurs !<br>Chaque livreur clique pour toi X 50 <br><br><br>'+ecritureNb(cptLivreur)+' / '+ecritureNb(max2)+'</span>';
	if (cptLivreur>=max2){
		livreur.disabled=true;
		livreur.firstElementChild.src="Image/livreurGris.png";
		spanLivreur.innerHTML='MAX';
	}else if (cptLivreur>=1){
		livreur.disabled=false;
		livreur.firstElementChild.src="Image/livreur.png";
	}else{
		livreur.disabled=false;
		livreur.firstElementChild.src="Image/livreur.png";
	}

	//maj Isakaya
	spanRestau1.innerHTML=ecritureNb(prixRestau1)+' x';
	infoRestau1.innerHTML='info<span>Ouvre tes propres Isakaya!<br>Chaque Isakaya clique pour toi X 250 <br><br><br>'+ecritureNb(cptRestau1)+' / '+ecritureNb(max2)+'</span>';
	if (cptRestau1>=max2){
		restau1.disabled=true;
		restau1.firstElementChild.src="Image/restaurantGris.png";
		spanRestau1.innerHTML='MAX';
	}else if (cptRestau1>=1){
		restau1.disabled=false;
		restau1.firstElementChild.src="Image/restaurant.png";
	}else{
		restau1.disabled=false;
		restau1.firstElementChild.src="Image/restaurant.png";
	}

	//maj Chaine d'Isakaya
	spanRestau2.innerHTML=ecritureNb(prixRestau2)+' x';
	infoRestau2.innerHTML='info<span>Créer ta chaine d\'Isakaya!<br>Chaque Isakaya clique pour toi X 500 <br><br><br>'+ecritureNb(cptRestau2)+' / 1</span>';
	if (cptRestau2>=1){
		restau2.disabled=true;
		restau2.firstElementChild.src="Image/desRestaurantsGris.png";
		spanRestau2.innerHTML='MAX';
	}else if(cptRestau2>=1){
		restau2.disabled=false;
		restau2.firstElementChild.src="Image/desRestaurants.png";
	}else{
		restau2.disabled=false;
		restau2.firstElementChild.src="Image/desRestaurants.png";
	}

	//compteur seconde
	if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			intervalS=setInterval(clickS,1000);
	}
		
	//maj Drapeau
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}

	//maj background
	document.getElementById('container').parentNode.style.background='url("Image/bg'+(cptDrapeau+1)+'.png")';
}

//---------------------------------------------------------------fonction chargement
function load(){

	//chargement variables
	score=Number(localStorage.getItem('score'));
	prixPate=Number(localStorage.getItem('prixPate'));
	prixPoulpe=Number(localStorage.getItem('prixPoulpe'));
	prixSauce=Number(localStorage.getItem('prixSauce'));
	prixKatsuo=Number(localStorage.getItem('prixKatsuo'));
	prixBrochette=Number(localStorage.getItem('prixBrochette'));
	prixBento=Number(localStorage.getItem('prixBento'));
	prixKukku=Number(localStorage.getItem('prixKukku'));
	prixLivreur=Number(localStorage.getItem('prixLivreur'));
	prixRestau1=Number(localStorage.getItem('prixRestau1'));
	prixRestau2=Number(localStorage.getItem('prixRestau2'));
	cptTotal=Number(localStorage.getItem('cptTotal'));
	cptSeconde=Number(localStorage.getItem('cptSeconde'));
	cptPate=Number(localStorage.getItem('cptPate'));
	cptPoulpe=Number(localStorage.getItem('cptPoulpe'));
	cptSauce=Number(localStorage.getItem('cptSauce'));
	cptKatsuo=Number(localStorage.getItem('cptKatsuo'));
	cptBrochette=Number(localStorage.getItem('cptBrochette'));
	cptBento=Number(localStorage.getItem('cptBento'));
	cptKukku=Number(localStorage.getItem('cptKukku'));
	cptLivreur=Number(localStorage.getItem('cptLivreur'));
	cptRestau1=Number(localStorage.getItem('cptRestau1'));
	cptRestau2=Number(localStorage.getItem('cptRestau2'));
	cptDrapeau=Number(localStorage.getItem('cptDrapeau'));
	max1=Number(localStorage.getItem('max1'));
	max2=Number(localStorage.getItem('max2'));
	timer=Number(localStorage.getItem('timer'));

	score=score+(cptSeconde*Math.round((Date.now()-timer)/1000));


	//effacement des intervalles avant re-création
	for (var i = 1; i<10000; i++){
        window.clearInterval(i);
	}

	//maj
	maj();

	//alert
	loadAlert.style.display='block';
	function stopLoad(){
		loadAlert.style.display='none';
	}
	setTimeout(stopLoad,2000);
}

//--------------------------------------------------------ecriture nombre k,M,mi,...
function ecritureNb(nb){
	if (nb>=1000000000000){
		return((Math.round(nb/10000000000)/100)+'bi');
	}else if (nb>=1000000000){
		return((Math.round(nb/10000000)/100)+'mi');
	}else if(nb>=1000000){
		return((Math.round(nb/10000)/100)+'M');
	}else if (nb>=1000){
		return((Math.round(nb/10)/100)+'k');
	}else if (nb<1000){
		return(nb);
	}
}

//----------------------------------------------------------------Animation takoyaki
//animation takoyaki lorsque la souris debute un clique
takoyaki.addEventListener('mousedown', function(e){
	let r=Math.round(Math.random()*17)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+ecritureNb(cptTotal)+'<img src="Image/takoyaki" alt="takoyaki" height:"50px" width="50px">';
	if (r<=6){	
		plus.setAttribute('class','on1');
	}else if (r>=13){	
		plus.setAttribute('class','on3');
	}else{	
		plus.setAttribute('class','on2');
	}
});

//animation takoyaki lorque la souris fini un clique
takoyaki.addEventListener('mouseup', function(e){
		plusScore1.setAttribute('class','off');
		plusScore2.setAttribute('class','off');
		plusScore3.setAttribute('class','off');
		plusScore4.setAttribute('class','off');
		plusScore5.setAttribute('class','off');
		plusScore6.setAttribute('class','off');
		plusScore7.setAttribute('class','off');
		plusScore8.setAttribute('class','off');
		plusScore9.setAttribute('class','off');
		plusScore10.setAttribute('class','off');
		plusScore11.setAttribute('class','off');
		plusScore12.setAttribute('class','off');
		plusScore13.setAttribute('class','off');
		plusScore14.setAttribute('class','off');
		plusScore15.setAttribute('class','off');
		plusScore16.setAttribute('class','off');
		plusScore17.setAttribute('class','off');
		plusScore18.setAttribute('class','off');
});

//----------------------------------------------------------images brillante en hover
function pate1(x){
	if (cptPate<max1){
		x.src='Image/pate2.png';
	}
}

function pate2(x){
	if (cptPate<max1){
		x.src='Image/pate.png';
	}
}

function poulpe1(x){
	if (cptPoulpe<max1){
		x.src='Image/poulpe2.png';
	}
}

function poulpe2(x){
	if (cptPoulpe<max1){
		x.src='Image/poulpe.png';
	}
}

function sauce1(x){
	if (cptSauce<max1){
		x.src='Image/sauce2.png';
	}
}

function sauce2(x){
	if (cptSauce<max1){
		x.src='Image/sauce.png';
	}
}

function bonite1(x){
	if (cptKatsuo<max2){
		x.src='Image/bonite2.png';
	}
}

function bonite2(x){
	if (cptKatsuo<max2){
		x.src='Image/bonite.png';
	}
}

function brochette1(x){
	if (cptBrochette<max2){
		x.src='Image/brochette2.png';
	}
}

function brochette2(x){
	if (cptBrochette<max2){
		x.src='Image/brochette.png';
	}
}

function bento1(x){
	if (cptBento<max2){
		x.src='Image/bento2.png';
	}
}

function bento2(x){
	if (cptBento<max2){
		x.src='Image/bento.png';
	}
}

function kukku1(x){
	if (cptKukku<max2){
		x.src='Image/kukku2.png';
	}
}

function kukku2(x){
	if (cptKukku<max2){
		x.src='Image/kukku.png';
	}
}

function livreur1(x){
	if (cptLivreur<max2){
		x.src='Image/livreur2.png';
	}
}

function livreur2(x){
	if (cptLivreur<max2){
		x.src='Image/livreur.png';
	}
}

function restaurant1(x){
	if (cptRestau1<max2){
		x.src='Image/restaurant2.png';
	}
}

function restaurant2(x){
	if (cptRestau1<max2){
		x.src='Image/restaurant.png';
	}
}

function desRestaurants1(x){
	if (cptRestau2<1){
		x.src='Image/desRestaurants2.png';
	}
}

function desRestaurants2(x){
	if (cptRestau2<1){
		x.src='Image/desRestaurants.png';
	}
}

function tako1(x){
	x.src='Image/takoyakiCONTOUR2.png';
}

function tako2(x){
	x.src='Image/takoyakiCONTOUR.png';
}

//-------------------------------------------------fonction du click sur le takoyaki
function buttonClick(){
	score=score+cptTotal; // score = score + compteur
    wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

//--------------------------------------------------------fonctions d'incrémentation
//bouton pate
function incrementerPate (x) {
	if (score>=prixPate){
		cptPate++;
		cptTotal++;
		score=score-prixPate;
		prixPate=prixPate+50;
		spanPate.innerHTML=ecritureNb(prixPate)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoPate.innerHTML='info<span>Rajoute de la pâte à beignet petit Kukku ! <br>Chaque pâte à beignet te rajoute 1 clique <br><br><br>'+ecritureNb(cptPate)+' / '+ecritureNb(max1)+'</span>';
		if(cptPate>=max1){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/pateGris.png";
			spanPate.innerHTML='MAX';
		}
		random();
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//bouton poulpe
function incrementerPoulpe (x) {
	if (score>=prixPoulpe){
		cptPoulpe++;
		cptTotal=cptTotal+5;
		score=score-prixPoulpe;
		prixPoulpe=prixPoulpe+500;
		spanPoulpe.innerHTML=ecritureNb(prixPoulpe)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoPoulpe.innerHTML='info<span>Rajoute du poulpe petit Kukku ! <br>Chaque pouple te rajoute 5 cliques <br><br><br>'+ecritureNb(cptPoulpe)+' / '+ecritureNb(max1)+'</span>';
		if(cptPoulpe>=max1){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/poulpeGris.png";
			spanPoulpe.innerHTML='MAX';
		}
		random();
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//bouton sauce
function incrementerSauce (x) {
	if (score>=prixSauce){
		cptSauce++;
		cptTotal=cptTotal+10;
		score=score-prixSauce;
		prixSauce=prixSauce+500;
		spanSauce.innerHTML=ecritureNb(prixSauce)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoSauce.innerHTML='info<span>Rajoute de la sauce petit Kukku ! <br>Chaque sauce te rajoute 10 cliques <br><br><br> '+ecritureNb(cptSauce)+' / '+ecritureNb(max1)+'</span>';
		if(cptSauce>=max1){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/sauceGris.png";
			spanSauce.innerHTML='MAX';
		}
		random();
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//bouton katsuobuki
function incrementerKatsuo (x) {
	if (score>=prixKatsuo){
		cptKatsuo++;
		cptTotal=cptTotal+20;
		score=score-prixKatsuo;
		prixKatsuo=prixKatsuo+500;
		spanKatsuo.innerHTML=ecritureNb(prixKatsuo)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoKatsuo.innerHTML='info<span>Rajoute du Katsuobushi petit Kukku ! <br>Chaque Katsuobushi te rajoute 20 cliques <br><br><br> '+ecritureNb(cptKatsuo)+' / '+ecritureNb(max2)+'</span>';
		if(cptKatsuo>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/boniteGris.png";
			spanKatsuo.innerHTML='MAX';
		}
		random();
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonctions d'incrémentation et d'incrémentation continue des brochettes
function clickS(){
	score=score+(cptSeconde);
 	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerBrochette(x){

	if (score>=prixBrochette){
		cptBrochette++;
		cptSeconde=cptSeconde+3;
		score=score-prixBrochette;
		prixBrochette=prixBrochette+1000;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanBrochette.innerHTML=ecritureNb(prixBrochette)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoBrochette.innerHTML='info<span>Fais des brochettes petit Kukku ! <br>Chaque brochette clique pour toi X 3 <br><br><br>'+ecritureNb(cptBrochette)+' / '+ecritureNb(max2)+'</span>';
		if (cptBrochette>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/brochetteGris.png";
			spanBrochette.innerHTML='MAX';
		}
		random();
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonction d'incrémentation continue des bentos

function incrementerBento(x){

	if (score>=prixBento){
		cptBento++;
		cptSeconde=cptSeconde+6;
		score=score-prixBento;
		prixBento=prixBento+1500;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanBento.innerHTML=ecritureNb(prixBento)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoBento.innerHTML='info<span>Fais des bentos petit Kukku ! <br> Chaque bento clique pour toi X 6 <br><br><br>'+ecritureNb(cptBento)+' / '+ecritureNb(max2)+'</span>';
		if (cptBento>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/bentoGris.png";
			spanBento.innerHTML='MAX';
		}
		random();
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonction d'incrémentation continue des kukkus
function incrementerKukku(x){

	if (score>=prixKukku){
		cptKukku++;
		cptSeconde=cptSeconde+12;
		score=score-prixKukku;
		prixKukku=prixKukku+1000;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanKukku.innerHTML=ecritureNb(prixKukku)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoKukku.innerHTML='info<span>Engage plus de petits kukkus !<br> Chaque kukkus clique pour toi X 12 <br><br><br>'+ecritureNb(cptKukku)+' / '+ecritureNb(max2)+'</span>';
		if (cptKukku>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/kukkuGris.png";
			spanKukku.innerHTML='MAX';
		}
		random();
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonction d'incrémentation continue des livreurs
function incrementerLivreur(x){

	if (score>=prixLivreur){
		cptLivreur++;
		cptSeconde=cptSeconde+50;
		score=score-prixLivreur;
		prixLivreur=prixLivreur+5000;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanLivreur.innerHTML=ecritureNb(prixLivreur)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoLivreur.innerHTML='info	<span>Engage plus de petits livreurs !<br>Chaque livreur clique pour toi X 50 <br><br><br>'+ecritureNb(cptLivreur)+' / '+ecritureNb(max2)+'</span>';
		if (cptLivreur>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/livreurGris.png";
			spanLivreur.innerHTML='MAX';
		}
		random();
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonction d'incrémentation continue des isakayas
function incrementerRestau1(x){

	if (score>=prixRestau1){
		cptRestau1++;
		cptSeconde=cptSeconde+250;
		score=score-prixRestau1;
		prixRestau1=prixRestau1+10000;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanRestau1.innerHTML=ecritureNb(prixRestau1)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoRestau1.innerHTML='info<span>Ouvre tes propres Isakaya!<br>Chaque Isakaya clique pour toi X 250 <br><br><br>'+ecritureNb(cptRestau1)+' / '+ecritureNb(max2)+'</span>';
		if (cptRestau1>=max2){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/restaurantGris.png";
			spanRestau1.innerHTML='MAX';
		}
		random();
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//fonction d'incrémentation continue de la chaine de restaurant
function incrementerRestau2(x){

	if (score>=prixRestau2){
		cptRestau2++;
		cptSeconde=cptSeconde+500;
		score=score-prixRestau2;
		prixRestau2=prixRestau2+300000;
		if (cptBrochette>1 || cptBento>1 || cptKukku>1 || cptLivreur>1 || cptRestau1>1 || cptRestau2>1){
			clearInterval(intervalS);
		}
		intervalS=setInterval(clickS,1000);
		spanRestau2.innerHTML=ecritureNb(prixRestau2)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoRestau2.innerHTML='info<span>Créer ta chaine d\'Isakaya!<br>Chaque Isakaya clique pour toi X 500 <br><br><br>'+ecritureNb(cptRestau2)+' / 1</span>';
		if (cptRestau2>=1){
			x.disabled=true;
			alert('FINISH');
			x.firstElementChild.src="Image/desRestaurantsGris.png";
			spanRestau2.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}	
	
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		flag.className='flag2';
		flag.disabled='false';
	}else{
		flag.className='flag1';
		flag.disabled='true';
	}
}

//--------------------------------------------------fonction de changement du drapeau
function buttonFlag(){
	if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
		switch(cptDrapeau){
			case 0:
				alert('Vous avez conquis le Japon, il est maintenant temps de conquérir la France !');
			break;

			case 1:
				alert('Vous avez conquis la France, il est maintenant temps de conquérir les Etats-Unis !');
			break;

			default:
				alert('Soi vous avez conquérit le monde soi il y a une erreur');
		}
		
	
		score=0;
		prixPate = 50;
		prixPoulpe = 500;
		prixSauce = 5000;
		prixKatsuo = 8000;
		prixBrochette = 500;
		prixBento = 1000;
		prixKukku = 10000;
		prixLivreur = 100000;
		prixRestau1 = 1000000;
		prixRestau2 = 6500000;

		cptDrapeau++;

		cptTotal=50*cptDrapeau;
		cptSeconde=0;
		max1=500*(cptDrapeau+1);
		max2=250*(cptDrapeau+1);

		cptPate = 0;
		cptPoulpe = 0;
		cptSauce = 0;
		cptKatsuo = 0;
		cptBrochette = 0;
		cptBento = 0;
		cptKukku = 0;
		cptLivreur = 0;
		cptRestau1 = 0;
		cptRestau2 = 0;

		maj();
	}
}

if (cptPate>=max1 && cptPoulpe>=max1 && cptSauce>=max1 && cptKatsuo>=max2 && cptBrochette>=max2 && cptBento>=max2 && cptKukku>=max2 && cptLivreur>=max2 && cptRestau1>=max2 && cptRestau2>=1){
	flag.className='flag2';
	flag.disabled='false';
}else{
	flag.className='flag1';
	flag.disabled='true';
}

//-------------------------------------------fonction du ramdom des vagues(evenement)
function random(){
	switch (cptChoisie){
		case 0:
			if (cptPate===cpt1){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 1:
			if (cptPoulpe===cpt1){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 2:
			if (cptSauce===cpt1){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 3:
			if (cptKatsuo===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 4:
			if (cptBrochette===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 5:
			if (cptBento===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 6:
			if (cptKukku===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 7:
			if (cptLivreur===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
		case 8:
			if (cptRestau1===cpt2){
				document.getElementById('tsu').style.display='block';
				score=0;
				maj();
			}
		break;
	}	
}
