
var juego,
temporizador,
interval, 
timing = 10,
timerlevel,
topSpace = (10 * window.innerHeight) / 100,	
SONIDOS=
{
   "beep"   : new Audio("data:audio/ogg;base64,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"),
   "gol"    : new Audio("data:audio/ogg;base64,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"),
   "plop"   : new Audio("data:audio/ogg;base64,T2dnUwACAAAAAAAAAABSCgAAAAAAAFXz+kIBHgF2b3JiaXMAAAAAAUSsAAAAAAAAAHcBAAAAAAC4AU9nZ1MAAAAAAAAAAAAAUgoAAAEAAADNnKciEC3//////////////////8kDdm9yYmlzHQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMDQwNjI5AAAAAAEFdm9yYmlzKUJDVgEACAAAADFMIMWA0JBVAAAQAABgJCkOk2ZJKaWUoSh5mJRISSmllMUwiZiUicUYY4wxxhhjjDHGGGOMIDRkFQAABACAKAmOo+ZJas45ZxgnjnKgOWlOOKcgB4pR4DkJwvUmY26mtKZrbs4pJQgNWQUAAAIAQEghhRRSSCGFFGKIIYYYYoghhxxyyCGnnHIKKqigggoyyCCDTDLppJNOOumoo4466ii00EILLbTSSkwx1VZjrr0GXXxzzjnnnHPOOeecc84JQkNWAQAgAAAEQgYZZBBCCCGFFFKIKaaYcgoyyIDQkFUAACAAgAAAAABHkRRJsRTLsRzN0SRP8ixREzXRM0VTVE1VVVVVdV1XdmXXdnXXdn1ZmIVbuH1ZuIVb2IVd94VhGIZhGIZhGIZh+H3f933f930gNGQVACABAKAjOZbjKaIiGqLiOaIDhIasAgBkAAAEACAJkiIpkqNJpmZqrmmbtmirtm3LsizLsgyEhqwCAAABAAQAAAAAAKBpmqZpmqZpmqZpmqZpmqZpmqZpmmZZlmVZlmVZlmVZlmVZlmVZlmVZlmVZlmVZlmVZlmVZlmVZlmVZQGjIKgBAAgBAx3Ecx3EkRVIkx3IsBwgNWQUAyAAACABAUizFcjRHczTHczzHczxHdETJlEzN9EwPCA1ZBQAAAgAIAAAAAABAMRzFcRzJ0SRPUi3TcjVXcz3Xc03XdV1XVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYHQkFUAAAQAACGdZpZqgAgzkGEgNGQVAIAAAAAYoQhDDAgNWQUAAAQAAIih5CCa0JrzzTkOmuWgqRSb08GJVJsnuamYm3POOeecbM4Z45xzzinKmcWgmdCac85JDJqloJnQmnPOeRKbB62p0ppzzhnnnA7GGWGcc85p0poHqdlYm3POWdCa5qi5FJtzzomUmye1uVSbc84555xzzjnnnHPOqV6czsE54Zxzzonam2u5CV2cc875ZJzuzQnhnHPOOeecc84555xzzglCQ1YBAEAAAARh2BjGnYIgfY4GYhQhpiGTHnSPDpOgMcgppB6NjkZKqYNQUhknpXSC0JBVAAAgAACEEFJIIYUUUkghhRRSSCGGGGKIIaeccgoqqKSSiirKKLPMMssss8wyy6zDzjrrsMMQQwwxtNJKLDXVVmONteaec645SGultdZaK6WUUkoppSA0ZBUAAAIAQCBkkEEGGYUUUkghhphyyimnoIIKCA1ZBQAAAgAIAAAA8CTPER3RER3RER3RER3RER3P8RxREiVREiXRMi1TMz1VVFVXdm1Zl3Xbt4Vd2HXf133f141fF4ZlWZZlWZZlWZZlWZZlWZZlCUJDVgEAIAAAAEIIIYQUUkghhZRijDHHnINOQgmB0JBVAAAgAIAAAAAAR3EUx5EcyZEkS7IkTdIszfI0T/M00RNFUTRNUxVd0RV10xZlUzZd0zVl01Vl1XZl2bZlW7d9WbZ93/d93/d93/d93/d939d1IDRkFQAgAQCgIzmSIimSIjmO40iSBISGrAIAZAAABACgKI7iOI4jSZIkWZImeZZniZqpmZ7pqaIKhIasAgAAAQAEAAAAAACgaIqnmIqniIrniI4oiZZpiZqquaJsyq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rukBoyCoAQAIAQEdyJEdyJEVSJEVyJAcIDVkFAMgAAAgAwDEcQ1Ikx7IsTfM0T/M00RM90TM9VXRFFwgNWQUAAAIACAAAAAAAwJAMS7EczdEkUVIt1VI11VItVVQ9VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1TRN0zSB0JCVAAAZAAAjQQYZhBCKcpBCbj1YCDHmJAWhOQahxBiEpxAzDDkNInSQQSc9uJI5wwzz4FIoFURMg40lN44gDcKmXEnlOAhCQ1YEAFEAAIAxyDHEGHLOScmgRM4xCZ2UyDknpZPSSSktlhgzKSWmEmPjnKPSScmklBhLip2kEmOJrQAAgAAHAIAAC6HQkBUBQBQAAGIMUgophZRSzinmkFLKMeUcUko5p5xTzjkIHYTKMQadgxAppRxTzinHHITMQeWcg9BBKAAAIMABACDAQig0ZEUAECcA4HAkz5M0SxQlSxNFzxRl1xNN15U0zTQ1UVRVyxNV1VRV2xZNVbYlTRNNTfRUVRNFVRVV05ZNVbVtzzRl2VRV3RZV1bZl2xZ+V5Z13zNNWRZV1dZNVbV115Z9X9ZtXZg0zTQ1UVRVTRRV1VRV2zZV17Y1UXRVUVVlWVRVWXZlWfdVV9Z9SxRV1VNN2RVVVbZV2fVtVZZ94XRVXVdl2fdVWRZ+W9eF4fZ94RhV1dZN19V1VZZ9YdZlYbd13yhpmmlqoqiqmiiqqqmqtm2qrq1bouiqoqrKsmeqrqzKsq+rrmzrmiiqrqiqsiyqqiyrsqz7qizrtqiquq3KsrCbrqvrtu8LwyzrunCqrq6rsuz7qizruq3rxnHrujB8pinLpqvquqm6um7runHMtm0co6rqvirLwrDKsu/rui+0dSFRVXXdlF3jV2VZ921fd55b94WybTu/rfvKceu60vg5z28cubZtHLNuG7+t+8bzKz9hOI6lZ5q2baqqrZuqq+uybivDrOtCUVV9XZVl3zddWRdu3zeOW9eNoqrquirLvrDKsjHcxm8cuzAcXds2jlvXnbKtC31jyPcJz2vbxnH7OuP2daOvDAnHjwAAgAEHAIAAE8pAoSErAoA4AQAGIecUUxAqxSB0EFLqIKRUMQYhc05KxRyUUEpqIZTUKsYgVI5JyJyTEkpoKZTSUgehpVBKa6GU1lJrsabUYu0gpBZKaS2U0lpqqcbUWowRYxAy56RkzkkJpbQWSmktc05K56CkDkJKpaQUS0otVsxJyaCj0kFIqaQSU0mptVBKa6WkFktKMbYUW24x1hxKaS2kEltJKcYUU20txpojxiBkzknJnJMSSmktlNJa5ZiUDkJKmYOSSkqtlZJSzJyT0kFIqYOOSkkptpJKTKGU1kpKsYVSWmwx1pxSbDWU0lpJKcaSSmwtxlpbTLV1EFoLpbQWSmmttVZraq3GUEprJaUYS0qxtRZrbjHmGkppraQSW0mpxRZbji3GmlNrNabWam4x5hpbbT3WmnNKrdbUUo0txppjbb3VmnvvIKQWSmktlNJiai3G1mKtoZTWSiqxlZJabDHm2lqMOZTSYkmpxZJSjC3GmltsuaaWamwx5ppSi7Xm2nNsNfbUWqwtxppTS7XWWnOPufVWAADAgAMAQIAJZaDQkJUAQBQAAEGIUs5JaRByzDkqCULMOSepckxCKSlVzEEIJbXOOSkpxdY5CCWlFksqLcVWaykptRZrLQAAoMABACDABk2JxQEKDVkJAEQBACDGIMQYhAYZpRiD0BikFGMQIqUYc05KpRRjzknJGHMOQioZY85BKCmEUEoqKYUQSkklpQIAAAocAAACbNCUWByg0JAVAUAUAABgDGIMMYYgdFQyKhGETEonqYEQWgutddZSa6XFzFpqrbTYQAithdYySyXG1FpmrcSYWisAAOzAAQDswEIoNGQlAJAHAEAYoxRjzjlnEGLMOegcNAgx5hyEDirGnIMOQggVY85BCCGEzDkIIYQQQuYchBBCCKGDEEIIpZTSQQghhFJK6SCEEEIppXQQQgihlFIKAAAqcAAACLBRZHOCkaBCQ1YCAHkAAIAxSjkHoZRGKcYglJJSoxRjEEpJqXIMQikpxVY5B6GUlFrsIJTSWmw1dhBKaS3GWkNKrcVYa64hpdZirDXX1FqMteaaa0otxlprzbkAANwFBwCwAxtFNicYCSo0ZCUAkAcAgCCkFGOMMYYUYoox55xDCCnFmHPOKaYYc84555RijDnnnHOMMeecc845xphzzjnnHHPOOeecc44555xzzjnnnHPOOeecc84555xzzgkAACpwAAAIsFFkc4KRoEJDVgIAqQAAABFWYowxxhgbCDHGGGOMMUYSYowxxhhjbDHGGGOMMcaYYowxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGFtrrbXWWmuttdZaa6211lprrQBAvwoHAP8HG1ZHOCkaCyw0ZCUAEA4AABjDmHOOOQYdhIYp6KSEDkIIoUNKOSglhFBKKSlzTkpKpaSUWkqZc1JSKiWlllLqIKTUWkottdZaByWl1lJqrbXWOgiltNRaa6212EFIKaXWWostxlBKSq212GKMNYZSUmqtxdhirDGk0lJsLcYYY6yhlNZaazHGGGstKbXWYoy1xlprSam11mKLNdZaCwDgbnAAgEiwcYaVpLPC0eBCQ1YCACEBAARCjDnnnHMQQgghUoox56CDEEIIIURKMeYcdBBCCCGEjDHnoIMQQgghhJAx5hx0EEIIIYQQOucchBBCCKGEUkrnHHQQQgghlFBC6SCEEEIIoYRSSikdhBBCKKGEUkopJYQQQgmllFJKKaWEEEIIoYQSSimllBBCCKWUUkoppZQSQgghlFJKKaWUUkIIoZRQSimllFJKCCGEUkoppZRSSgkhhFBKKaWUUkopIYQSSimllFJKKaUAAIADBwCAACPoJKPKImw04cIDUGjISgCADAAAcdhq6ynWyCDFnISWS4SQchBiLhFSijlHsWVIGcUY1ZQxpRRTUmvonGKMUU+dY0oxw6yUVkookYLScqy1dswBAAAgCAAwECEzgUABFBjIAIADhAQpAKCwwNAxXAQE5BIyCgwKx4Rz0mkDABCEyAyRiFgMEhOqgaJiOgBYXGDIB4AMjY20iwvoMsAFXdx1IIQgBCGIxQEUkICDE2544g1PuMEJOkWlDgIAAAAAAAEAHgAAkg0gIiKaOY4Ojw+QEJERkhKTE5QAAAAAAOABgA8AgCQFiIiIZo6jw+MDJERkhKTE5AQlAAAAAAAAAAAACAgIAAAAAAAEAAAACAhPZ2dTAAQQAwAAAAAAAFIKAAACAAAAdQhHBgg2NDEoJy8yARwai5TnBeCHHNe3H+Vi7hf/X8/19Ybd9evpgTo7bv/9v0Nr48GCTNN/989Kiq8Wqtabjq/eH5RCATckQIC//iVBQ1lx1mNuM4dS8I5ZJ3MP22/oDfE0xTPVm5ygVHKd3+U6KPX0ThOTVArMSrEBgArDZqjEXVzOnybf/pl3/avretNVOOQP+kn/6nrU6QqH1PstWKMLnq3Heq4ErD71BgQlg5k3mcAlAssobfSktHQt6SPbjTvmYr7WGGcjRbaylom9BqxCNQmUiExx/1sCIzm6rfVqPBWrUbxBnZecYi04qjfzR80yYtaVGrxOoQKADsO/jQxIx/J0TmzvlF5eNt0FLMKacxya1bND/obtgasrcH98pyhJjeoFFCLLE/tBaZ+kYVODW+zXsa9Tl/lx5s/v/hIVPf0zrmN0VWSNxSIlrcvf1r49JgcwWRoA")
},
start= document.getElementById('startgame'),
contactoStart= document.getElementById('contactoStart'),
hidebutton= document.getElementById('startplay'),
marginTop = (5.2 * window.innerHeight) / 100,
containerTitle = document.querySelector('.container-title'),
topstart = (49.14 * window.innerHeight) / 100,
livesContainer= document.getElementById('lives'),
levelContainer= document.getElementById('level');

