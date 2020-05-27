const player1 = "X" ;
const player2 = "O" ;
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();




function inicializarEspacos(){
	
	var espacos = document.getElementsByClassName("espaco");
/*	
	for (var i=0;i<espacos.length;i++){
		espacos[i].addEventListener("click", function(){
			
			if (gameOver){ return;} 
			
			if (this.getElementsByTagName("img").length==0){
				
				if (playTime==player1){
					
					this.innerHTML ="<img src='img/X.png'>";
					this.setAttribute("jogada", player1);
					playTime = player2;
				}else{
					this.innerHTML ="<img src='img/O.png'>";
					this.setAttribute("jogada", player2);
					playTime = player1;
				}
			}
			atualizaMostrador();
		})
	}
	*/
	
	espacos.forEach(espaco=>{
		espaco.addEventListener("click", function(){
			
			if (gameOver){ return;} 
			
			if (this.getElementsByTagName("img").length ==0){
				
				if (playTime == player1){
					this.innerHTML = "<img src='img/X.png'>";
					this.setAttribute("jogada", player1);
					playTime = player2;
				}else{
					this.innerHTML = "<img src='img/O.png'>";
					this.setAttribute("jogada", player2);
					playTime = player1;
				}
				atualizaMostrador();
				verificarVencedor();
			}
		});
	}) 
}

function atualizaMostrador(){
	
	if (gameOver) { return;}
	
	if (playTime == player1){
		
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "img/X.png")
		
	}
	
	if (playTime == player2){
		
		let player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "img/O.png")
		
	}
	
}

function verificarVencedor(){
	let a1 =document.querySelector("div#a1").getAttribute("jogada")
	let a2 =document.querySelector("div#a2").getAttribute("jogada")
	let a3 =document.querySelector("div#a3").getAttribute("jogada")
	
	let b1 =document.querySelector("div#b1").getAttribute("jogada")
	let b2 =document.querySelector("div#b2").getAttribute("jogada")
	let b3 =document.querySelector("div#b3").getAttribute("jogada")
	
	let c1 =document.querySelector("div#c1").getAttribute("jogada")
	let c2 =document.querySelector("div#c2").getAttribute("jogada")
	let c3 =document.querySelector("div#c3").getAttribute("jogada")
	
	let vencedor = "";
	
	if (((a1==b1&&a1==c1) || (a1==a2&&a1==a3) || (a1==b2&&a1==c3)) && a1!="") {
		vencedor = a1;
	}else if (((b2==b1&&b2==b3)||(b2==a2&&b2==c2)||(b2==a3&&b2==c1)) && b2!=""){
		vencedor = b2;
	}else if (((c3==c2&&c3==c1)||(c3==b3&&c3==a3)) &&c3!=""){
		vencedor = c3;
	}
	
	if (vencedor != "") {
		gameOver = true;
		
		await sleep(50);
		
		alert(`O vencedor foi o "${vencedor}"`)
	}
}

function sleep(ms){
	return new Promise
}