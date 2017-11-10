var hotel = {
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false, 
     
roomsAvail: function() {
    return this.rooms - this.roomsBooked;
    }     
 }