hidebutton.style.top =topstart+ 'px';
contactoStart.style.top = (Math.floor(topSpace)-5) +'px';
containerTitle.style.top = (topSpace+marginTop )+'px';


function inicio(){
    juego=new Juego();
    juego.constructor("breakout");
    juego.bloques();
    juego.loop();
   	var touchobj = 0;
   	var startx =0;
   	var starty =0;
    //temporizador=setInterval("juego.controlLoop();",25);
    assert(juego.gameStart == true, "juego comienza");
    document.onkeydown=function(e){
    	if(juego.gameStart){
        	juego.pulsarTecla(e);
        }
    };

    document.onkeyup=function(e){
       if(juego.gameStart){
       	juego.soltarTecla(e);
       }
    };

 /*touch handlers just for touch screens========================*/   
   	juego.canvas.addEventListener('touchstart', function(e){
   		
    var	touchobj = e.changedTouches[0],
    	startx = parseInt(touchobj.clientX- juego.canvas.offsetLeft),
    	starty = parseInt(touchobj.clientX- juego.canvas.offsetLeft);


    }, false);

	juego.canvas.addEventListener('touchmove', function(e){
   		juego.touch(e,startx,starty);


    }, false);

  /*  var container = $("#titulo");
    var text = "el valor de ser distintos";
    var x = 0;
    changetext();

    function changetext() {
        setInterval(function (){
          text = change();   
        }, 10000);
    }
    function change() {
            var texto;
            if (x === 1) {
                texto = "el valor de ser distintos";
                x = 0;
            } 
            else if (x === 0) {
                texto = "40 años de breakout";
                x = 1;
            }
            return texto;
	}
    setInterval(function(){
		container.shuffleLetters({
			"text": text
		});
    },7000);*/
    $("#startgame").click(function(){   	
    	
    		$(".points-container").show();
    		livesContainer.innerHTML= juego.player.lives;
    		levelContainer.innerHTML= juego.player.level;
    		titulo.style.display = 'none';
	    	hidebutton.style.display = 'none';
	    	timerlevel= setInterval(updatelevel,20000);
	    	juego.gameStart = true;
	        interval = setInterval(pelotaloop,10);
	        assert(juego.gameStart, "el juego SI  comenzó");


    });
    /*var stopButton =  document.getElementById("stopButton");

    stopButton.addEventListener('click',function(){
       clearInterval(interval);
       juego.contexto.clearRect(0,0,juego.canvas.width,juego.canvas.height);
    });*/
   
}
function pelotaloop(){
    juego.loop();
    moverpelota();  
}

