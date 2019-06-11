$(document).ready(function(){
	addDIV.style.display = "none";
	editDIV.style.display = "none";
	deleteDIV.style.display = "none";
	
	var searchDatabase = angular.module("searchDisplay", []);

	searchDatabase.controller('gameData', function($scope){
		$scope.Games = [
			{Name: 'cool Creed', Year: '2010'},
			{Name: 'oblivion', Year: '2001'},
			{Name: 'fallout4', Year: '2017'}
	]});
	
});


	


var optionsDisplay = angular.module("optionDisplay", []);


var AddButton = document.getElementById("addGameButton");

var EditButton = document.getElementById("editGameButton");

var DeleteButton = document.getElementById("deleteGameButton");







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