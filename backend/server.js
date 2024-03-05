require("dotenv").config();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
};

const express = require("express");
const app = express();

app.use(cors(corsOptions));

app.use(express.json()); 

app.use("/platforms", require("./routes/platformsRoutes"));
app.use("/reviews", require("./routes/reviewsRoutes"));
app.use("/xbox/games", require("./routes/Xbox/gamesRoutes"));
app.use("/xbox/subscriptions", require("./routes/Xbox/subscriptionsRoutes"));

app.use((err, req, res, next) => {
  console.log('stak: ', err.stack);
  console.log('name: ', err.name);
  console.log('code: ', err.code);

  // res.status(500).json({
  //   message: "Что-то пошло не так",
  // });

  res.status(500).send(err)
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`));
