import 'dotenv/config';
import app from './app';
import connection from './models/connection';

const PORT:string | number = process.env.PORT || 3001;

connection().then(() => {
  app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
}).catch((error) => {
  console.log(`Connection with database generated an error: ${error}`);
  process.exit(0);
});



