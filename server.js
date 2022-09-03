const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 4001;

    app.listen(PORT, () => {
      console.log('Express app runnign');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
