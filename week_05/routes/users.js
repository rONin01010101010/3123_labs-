import express from "express"
const routerUser = express.Router();
routerUser.use(express.json());
/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res, next) => {
    try {
        const userData = fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8');
        const users = JSON.parse(userData);
        res.json(users);
    } catch (err) {
        next(err);
    }
});




// // - Modify /login router to accept username and password as JSON body parameter
// // - Read data from user.json file
// // - If username and  passsword is valid then send resonse as below 
//     {
//         status: true,
//         message: "User Is valid"
//     }
// - If username is invalid then send response as below 
//     {
//         status: false,
//         message: "User Name is invalid"
//     }
// - If passsword is invalid then send response as below 
//     {
//         status: false,
//         message: "Password is invalid"
//     }
routerUser.post('/login', (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        // Read user data from user.json
        const userData = fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8');
        const users = JSON.parse(userData);
        
        // Find user by username
        const user = users.find(u => u.username === username);
        
        // Check if username exists
        if (!user) {
            return res.json({
                status: false,
                message: "User Name is invalid"
            });
        }
        
        // Check if password matches
        if (user.password !== password) {
            return res.json({
                status: false,
                message: "Password is invalid"
            });
        }
        
        // If both username and password are valid
        res.json({
            status: true,
            message: "User Is valid"
        });
        
    } catch (err) {
        next(err);
    }
})


// - Modify /logout route to accept username as parameter and display message
//     in HTML format like <b>${username} successfully logout.<b>
// */
routerUser.get('/logout/:username', (req, res) => {
    const { username } = req.params;
    res.send(`<b>${username} successfully logged out.</b>`);
});

export default routerUser;