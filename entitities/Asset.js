class Asset {
  constructor({
    id,
    hostingID,
    vmID,
    endpointdevID,
    appID,
    serviceID,
    netdevID,
    secsolID
  }) {
    this.id = id;
    this.hostingID = hostingID;
    this.vmID = vmID;
    this.endpointdevID = endpointdevID;
    this.appID = appID;
    this.serviceID = serviceID;
    this.netdevID = netdevID;
    this.secsolID = secsolID;
  }

  // Getters and setters can be added as needed
}

module.exports = Asset;
