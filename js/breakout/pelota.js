
//http://www.jlabstudio.com/webgl/ejemplos/pong/
function pelota(x,y){
    this.speed = 100;
    this.velocidad = 200;
    this.dx =  4;
    this.dy =-4;

    
}

pelota.prototype = new Entidad();

pelota.prototype.dibujar=function(contexto){
    contexto.fillStyle = this.color;  
    contexto.fillRect(this.x, this.y, this.ancho, this.alto); 

};


pelota.prototype.mover= function(delta){

	this.x +=(this.dx);

	this.y +=(this.dy);
 
}
