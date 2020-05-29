var Mike = {
	fullName : 'Mike Tyson',
	profession : 'Boxer',
	mass : 300,
	height : 5.11,
	calcBMI : function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}
var John = {
	fullName : 'John Cena',
	profession: ['Actor', 'Wrestler'],
	mass : 275,
	height : 6.0,
	calcBMI : function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}

Mike.calcBMI();
John.calcBMI();

console.log((Mike.BMI > John.BMI) ? ("Mike's BMI" + " " + Mike.BMI + " " + "is greater than Johns" + " " + John.BMI) : ((Mike.BMI == John.BMI) ? "They both have the same BMI" : "John's BMI is greater than Mikes"));
console.log (Mike)
console.log (John)