//App and database imported
const {app} = require('./app')
const {database} = require('./utils/database.util')

//Models
const {Client} = require('./models/client.model');
const {Task} = require('./models/task.model');

database.authenticate()
    .then(console.log("authenticated"))
    .catch((error)=>{console.log(error);});

//Model relations 1 Client => M Tasks
Client.hasMany(Task, {foreignKey: 'clientId'});
Task.belongsTo(Client);

database.sync()
    .then(console.log("synced"))
    .catch((error)=>{console.log(error);});

app.listen(5000, ()=>{
    console.log('run server port 5000');
});