function updatelevel(){
	if(juego.pelota.dx >0){
		juego.pelota.dx +=1;
	}
	else{
		juego.pelota.dx -=1;
	}
	if(juego.pelota.dy>0){
		juego.pelota.dy+=1;
	}
	else{
		juego.pelota.dy-=1;
	} 

	this.velocidadMovimiento+=10;
	juego.player.level += 1;	
	levelContainer.innerHTML = juego.player.level;   
}

function moverpelota(){  
	var pelota = juego.pelota;
    juego.contexto.clearRect(pelota.x, pelota.y, pelota.ancho+1, pelota.alto+1); 
    if(pelota.y + pelota.dy >= juego.player.element.y-22){
        /*========pelota al player primera mitad========*/
       if(pelota.x+pelota.ancho >= juego.player.element.x-(pelota.ancho-2)  && pelota.x+ pelota.ancho <= juego.player.element.x +(juego.player.element.ancho/2) ){
            if (pelota.dx < 0){
                pelota.dx = +pelota.dx;
            }
            if (pelota.dx > 0){
                pelota.dx = -pelota.dx;
            }
            SONIDOS.beep.play();
            pelota.dy = -pelota.dy;
        }
         /*========pelota al player segunda mitad========*/
        if(pelota.x+pelota.ancho >= juego.player.element.x + (juego.player.element.ancho/2) && pelota.x <=juego.player.element.x + juego.player.element.ancho+(pelota.ancho-2) ){
           
        	pelota.dx <0 ? pelota.dx=-pelota.dx : +pelota.dx;	
            if (pelota.dx < 0){
                pelota.dx = -pelota.dx;
            }
            if (pelota.dx > 0){
                pelota.dx = +pelota.dx;
            }
            SONIDOS.beep.play();
            pelota.dy = -pelota.dy;
        }
    }



    if(pelota.x + pelota.dx > juego.canvas.width-pelota.ancho || pelota.x + pelota.dx < pelota.ancho ) {
        pelota.dx = -pelota.dx;
        SONIDOS.beep.play();
    }

    if(pelota.y + pelota.dy < 5) {
        SONIDOS.beep.play();
       pelota.dy = -pelota.dy;
    }



  
    pelota.x = pelota.x  += pelota.dx;
    pelota.y = pelota.y  += pelota.dy;
    pelota.dibujar(juego.contexto);
    /*===ESTE ES EL GAME OVER===*/
    if( pelota.y + pelota.dy > juego.player.element.y-20 ){
        juego.contexto.clearRect(pelota.x, pelota.y, pelota.ancho+1, pelota.alto+1); 
        clearInterval(interval);
        clearInterval(timerlevel);
        juego.player.lives =juego.player.lives - 1;

        livesContainer.innerHTML = juego.player.lives;

          juego.pelota.x = juego.canvas.width/2;   

          juego.pelota.y = juego.canvas.height/2;

       timerlevel=   setTimeout(function(){
         	pelota.dy = -pelota.dy;

    		pelota.y = pelota.y  -= pelota.dy;
            timerlevel= setInterval(updatelevel,20000);
            interval = setInterval(pelotaloop,10);

           	pelotaloop();
         }, 2000); 

        if(juego.player.lives <= 0){
          clearInterval(interval);
           clearInterval(timerlevel);

            juego.contexto.clearRect(0, 0,juego.canvas.width ,juego.canvas.height );
            juego.contexto.font = "30px arcadeclassicregular";
            juego.contexto.fillStyle = "#ffffff";
            juego.contexto.textAlign = "center";
            juego.contexto.fillText("game over",juego.canvas.width/2,juego.canvas.height/2);
            juego.gameStart=false;
        }
       

      /*  if(juego.ai){
            juego.bloques();
            juego.loop();
            setTimeout(function(){

               
            },2500);													
        }*/
    }
}

