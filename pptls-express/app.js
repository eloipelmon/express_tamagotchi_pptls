const express = require('express');
const app = express();
const partidasRouter = require('./routes/pptls');
const tamagotchiRouter = require('./routes/tamagotchi');


app.use(express.json());
app.use('/pptls', partidasRouter);
app.use('/tamagotchi', tamagotchiRouter);

app.listen(3000, () => {
  console.log('||| SERVER PORT => 3000 |||');
});
