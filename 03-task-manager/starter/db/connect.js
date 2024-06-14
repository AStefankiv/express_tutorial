const mongoose = require('mongoose');

const connectionString =
'mongodb+srv://stefankif35:1234@nodeexpressprojects.o3rdqge.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects'

mongoose
.connect(connectionString)
.then(() => {console.log('Connected to the database');})
.catch((err) => {console.log(err);});