function Juego(){

	

    this.canvas;
    this.contexto;
    this.listaEntidades=[];
    this.player;
    this.contadorbloques;
    this.izquierdoPulsado=false;
    this.derechoPulsado=false;
    this.tiempoTranscurrido;
    this.pelota;
    this.gameStart = false;
};


Juego.prototype.constructor=function(idCanvas){
    this.canvas=document.getElementById(idCanvas);
    if(window.innerWidth > 1040){
    	this.canvas.width=(76.82 * window.innerWidth) / 100;
    	this.canvas.height= (89.8 * window.innerHeight) / 100;  
    }
    else{
    	this.canvas.width=window.innerWidth;
    	this.canvas.height= window.innerHeight-marginTop;
    }

    this.canvas.style.top =  marginTop + 'px' ; 
    this.contexto=this.canvas.getContext('2d');
    
    //------------PLAYER

    this.player = new player( (this.canvas.width/2)-50, this.canvas.height-50);
    this.player.dx= (this.canvas.width/2)-100;
    console.log(this.player.xpos+'posicion inicial');
    //------------PELOTA
    
    this.pelota = new pelota( (this.canvas.width/2)+120,this.canvas.height-200);
    //this.pelota.dibujar(this.contexto); 
    this.pelota.dibujar(this.contexto); 
    //------------BLOCKS

  
    this.player.dibujar(this.contexto);  

    this.contadorbloques=0;

    this.bloques = function(){
        var colors = ['#c84848','#c66c3a','#b47a30','#a2a22a','#48a048','#4248c8'];
        for (var fila=0;fila<6;fila++){
            for (var i=0;i<11;i++){
                var bloqElement = new Bloques();
                var sizeElement = window.innerWidth/10;
                bloqElement.constructor(sizeElement+1,30,colors[fila],sizeElement*i,30*fila+Math.floor(topSpace),1);
                this.listaEntidades.push(bloqElement);
                this.contadorbloques++;
            }
        }
    } 

};


