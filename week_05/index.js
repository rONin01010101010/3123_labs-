import express from 'express';
const app = express();
import userRouter from './routes/users.js';
import path from 'path';
import routerUser from './routes/users.js';
import http from 'http'
// Add User Router
app.use('api/v1/user', userRouter);
app.use(express.urlencoded({ extended: true }));
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
//serves html file 
routerUser.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
userRouter.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

userRouter.use((req, res) => {
    res.status(404).send('Page Not Found');
});

userRouter.createServer.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));