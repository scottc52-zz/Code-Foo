var messageNum = 0;
	function changeMessage(){
		messageNum = (messageNum + 1) % 5;
		switch(messageNum){
			case 0:
			  document.getElementById("message").innerHTML="Pick Me! Pick Me! Pick Me!";
			  break;
			case 1:
			  document.getElementById("message").innerHTML="Seriously, I wanna work at IGN!";
			  break;
			case 2:
			  document.getElementById("message").innerHTML="This would be a dream come true for Me!";
			  break;
			case 3:
			  document.getElementById("message").innerHTML="Can I haz job, pleez?!";
			  break;
			case 4:
			  document.getElementById("message").innerHTML="Pretty, pretty please?";
			  break;
			default:
			  document.getElementById("message").innerHTML="Pick Me! Pick Me! Pick Me!";
		}
	}