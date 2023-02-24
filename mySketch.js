let button;
let dado;
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let song7;

function setup() {
	createCanvas(400, 400);
	
	song1 = loadSound('1.aac');
	song2 = loadSound('2.aac');
	song3 = loadSound('3.aac');
	song4 = loadSound('4.aac');
	song5 = loadSound('5.aac');
	song6 = loadSound('6.aac');
  song7 = loadSound('shake-and-roll-dice.mp3');
	
	boton = createButton('TIRAR DADO'); 
	boton.size(200,100); 
	boton.mousePressed(lanzar); 
	
	dado = new Dado(width/2,height/2,400);
	tirarDado = new Tirar();
	dado.ver();
	dado.cinco();
}

function lanzar(){	
	tirarDado.tirar();
	
	dado.ver(); 
	
	tirarDado.ver(); 
  song7.play();
}


class Dado{
	constructor(_x,_y,_t){
		this.x=_x;
		this.y=_y;
		this.t=_t;
	}
	
	ver(){
		rectMode(CENTER); 
		noStroke(); //Sin bordes
		fill(208,229,240)
		rect(this.x, this.y, this.t, this.t, this.t/5); 
		fill(20); 
	}
	
	uno(){ 
		ellipse(this.x, this.y, this.t/4, this.t/4); 
		fill(208); 
	}
	
	dos(){ 
		ellipse(this.x/1.6, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y*1.4, this.t/4, this.t/4);
		fill(208);
	}
	
	tres(){ 
		ellipse(this.x/2, this.y/2, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x, this.y, this.t/4, this.t/4);
		fill(208);
	}
	
	cuatro(){ 
		ellipse(this.x/1.6, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x/1.6, this.y*1.4, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y*1.4, this.t/4, this.t/4);
		fill(208);
	}
	
	cinco(){ 
		ellipse(this.x/2, this.y/2, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y/2, this.t/4, this.t/4);
		ellipse(this.x/2, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x, this.y, this.t/4, this.t/4);
		fill(208);
	}
	
	seis(){ 
		ellipse(this.x/2, this.y/2.5, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y/2.5, this.t/4, this.t/4);
		ellipse(this.x/2, this.y*1.6, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.6, this.t/4, this.t/4);
		ellipse(this.x/2, this.y, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y, this.t/4, this.t/4);
		fill(208);
	}
}

class Tirar{ 
	
	constructor(){  
		this.numero=0; 
	}
	
	tirar(){ 
		this.numero=Math.floor( Math.random()*6+1); 
	}
	
	ver(){ //Creamos la funcion ver
		console.log("Has sacado un: " + this.numero); 
		
		if(this.numero===1){ 
			dado.uno();
			song1.play();
		}
		if(this.numero===2){ 
			dado.dos();
			song2.play();
		}
		if(this.numero===3){ 
			dado.tres();
			song3.play();
		}
		if(this.numero===4){ 
			dado.cuatro();
			song4.play();
		}
		if(this.numero===5){ 
			dado.cinco();
			song5.play();
		}
		if(this.numero===6){
			dado.seis();
			song6.play();
		}
	}
}