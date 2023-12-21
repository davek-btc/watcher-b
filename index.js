const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('HiroHacks #3 - Chainhook');
});

app.post("/api/events", async (req, res) => {
  const events = req.body;

  // Check if events.apply exists and is an array
  if (events.apply && Array.isArray(events.apply)) {
    events.apply.forEach((item) => {
      // Check if item has transactions and it's an array
      if (item.transactions && Array.isArray(item.transactions)) {
        item.transactions.forEach((transaction) => {
          // Check if transaction has operations and it's an array
          if (transaction.operations && Array.isArray(transaction.operations)) {
            transaction.operations.forEach((operation) => {
              // Log the operation
              console.log({ operation });
            });
          }
        });
      }
    });
  } else {
    // Handle the case where events.apply is not as expected
    return res.status(400).send({ message: "Invalid request format." });
  }

  // Send a response back to acknowledge receipt of the event
  res.status(200).send({ message: "Proposal added!" });
});


app.post("/api/get-monitored-address-balance", async (req, res) => {
  const events = req.body;

  // Check if events.apply exists and is an array
  if (events.apply && Array.isArray(events.apply)) {
    console.log({ events });
  } else {
    // Handle the case where events.apply is not as expected
    return res.status(400).send({ message: "Invalid request format." });
  }

  // Send a response back to acknowledge receipt of the event
  res.status(200).send({ message: "Got Name" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});