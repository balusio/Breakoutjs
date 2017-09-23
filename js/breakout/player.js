function player(x,y){
    this.x = x;
    this.y= y;
    this.dx=0;
    this.dy=0;
    this.velocidad=900;
    this.level= 1;
    this.lives = 3;

}

player.prototype = new Entidad();

player.prototype.mover=function(delta,direccion){
    var distancia=Math.round(delta*this.velocidad);
    switch(direccion){
        case 1:
            this.x-=distancia;
           
            break;
        case 2:
            this.x+=distancia;
         
            break;
    }
};
