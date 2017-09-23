
var results = document.getElementById("results");

function assert(value, desc) {

 	
 		var li = document.createElement("li");
 		
 		li.className = value ? "pass" : "fail";
 		li.appendChild(document.createTextNode(desc));
 		results.appendChild(li);
		
		

 		return li;
 	};
 	
function shuffle(){

	this.firstText = "el valor de ser distintos";
	this.secondText= "40 años de breakout";
	this.firstArray = [];
	this.secondArray= [];


};



function splitTexto(array,result){
		var str = array.split('');
        for (var i = 0; i < str.length; i++) {
                var ch = str[i];
                result.push(str[i]);
            }
}


    function randomChar(type) {
       	pool = "elvalosdeserdistintos40añosdebreakout";
        var arr = pool.split('');
        return arr[Math.floor(Math.random() * arr.length)];
    }