Juego.prototype.loop = function(){
       
    this.contexto.clearRect(0,0,this.canvas.width,30*6);
    var n=this.listaEntidades.length;
    var ball = this.pelota;
    var contexto = this.contexto;
    for (var i=0;i<n;i++) {

        if( this.listaEntidades[i].element.drawit == 1 ){
            this.listaEntidades[i].dibujar(contexto);
            if(this.pelota.x >= this.listaEntidades[i].element.x && 
                this.pelota.x < this.listaEntidades[i].element.x +this.listaEntidades[i].element.ancho && 
                this.pelota.y > this.listaEntidades[i].element.y && 
                this.pelota.y < this.listaEntidades[i].element.y+this.listaEntidades[i].element.alto) {
                    this.pelota.dy = -this.pelota.dy;
                    this.listaEntidades[i].element.drawit = 0;
                    contexto.clearRect(this.listaEntidades[i].element.x, this.listaEntidades[i].element.y, this.listaEntidades[i].element.ancho+1, this.listaEntidades[i].element.alto+1); 
                    this.contadorbloques= this.contadorbloques-1;
                    console.log(this.contadorbloques);
                    console.log(n);
                    SONIDOS.beep.play();
                    this.pelota.speed = this.pelota.speed-0.5;
                    
                    console.log(this.pelota.speed);
            }
        }
        if (this.contadorbloques== -1){
                     clearInterval(interval);
                     this.contexto.clearRect(0,0,juego.canvas.width,juego.canvas.height);
                }
    }      
}

