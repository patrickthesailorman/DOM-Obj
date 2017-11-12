var Business = {
      name: 'Enterprise Rental Cars',
      economyCars: 500,
      carsBooked: 150,
      midsizeCars: 500,
      midsizeBooked: 100, 
      
      economyAvail: function() {
        return this.economyCars - this.carsBooked;
        },   
       
      midsizeAvail: function() {
        return this.midsizeCars - this.midsizeBooked;
        }, 
        
      rentEconomy: function() {
          return this.carsBooked + 1 && this.economyAvail();
          
        },
      
      rentMidsize: function() {
          return this.midsizeBooked + 1 && this.midsizeAvail();
        
        },
}
	         function infoFunction() {
	                    document.getElementById("name").innerHTML = Business.name;
	                
	                    document.getElementById("economyAvail").innerHTML = Business.economyAvail();
	              
	                    document.getElementById("midsizeAvail").innerHTML = Business.midsizeAvail();
	         }