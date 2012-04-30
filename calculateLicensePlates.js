function calculateLicensePlates(){
	var population = document.getElementById('populationText');
	population = parseInt(population.value);
	var out;
	if(isNaN(population)){
		out = "Invalid population. Please try again.";
	}else{
		if(population==0){
			out = "Population: 0<br />Pattern: 0 Numbers, 0 Letters<br />Total Plates: 0<br />Excess: 0";
		}else{
			var letters = 1;
			var numPlates = 26;
			while(population/numPlates>=1 && population != numPlates){
				letters = letters + 1;
				numPlates = numPlates*26;
			}
			var numbers = 0;
			var tempNumPlates;
			var tempLetters;
			var tempNumbers;
			while(true && letters > 0){
				tempNumPlates = numPlates/26*10;
				tempLetters = letters - 1;
				tempNumbers = numbers + 1;
				if(population <= tempNumPlates){
					numPlates = tempNumPlates;
					letters = tempLetters;
					numbers = tempNumbers;
				}else{
					break;
				}
			}
			out = "Population: " + population + "<br />Pattern: " + numbers + "Numbers, " + letters +"Letters<br />Total Plates: "+ numPlates + "<br />Excess: " + (numPlates-population);
		}
	}
	document.getElementById("licensePlateOutput").innerHTML=out;
}