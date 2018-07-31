const app = require('./server');

const port = process.env.PORT || 3456;

app.listen(port, () => console.log(`listening on port ${port}.`));
