$(document).ready(function(){
	addDIV.style.display = "none";
	editDIV.style.display = "none";
	deleteDIV.style.display = "none";
});

var taskApp = angular.module("VideoGame", [], function(){});

taskApp.controller('dataControl', function ($scope){
	$scope.Games = [{Name: 'Assassins Creed', Year: '2007'},
			{Name: 'Skyrim', Year: '2011'},
			{Name: 'Warframe', Year: '2013'}]
	
	$scope.include = function(gameName, gameYear){
			$scope.Games.push(gameName, gameYear);
	}
	
	$scope.set = function(gameName, gameYear){
		var index = 0;
		for(var count=0; count<$scope.Games.length; count++){

			if($scope.Games[count].Name == gameName){
				index = count;
			}
		}
		if(index == 0){
			$scope.Games.push(gameName, gameYear);
		}else{
			alert(index);
			$scope.Games[index].Name = gameName;
			$scope.Games[index].Year = gameYear;
		}
	}
	
	$scope.remove = function(gameName){
		for(var count=0; count<$scope.Games.length; count++){

			if($scope.Games[count].Name == gameName){
				var index = count;
			}
		}
		$scope.Games.splice(index,1);
	};
	
	
});
	


//add game to Games
function addGame(){
	if(document.getElementById("gameList0")){
		alert("Game(s) already exist!");
	}else{
		//add game
		var AddGameName = document.getElementById("taskGameName");
		var AddGameYear = document.getElementById("taskGameYear");
		alert(AddGameName.value);
		alert(AddGameYear.value);
		var scope = angular.element(document.getElementsByTagName("body")).scope();
		scope.$apply(function(){
			scope.include(AddGameName.value, AddGameYear.value);
		});
	}
};

//edit game to Games
function editGame(){
	if(document.getElementById("gameList0")){
		alert("Game(s) already exist!");
	}else{
		//add game
		var editGameName = document.getElementById("taskGameName");
		var editGameYear = document.getElementById("taskGameYear");
		alert(editGameName.value);
		alert(editGameYear.value);
		var scope = angular.element(document.getElementsByTagName("body")).scope();
		scope.$apply(function(){
			scope.set(editGameName.value, editGameYear.value);
		});
	}
};


//delete game from Games
function deleteGame(){
	if(document.getElementById("gameList1")){
		alert("too many games!");
	}else{
		//delete game
		var DeleteGame = document.getElementById("gameList0");
		var DeleteGameName = DeleteGame.children[0].id;
		var DeleteGameYear = DeleteGame.children[1].id;
		var scope = angular.element(document.getElementsByTagName("body")).scope();
		scope.$apply(function(){
			scope.remove(DeleteGameName);
		});
	}
};

//check for radio Buttons and display correct options
function addForm(){
	editDIV.style.display = "none";
	deleteDIV.style.display = "none";
	addDIV.style.display = "block";
	//update div to display form
};
function editForm(){
	addDIV.style.display = "none";
deleteDIV.style.display = "none";
	editDIV.style.display = "block";
	//update div to display form
};
function deleteForm(){
	addDIV.style.display = "none";
	editDIV.style.display = "none";
	deleteDIV.style.display = "block";
	//update div to display form
};