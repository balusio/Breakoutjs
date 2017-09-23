var juego, 
	timing,
	loopimg,
	trackingloop, 
	offset, 
	glitchInterval,
	pelotaInterval,
	gameStart = false,
	space = 0,
	SONIDOS=
	{
	   "beep"   : new Audio("data:audio/ogg;base64,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"),
	   "gol"    : new Audio("data:audio/ogg;base64,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"),
	   "plop"   : new Audio("data:audio/ogg;base64,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")
	},timer, 
		    fullText, 
		    currentOffset, 
		    onComplete, 
		    wordSet,
		    mouseset = false;



	

	function Speak( text) {
	    document.getElementById("messageFinal").innerHTML = text;
	    fullText = text;
	    wordSet = text.split("");
	    currentOffset = 0;
	    timer = setInterval(onTick, 100);
	}

	function onTick() {
	    currentOffset++;
	    if (currentOffset == wordSet.length) {
	        complete();
	        return;
	    }
	    var text = "";
	    for(var i = 0; i < currentOffset; i++){
	     text += wordSet[i] + "";

	    }
	   		      text.trim();
	   	 document.getElementById("messageFinal").innerHTML=text;   
	}

	function complete() {
	    clearInterval(timer);
	    timer = null;
	    document.getElementById("messageFinal").innerHTML=text;
	   
	}


	if(window.innerWidth <=400){
		document.getElementById("imageEgo").setAttribute("src", "img/bg-ego-mobile-low.png");
	}

	if(window.innerWidth >=401 && window.innerWidth <= 660){
		document.getElementById("imageEgo").setAttribute("src", "img/bg-ego-mobile.png");
	}
	if(window.innerWidth >=661 && window.innerWidth<=980){
			document.getElementById("imageEgo").setAttribute("src", "img/bg-ego-tablet.png");
	}



function Controles(){
	
    this.IZQUIERDA=false;
    this.DERECHA=false;
    var self = this;
    document.body.onkeydown=function(e){
        switch(e.keyCode){
            case 37: //IZQUIERDA
                e.preventDefault();
                self.IZQUIERDA=true;

  
                break;
            case 39: //DERECHA
                e.preventDefault();
                self.DERECHA=true;
                break;
            case 13:
    			e.preventDefault();
                self.ENTER=true;
            	break;
        }
    };
    document.body.onkeyup=function(e){
        switch(e.keyCode){
            case 37: //IZQUIERDA
                e.preventDefault();
                self.IZQUIERDA=false;
                break;
            case 39: //DERECHA
                e.preventDefault();
                self.DERECHA=false;
                break;
      
        }
    };
};

