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
			var numbers = 1;
			var numPlates = 10;
			while(population>numPlates){
				numbers = numbers + 1;
				numPlates = numPlates*10;
			}
			var letters = 0;
			var numMax = numbers;
			var tempNumPlates;
			var tempLetters;
			var tempNumbers;
			
			for(tempNumbers = 0; tempNumbers<=numMax; tempNumbers = tempNumbers + 1){
				tempNumPlates = Math.pow(10, tempNumbers);
				tempLetters = 0;
				
				while(population>tempNumPlates){
					tempLetters = tempLetters + 1;
					tempNumPlates = tempNumPlates * 26;
				}
				if(tempNumPlates<numPlates){
					numPlates = tempNumPlates;
					letters = tempLetters;
					numbers = tempNumbers;
				}
			}
			out = "Population: " + population + "<br />Pattern: " + numbers + " Numbers, " + letters +" Letters<br />Total Plates: "+ numPlates + "<br />Excess: " + (numPlates-population);
		}
	}
	document.getElementById("licensePlateOutput").innerHTML=out;
}