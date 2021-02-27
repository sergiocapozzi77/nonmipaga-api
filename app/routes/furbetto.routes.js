module.exports = app => {
  const furbetti = require("../controllers/furbetto.controller.js");
  //const Furbetto = require("../models/customer.model.js");

  // Create a new Customer
  //app.post("/customers", customers.create);
  app.get("/api/token/sign", (req, res) => {
    res.json({ token: "dsfgiwedi3234udsufhsd43dff.3423dsffsdfsfis" });
  });

  
  app.get("/api/furbetti/all", furbetti.findAll);
  app.get("/api/furbetti/get/:id", furbetti.findOne);
  app.post("/api/furbetti/add", furbetti.create);

/*
  // Retrieve a single Customer with customerId
  app.get("/api/furbetti/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);*/
};
