/*global*/
var carRental = {
    name: "Enterprise Car rental",
    TypesAvailable: [{ type: "Economy", numAvailable: 100, numRented: 0},
        {type: "Midsize", numAvailable: 100, numRented: 0}
    ],
    getAvailability: function() {
        var EconomyCarsNum = this.TypesAvailable[0].numAvailable - this.TypesAvailable[0].numRented;
        var MidsizeCarsNum = this.TypesAvailable[0].numAvailable - this.TypesAvailable[1].numRented;
        return {EconomyCarsNum: EconomyCarsNum, MidsizeCarsNum: MidsizeCarsNum};
    },
        
    rentEcon: function() {
        this.TypesAvailable[0].numRented++;
        console.log("click");
    },
        
    rentMid: function() {
        this.TypesAvailable[0].numRented++;
    }
};

document.getElementById("businessName").innerHTML = carRental.name;

function updateInfo() {
    document.getElementById("econNum").innerHTML = carRental.getAvailability().EconomyCarsNum;
    document.getElementById("econcar").innerHTML = "Economy"
    document.getElementById("midNum").innerHTML = carRental.getAvailability().MidsizeCarsNum;
    document.getElementById("midCar").innerHTML = "Midsize"
}
        