//n numeros primos..  MI ME DA LOS N PRIMEROS  numeros primos
//hay ke comprobarke no sea 1 y no tenga ningun divisor desde el 2 hasta n-1.
function esPrimo(n) {
	for (var i = 2; i <n; i++) {
		if(n%i===0){//i es multiplo de n tonces n no primo
			return false;
			//ademas con este return paramos el bucle
		}

	}
	if(n===1){
 		return false;
	}else{
		//si no es uno ni es divisor sera primo
		return true;
		console.log("PRIMOOOO:"+n);
	}
}
function buscaPrimos(num){
	var primos= new Array();
	var aux=2;
	/*por fallo logico hay ke empezar en el  2 pork me lo da como primo axioma*/
	do{
		aux++;
		if(esPrimo(aux)){
			primos.push(aux);
			//console.log(primos);
		}
	} while (primos.length<num);
}
 buscaPrimos(5);
