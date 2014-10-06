 // Event Handler for Scissors
    $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });

    $('#rock').on('click', function(){
       var result = compare('rock', computerChoice());
       $("#decision").html(result);
    });

        $('#paper').on('click', function(){
       var result = compare('paper', computerChoice());
       $("#decision").html(result);
    });

var compare = function(me, opponent) {
	if (me === 'rock'){
		if (opponent === 'rock') {
			return 'Tie!';
		}	else if (opponent === 'paper') {
			return 'My rock lost to paper';
		
		}
	}
};

var computerChoice = funtion(){
	var random = Math.random();
	if (random < 0.333){
		return 'rock';
		else if(random < 0.6777){
			return 'paper';
			else {
				return 'scissors';
			}
		}
	}
};



