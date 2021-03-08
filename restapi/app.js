const app = require('express')();
const routes = require('./routes');
const { PORT } = require('./config/config');

require('./config/mongoose');

app.use(routes);

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}...`));