import {NextFunction, Request, Response, Router} from "express";

const routerLogin = Router();

function requireAuth(request: Request, res: Response, next: NextFunction):void {
    if (request.session?.loggedIn){
        next();
        return;
    }
    res.status(403);
    res.send('access denied');
}

routerLogin.get('/login', (request, res) => {
    res.send(`
<form method="post">
        <h1>Login</h1>
        <div>
            <label>Email</label>
            <input name="email">
        </div>
        <div>
            <label>Password</label>
            <input name="password">
        </div>
        <button>Submit</button>
    </form>
    `);
});

routerLogin.post('/login', (request, res) => {
    const {email, password} =  request.body;
    if (email && password){
        if (email === '123' && password === '123'){
            request.session = {
                loggedIn: true
            }
            res.redirect('/');
        }
    }
    res.send('Invalid email and password!')
});

routerLogin.get('/logout', (request, res) => {
    request.session = undefined;
    res.redirect('/login')
});

routerLogin.get('/protected', requireAuth, (request, res) => {
    res.send('Welcome to protected route');
});

export {routerLogin}