if( window.innerWidth>980){
	space =(window.innerWidth-980)/2;
}
var rect,
mouseX,
mouseY,
distXmouse,
distYmouse,
timeMouse;
function startGame(){
	juego = new game();
	var tankImg = document.getElementById('imageToGlitch');/*new Image();
	tankImg.src = "img/bg-ego-full.png";	*/
	/*===========================================================================================================


													MOUSE MOVEMENT



	=================================================================================================================*/
	rect = juego.canvas.getBoundingClientRect();
	/*function detectLeftButton(evt) {
    evt = evt || window.event;
    if ("buttons" in evt) {
        return evt.buttons == 1;
    }
    var button = evt.which || evt.button;
    return button == 1;
}*/
	juego.canvas.addEventListener('mousedown', function(evt) {
		if(evt.buttons ==1){
			timeMouse=Date.now();
   		
        	mouseX = evt.clientX - rect.left;
        	mouseY = evt.clientY - rect.top;

        	distXmouse =0;	
		}

     
    }, false);
	juego.canvas.addEventListener('mousemove', function(evt) {
			if(evt.buttons == 1 && mouseX >juego.player.x && mouseX <=juego.player.x+juego.player.ancho && mouseY>=juego.player.y){
				//console.log("move");
				var delta=(Date.now() - timeMouse)/1000;
				var mousemoveX = evt.clientX - rect.left;
	        	var mousemoveY = evt.clientY - rect.top;
	        	var howmuchmove;
	        	distXmouse += 40  ;
	        	howmuchmove = distXmouse *delta /1000
				if(mousemoveX >juego.player.x +juego.player.ancho/2 && mousemoveX < juego.player.x +juego.player.ancho){
					
					if(juego.player.x+juego.player.ancho <=juego.canvas.width ){
						distXmouse = +distXmouse  ;
						juego.player.x += howmuchmove;
					}
					
					
				}
				
				if(mousemoveX > juego.player.x && mousemoveX < juego.player.x +juego.player.ancho/2){
			
					if(juego.player.x >=1){
						distXmouse = -distXmouse;
						juego.player.x -= howmuchmove;
					}
					
				}
			}
			
		
	});
	juego.canvas.addEventListener('mouseup', function(evt) {
 		mouseset = true;
        distXmouse =0;
	});
	var init = function() {

		clearInterval(glitchInterval);
		juego.context.drawImage(tankImg,space,0);
		 w = juego.canvas.width;
		offset = w * .1;
		 h = ~~(tankImg.height * ((w - (offset * 2)) / tankImg.width));
		glitchInterval = setInterval(function() {

			juego.context.clearRect(0, 0, w, h);

			juego.context.drawImage(tankImg,space,0);
			
			setTimeout(glitchImg, randInt(200, 100));
		}, 250);
	};

	
	    
	var glitchImg = function() {
		for (var i = 0; i < randInt(1, 13); i++) {
			var x = Math.random() * w;
			var y = Math.random() * h;
			var spliceWidth = w - x;
			var spliceHeight = randInt(5, h / 3);
			juego.context.drawImage(tankImg, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
			juego.context.drawImage(tankImg, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
		}
	};

	var randInt = function(a, b) {
		return ~~(Math.random() * (b - a) + a);
	};

/*	function ImageLoop(){


	for (i = 0; i < length; i += 4) {
            
                pixels[i] *= 1;
                pixels[i + 1] *= 2 * 1;
                pixels[i + 2] *= 5 * 2;
           
            
                brightness = pixels[i] * 1 + pixels[i + 1] * 2 + pixels[i + 2] * 1;
                pixels[i] = brightness;
                pixels[i + 1] = brightness;
                pixels[i + 2] = brightness;
        

      
                offset = randomRange(1, 5);
                pixels[i] = (pixels[i + 4 * offset] === undefined) ? 0 : pixels[i + 4 * offset];
                offset = 10;
                pixels[i + 1] = (pixels[i + 1 + 4 * offset] === undefined) ? 0 : pixels[i + 1 + 4 * offset];
                offset =10;
                pixels[i + 2] = (pixels[i + 2 + 4 * offset] === undefined) ? 0 : pixels[i + 2 + 4 * offset];
           
        }

   
            i = 0;
            for (y = 0; y < juego.canvas.height; y++) {
                offset = (y % (15 * randomRange(1, 3)) === 0) ? Math.round(Math.random() * (5 * randomRange(1, 2))) : offset;
                for (x = 0; x < juego.canvas.width; x++) {
                    i += 4;
                    pixels[i + 0] = (pixels[i + 4 * offset] === undefined) ? 0 : pixels[i + 4 * offset];
                    pixels[i + 1] = (pixels[i + 1 + 4 * offset] === undefined) ? 0 : pixels[i + 1 + 4 * offset];
                    pixels[i + 2] = (pixels[i + 2 + 4 * offset] === undefined) ? 0 : pixels[i + 2 + 4 * offset];
                }
            }
       		juego.context.putImageData(imageData, 0, 0);





	}

	function randomRange(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function tracking(){
		var trackimg = new Image();
		trackimg.src = "img/largedisplacment_reverse.png";
		juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
		juego.canvas.style.backgroundColor= '#000000';
		var width =  juego.canvas.width/2 *Math.random(0,juego.canvas.width);
		var height = juego.canvas.height/2 * Math.random(0,juego.canvas.height);
		juego.context.drawImage(trackimg,width,height,juego.canvas.width,Math.random(0,40),width,height,juego.canvas.width*1.5,Math.random(0,40));	
		trackingloop = requestAnimationFrame(tracking);
	}
*/
	function noise(){
		clearInterval(glitchInterval);	
	    var w = juego.canvas.width,
	        h = juego.canvas.height;

	 		juego.canvas.style.backgroundColor= '#ffffff'; 

	        idata = juego.context.createImageData(w, h),
	        buffer32 = new Uint32Array(idata.data.buffer),
	        len = buffer32.length;

		  for(var i = 0; i < len;i++){
		  	 if (Math.random() < 0.5) buffer32[i] = 0xff000000;
		  }
       
	    juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
	    juego.context.putImageData(idata, 0, 0);
  		timing = requestAnimationFrame(noise);		
	}

	juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
	juego.context.drawImage(tankImg,space,0);	
	init();

	setTimeout(function(){
		noise();
	},2500);

	setTimeout(function(){

		juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
		if( window.innerWidth >980){
			juego.canvas.style.backgroundColor= '#000000'; 
			document.getElementById('startBox').style.display = "block";
		    juego.context.font = "35px arcadeclassicregular";
	        juego.context.fillStyle = "#ffffff";
	        juego.context.textAlign = "center";
	       // juego.context.fillText("Breakout tributo",juego.canvas.width/2,juego.canvas.height/2);
	        //juego.gameStart=false;
	        gameStart = true;
			cancelAnimationFrame(timing);
		}
		else if(window.innerWidth < 980){
			juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
			juego.canvas.style.display= 'none'; 
			gameStart = false;
			cancelAnimationFrame(timing);
			document.getElementById('mobileBox').style.display='block';
			document.getElementById('non-onmobile').style.display='block';
			
		}
		//tracking();
		

	},4000);

	document.body.onkeydown=function(e){
        switch(e.keyCode){
            case 37: //IZQUIERDA
                e.preventDefault();
               juego.controles.IZQUIERDA=true;

  
                break;
            case 39: //DERECHA
                e.preventDefault();
                 juego.controles.DERECHA=true;
                break;
            case 13:
    			e.preventDefault();

	                if(gameStart== true ){
	                	document.getElementById('startBox').style.display = "none";
		  				juego.context.font = "30px Press Start 2P";
				        juego.context.fillStyle = "#ffffff";
				        juego.context.textAlign = "center";
				       	juego.context.fillText("use left and right keyboard arrows",juego.canvas.width/2,juego.canvas.height/2);	
	                	setTimeout(function(){
		                	if (pelotaInterval == undefined || pelotaInterval ==''){
			                	pelotaInterval = setInterval(function(){
									juego.pelota.dx <0? juego.pelota.dx +=(-0.6):juego.pelota.dx +=(0.6);
									juego.pelota.dy <0? juego.pelota.dy +=(-0.6):juego.pelota.dy +=(0.6);
									//console.log(juego.pelota.dx + "velocidad X");
									//console.log(juego.pelota.dy + "velocidad Y");
									
								},10000);	
								//console.log('interval start');
							}
							juego.context.clearRect(0, 0,juego.canvas.width ,juego.canvas.height);
		                	juego.loop();
		                	//console.log("START GAME");
		                	

		                },2000);
		                gameStart =false;		
	               	}
            	break;
        }
    };
    
	/*document.getElementById('startBack').addEventListener("click",function(){
			document.getElementById('startBox').style.display = "none";
			gameStart =false;
			juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
			document.getElementById('breakout').style.display = "none";
			document.getElementsByTagName('body').style.overflow = "scroll";
		/*
    	if(gameStart){
    		document.getElementById('startBox').style.display = "none";
    		juego.context.font = "30px arcadeclassicregular";
			juego.context.fillStyle = "#ffffff";
			juego.context.textAlign = "center";
			juego.context.fillText("use left  and  right keyboard arrows",juego.canvas.width/2,juego.canvas.height/2);	

    		setTimeout(function(){

    			juego.context.clearRect(0,0,juego.canvas.width,juego.canvas.height);
	        	juego.loop();
	        	document.getElementById('startBox').style.display = "none";
	        	//console.log("START GAME");
	        	gameStart =false;
	        	pelotaInterval = setInterval(function(){
					juego.pelota.dx <0? juego.pelota.dx +=(-0.6):juego.pelota.dx +=(0.6);
					juego.pelota.dy <0? juego.pelota.dy +=(-0.6):juego.pelota.dy +=(0.6);
					//console.log(juego.pelota.dx + "velocidad X");
					//console.log(juego.pelota.dy + "velocidad Y");
					
				},10000);
			},2000);	
        }
    });*/
    /* pelotaInterval = setInterval(function(){
	    if(gameStart==false){
	    	if (juego.pelota.dx < 0){
	            juego.pelota.dx -=  2;
	        }
	        if (this.pelota.dx > 0){
	           juego.pelota.dx +=  2;
	        }
	       	if (juego.pelota.dy < 0){
	            juego.pelota.dy -=  2;
	        }
	        if (this.pelota.dy > 0){
	           juego.pelota.dy +=  2;
	        }
    		//console.log("INTERVAL RUNNING");
    	}
    },2000);*/

    document.body.onkeyup=function(e){
        switch(e.keyCode){
            case 37: //IZQUIERDA
                e.preventDefault();
                 juego.controles.IZQUIERDA=false;
                break;
            case 39: //DERECHA
                e.preventDefault();
                 juego.controles.DERECHA=false;
                break;
      
        }
    };	
}	







	




function game(){
    this.controles = new Controles(juego);
    this.canvas=document.getElementById("breakout");
    this.context = this.canvas.getContext('2d');
    this.canvas.width=window.innerWidth;
    this.canvas.height=window.innerHeight;
    this.player = new player(this.canvas.width/2 - 174/2 ,this.canvas.height-120);
    this.player.constructorBase(174,24,"#c84848",this.player.x,this.player.y,'player');
   	this.controlLoop;
    this.velocidadMovimiento =300;
    this.contadorbloques=0;
    this.listaEntidades = [];
    this.bloques();
    //console.log(this.listaEntidades.length + "cantidad de bloques en pantalla");
    //console.log(this.contadorbloques +"bloques");
    this.pelota = new pelota();
    this.pelota.constructorBase(22,22,"#c84848",this.canvas.width/2,this.canvas.height-250,'pelota');
   

};

game.prototype.bloques = function(){
        var colors = ['#c84848','#c66c3a','#b47a30','#a2a22a','#48a048','#4248c8'];
        for (var fila=0;fila<6;fila++){
            for (var i=0;i<10;i++){
                var bloqElement = new Bloques();
                var sizeElement = this.canvas.width/10;
                bloqElement.constructorBase(sizeElement+1,30,colors[fila],sizeElement*i,30*fila+50,1);
                this.listaEntidades.push(bloqElement);
                this.contadorbloques++;
          
            }
        }
} 

game.prototype.loop = function() {
		if(this.contadorbloques <= 0){
			SONIDOS.gol.play();
			this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
			clearInterval(pelotaInterval);
			this.context.font = "35px arcadeclassicregular";
		    this.context.fillStyle = "#ffffff";
		    this.context.textAlign = "center";
		    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
		    this.canvas.style.backgroundColor= '#000000'; 
			document.getElementById('endBox').style.display = "block";
			document.getElementById('winner').innerHTML ="winner";
			Speak( "In 1976, Nolan Bushnell (the godfather of videogames) created breakout and the revolution of video games. Today we pay tribute to it.");	   
		    return;
		}

	  	var delta=(Date.now() - this.tiempoTranscurrido)/1000;
      	this.tiempoTranscurrido=Date.now();

	        
	 
        var direccion=0;
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        var n=this.listaEntidades.length;
            for (var i=0;i<n;i++) {

            	if( this.listaEntidades[i].drawit == 1 ){

            		if (this.listaEntidades[i].colisiona(this.pelota)){
	                    this.listaEntidades[i].drawit = 0;
	                    this.contadorbloques-=1;
	                    //console.log(this.contadorbloques);
	                    SONIDOS.beep.play();
	                }else{
	                	this.listaEntidades[i].dibujar(this.context);
	                }
                	
            	}   
               

                
            }
      
            if (this.controles.IZQUIERDA && !this.controles.DERECHA){
                if(this.player.x>0){
                    direccion=1;
                  
                }
               
                
            }
            else if(!this.controles.IZQUIERDA && this.controles.DERECHA){
                if(this.player.x+this.player.ancho <this.canvas.width){
                   direccion=2;  

                }
          
            }

           
    	
            this.player.mover(delta,direccion);

		    if( (this.pelota.y +this.pelota.alto) + this.pelota.dy >= this.player.y-this.pelota.dy ){

		       		if(this.pelota.x+this.pelota.ancho >= this.player.x-(this.pelota.ancho-2)  && 
		       			this.pelota.x+ this.pelota.ancho <= this.player.x +(this.player.ancho/2) ){
		           
			            if (this.pelota.dx < 0){
			                this.pelota.dx = +this.pelota.dx;
			            }
			            if (this.pelota.dx > 0){
			                this.pelota.dx = -this.pelota.dx;
			            }
		            	SONIDOS.beep.play();
		            	this.pelota.dy = -this.pelota.dy;

		        }
		        else if(this.pelota.x+this.pelota.ancho >= this.player.x + (this.player.ancho/2) && 
		        		this.pelota.x <=this.player.x + this.player.ancho+(this.pelota.ancho-2) ){

		            if (this.pelota.dx < 0){
		                this.pelota.dx = -this.pelota.dx;
		            }
		            if (this.pelota.dx > 0){
		                this.pelota.dx = +this.pelota.dx;
		            }
		           

		            SONIDOS.beep.play();
		            this.pelota.dy = -this.pelota.dy;
		        }
		    }


		    if(this.pelota.x + this.pelota.dx > this.canvas.width-this.pelota.ancho || this.pelota.x + this.pelota.dx < this.pelota.ancho ) {
		        this.pelota.dx = -this.pelota.dx;
		        SONIDOS.beep.play();
		    }

		    if(this.pelota.y + this.pelota.dy < 5) {
		        SONIDOS.beep.play();
		       this.pelota.dy = -this.pelota.dy;
		    }

        
        this.pelota.mover(delta);

        this.player.dibujar(this.context);
        this.pelota.dibujar(this.context);

        var self = this;

        this.controlLoop = requestAnimationFrame(function(){self.loop()});
	if ( (this.pelota.y +this.pelota.alto) + this.pelota.dy >= this.player.y+ this.player.alto){
		
		 SONIDOS.plop.play();
		/*self.player.lives -=1;
			if(self.player.lives >=1){

				cancelAnimationFrame(self.controlLoop);
  				this.context.clearRect(0, 0,this.canvas.width ,this.canvas.height);
  				self.context.font = "60px arcadeclassicregular";
		        self.context.fillStyle = "#ffffff";
		        self.context.textAlign = "center";
		       	self.context.fillText("lives: "+ self.player.lives,self.canvas.width/2,self.canvas.height/2);	
  				setTimeout(function(){
  					self.context.clearRect(0, 0,self.canvas.width ,self.canvas.height);
  					self.pelota.dy = -self.pelota.dy;
  					self.pelota.x = self.canvas.width/2;
  					self.pelota.y = self.canvas.height -300;

  					 requestAnimationFrame(function(){self.loop()});
  				},1000);
		        
		 
		    
		      
		     }
		        if(self.player.lives ==0){*/
		        	cancelAnimationFrame(this.controlLoop);
		        	clearInterval(pelotaInterval);
			        setTimeout(function(){
			        
				       	self.pelota.dy = -self.pelota.dy;
				        self.pelota.x =self.canvas.width/2;
				        self.pelota.y =self.canvas.height-250;
						self.context.clearRect(0,0,self.canvas.width,self.canvas.height);
						
						//tracking();
						self.canvas.style.backgroundColor= '#000000'; 
						document.getElementById('endBox').style.display = "block";
						Speak( "In 1976, Nolan Bushnell (the godfather of videogames) create breakout, with this the revolution of videogames, today we pay tribute.");
					    self.context.font = "35px arcadeclassicregular";
				        self.context.fillStyle = "#ffffff";
				        self.context.textAlign = "center";
				       // juego.context.fillText("Breakout tributo",juego.canvas.width/2,juego.canvas.height/2);
				        //juego.gameStart=false;
				        gameStart = false;

					},1000);
			    //}
	} 
      /* 	if( this.pelota.y + this.pelota.dy > this.canvas.width-this.pelota.ancho){
		      

		        this.context.font = "35px arcadeclassicregular";
		        this.context.fillStyle = "#ffffff";
		        this.context.textAlign = "center";
		        this.context.fillText("BOOMBA VIDA MENOS",this.canvas.width/2,this.canvas.height/2);
		        //juego.gameStart=false;
		      //  gameStart = true;
		      setTimeout(function(){
		      	self.pelota.y = self.canvas.height-250;
		      	self.pelota.x = self.canvas.width/2,
		      	self.context.clearRect(0, 0,self.canvas.width ,self.canvas.height);
				self.controlLoop = requestAnimationFrame(function(){self.loop()});
		      },1000);*/
		
   
};




/*
var firstouchX,
    firstouchY,
	distX,
	startDelta,
    distY;
    juego.canvas.addEventListener('touchstart',function(e){
    		
      		startDelta=Date.now();
    		
    	    var touchobj = e.changedTouches[0]
    	if(touchobj.pageX >= juego.player.x && touchobj.pageX <= juego.player.x +juego.player.ancho){
    		firstouchX = touchobj.pageX;
    		//console.log(firstouchX+ "position X")
    	}
    	if(touchobj.pageY >= juego.player.y){
    		firstouchY = touchobj.pageY
    		//console.log(firstouchY + "POSITION Y")
    	}
    		
    },false);

    juego.canvas.addEventListener("mousedown",function(evt){
    	 
    	 if(mouseX >= juego.player.x && mouseX<=juego.player.x + juego.player.ancho && mouseY >= juego.player.y){


	      }
    	juego.canvas.addEventListener('mousemove', function(evt) {
   		if(gameStart){
	   		var rect = juego.canvas.getBoundingClientRect();
	        var mouseX = evt.clientX - rect.left;
	        var mouseY = evt.clientY - rect.top;
	        //console.log ('Mouse position: ' +  mouseX + ',' +  mouseY);
	       
        }
    }, false);
    },false);
   	

     juego.canvas.addEventListener('touchmove',function(e){
     	 	var touchobj = e.changedTouches[0]
     		
     		trans=(Date.now() -startDelta )/1000;
     		

     		var ahora = Date.now()
    	 
    	if(touchobj.pageX < firstouchX ){
    		
    		 distX = firstouchX-touchobj.pageX;

    		  if(juego.player.x>0){
    		 	juego.player.x -=Math.round(trans*distX);
    		 }

    	}
    	if(touchobj.pageX > firstouchX ){
    		distX = firstouchX+touchobj.pageX;

    		if(juego.player.x<juego.canvas.width - juego.player.ancho){
    			juego.player.x +=Math.round(trans*distX);
    		}
    		     		 

    	}

    },false);
    juego.canvas.addEventListener('touchend',function(e){
    	 juego.controles.IZQUIERDA=false;
    	 juego.controles.DERECHA=false;
    },false);
*/



	 

