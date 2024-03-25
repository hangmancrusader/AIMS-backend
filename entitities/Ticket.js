class Ticket {
    constructor({
      id,
      userid,
      assetid,
      flag,
      status,
      title,
      lastupdate,
      priority,
      requester,
      assignedtech,
      category,
      timetoresolve,
      assignedto,
      Observer
    }) {
      this.id = id;
      this.userid = userid;
      this.assetid = assetid;
      this.flag = flag;
      this.status = status;
      this.title = title;
      this.lastupdate = lastupdate;
      this.priority = priority;
      this.requester = requester;
      this.assignedtech = assignedtech;
      this.category = category;
      this.timetoresolve = timetoresolve;
      this.assignedto = assignedto;
      this.Observer = Observer;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = Ticket;
  