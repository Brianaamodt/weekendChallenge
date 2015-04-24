var Monster = function(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;

	console.log("Monster onstructor called");
}

var Player = function(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	Monster.call(this, name, strength, dexterity, constitution, wisdom, intelligence, charisma);

	this.playerClass = playerClass;	

	console.log("Player onstructor called");
}

	
Player.prototype = Object.create(Monster.prototype);
Player.prototype.constructor = Player;

var nuArray = new Array();

function save(){


	var name = document.getElementById("name").value;
	var strength = document.getElementById("strength").value;
	var dexterity = document.getElementById("dexterity").value;
	var constitution = document.getElementById("constitution").value;
	var wisdom = document.getElementById("wisdom").value;
	var intelligence = document.getElementById("intelligence").value;
	var charisma = document.getElementById("charisma").value;
	var playerClass = document.getElementById("class").value;
	var creature = 0;
		if (playerClass.length > 0){creature = new Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass);	
		}else {creature = new Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma);}
nuArray.push(creature);
var table = document.getElementById("stats");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
cell1.innerHTML = name;

}

document.getElementById('addMonster').addEventListener('click', save);

Monster.prototype.attack = function(){
	return Math.floor(Math.random() * 20) +1
}

//Monster.Attack = Math.floor(Math.random() * 20) +1 + Strength;

var layer = new Player("steve", 1, 2,3,4,5,6,7);

console.log(layer);
