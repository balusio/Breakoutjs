
function Entidad(){
    this.x;
    this.y;
    this.ancho;
    this.alto;
    this.color;
    this.drawit;
    this.velocidadMovimiento;
    this.dx;
    this.dy;

}

Entidad.prototype.constructorBase=function(anchoIni, altoIni, colorIni,xIni,yIni,tipeIni){
    this.ancho = anchoIni;
    this.alto  = altoIni;
    this.color = colorIni;
    this.x     = xIni;
    this.y     = yIni;
    this.drawit = tipeIni;
};
    
Entidad.prototype.dibujar=function(contexto){
    contexto.fillStyle = this.color;  
    contexto.fillRect (this.x, this.y, this.ancho, this.alto);  
};


function Bloques(){
}


Bloques.prototype = new Entidad();

Bloques.prototype.colisiona = function(pelota){
    var pelotaancho = pelota.x+pelota.ancho;
    var pelotaalto= pelota.y + pelota.alto;
    
  /*  if( pelotaancho + pelota.dx >= this.x && 
        pelotaancho + pelota.dx <= this.x +this.ancho && 
        pelotaalto+pelota.dy >= this.y && 
        pelota.y+pelota.dy <= this.y+this.alto){
        SONIDOS.beep.play();
        pelota.dy = -pelota.dy;
         this.drawit = 0;
        return true;
       
        
    }*/
    



   if(pelotaancho + pelota.dx  >= this.x && pelotaancho + pelota.dx <= this.x+this.ancho/2 + pelota.dx ){

        if( pelotaalto + pelota.dy   >= this.y -pelota.dy && pelotaalto + pelota.dy <= (this.y+this.alto/2)-pelota.dy ){
                pelota.dy >0? pelota.dy= -pelota.dy: pelota.dy = +pelota.dy ;
                
                pelota.dx >0? pelota.dx =-pelota.dx : pelota.dx = +pelota.dx ;
                
                return true;
                        
        } 
        else if( pelota.y+ pelota.dy >= this.y+this.alto/2 +pelota.dy && pelota.y + pelota.dy <= (this.y+this.alto)+pelota.dy ){

                pelota.dy >0? pelota.dy= +pelota.dy: pelota.dy = -pelota.dy ;
                 pelota.dx >0? pelota.dx =-pelota.dx : pelota.dx = +pelota.dx ;
                return true;
                
        } 
       

    }
     if(pelotaancho + pelota.dx  >= this.x+this.ancho/2 && pelota.x - pelota.dx <= this.x+this.ancho + pelota.dx){

         if( pelotaalto + pelota.dy   >= this.y -pelota.dy && pelotaalto + pelota.dy <= (this.y+this.alto/2)-pelota.dy ){
                pelota.dy>0 ? pelota.dy= -pelota.dy:pelota.dy= +pelota.dy;
                pelota.dx >0? pelota.dx =+pelota.dx : pelota.dx = -pelota.dx ;
                return true;
                        
        } 
        else if( pelota.y+ pelota.dy >= this.y+this.alto/2 +pelota.dy && pelota.y + pelota.dy <= (this.y+this.alto)+pelota.dy ){

                pelota.dy >0?pelota.dy= +pelota.dy : pelota.dy = -pelota.dy;
                pelota.dx >0? pelota.dx =+pelota.dx : pelota.dx = -pelota.dx ;
                return true;
                
        } 
          
     }



   /* if(pelotaancho >= this.x 
        && pelotaancho <= this.x +this.ancho/2
        && pelotaalto >= this.y 
        && pelotaalto <=this.y+ this.alto/2){
            
            pelota.dy= +pelota.dy;
            pelota.dx= -pelota.dx;
            return true;
    }

    if( pelotaancho >= this.x +this.ancho/2 
        && pelotaancho <= this.x+this.ancho
        && pelotaalto >= this.y 
        && pelotaalto<= this.y+this.alto/2 ){

            pelota.dy= -pelota.dy;
            pelota.dx= +pelota.dx;
            return true;
    }
    if( pelotaancho >= this.x +this.ancho/2 
        && pelotaancho <= this.x+this.ancho
        && pelotaalto<= this.y+this.alto/2 
        && pelotaalto<=this.y+this.alto){

            pelota.dy= +pelota.dy;
            pelota.dx= +pelota.dx;
            return true;
    }*/
  
}


   


 