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
			var numbers = 0;
			var letters = 0;
			var numPlates = population*5000; // this just needs to be a large enough number that it'll be overwritten.
			var tempNumbers = 0;
			var tempLetters = 1; // can't be 0 because then while loop won't start
			var tempNumPlates = 1;
			while(tempLetters>0){
				tempLetters = 0;
				tempNumPlates = Math.pow(10, tempNumbers);
				while(tempNumPlates<population){
					tempLetters = tempLetters + 1;
					tempNumPlates = tempNumPlates * 26;
				}
				if(tempNumPlates<numPlates){
					numPlates = tempNumPlates;
					numbers = tempNumbers;
					letters = tempLetters;
				}
				tempNumbers = tempNumbers + 1;
			}
			out = "Population: " + population + "<br />Pattern: " + numbers + " Numbers, " + letters +" Letters<br />Total Plates: "+ numPlates + "<br />Excess: " + (numPlates-population);
		}
	}
	document.getElementById("licensePlateOutput").innerHTML=out;
}