Juego.prototype.pulsarTecla=function(e){
    e.preventDefault();
    
    var delta=(new Date().getTime() ) - this.tiempoTranscurrido;
    var newpos= 0;
    this.tiempoTranscurrido=new Date().getTime();
   
    if (e.keyCode==37){
        this.izquierdoPulsado=true;
		this.player.mover(delta,this.contexto,this.canvas,newpos);
    }
    else if (e.keyCode==39){
    	this.derechoPulsado=true;
    	this.player.mover(delta,this.contexto,this.canvas,newpos);
    }
       
         
};


Juego.prototype.soltarTecla =function(e){
    e.preventDefault();
    if (e.keyCode==37){
        this.izquierdoPulsado=false;
    }
    else if (e.keyCode==39){
        this.derechoPulsado=false;
    }
};

Juego.prototype.touch= function(e,startx,starty){
   	if ( (start-this.canvas.offsetLeft)  >= this.player.element.x && start <= this.player.element.x+this.player.element.width && start >= this.player.element.y) {
   		console.log("movio");
   		touchobj = e.changedTouches[0] // reference first touch point for this event
		dist = parseInt(touchobj.clientX) - startx;
		this.contexto.clearRect(this.player.element.x-1,this.player.element.y,174,24);
    
    	if( this.player.element.x <this.canvas.width-175 ||this.player.element.x >=0 ){
           		if(dist< startx){
           			this.player.element.x -=this.player.velocidadMovimiento;
        		}
        		else if(dist>startx){
        			this.player.element.x +=this.player.velocidadMovimiento;
        		}
        }
        
        this.player.mover(delta,this.contexto,this.canvas,newpos);
   	}
};


