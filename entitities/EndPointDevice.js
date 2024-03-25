class EndPointDevice {
    constructor({
      id,
      VoIPID,
      laptopID,
      printerID,
      mobilephoneID
    }) {
      this.id = id;
      this.VoIPID = VoIPID;
      this.laptopID = laptopID;
      this.printerID = printerID;
      this.mobilephoneID = mobilephoneID;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = EndPointDevice;
  