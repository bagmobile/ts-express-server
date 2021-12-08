import {Router} from "express";

const routerRoot = Router();
routerRoot.get('/', (request, res) => {
    if (request.session?.loggedIn) {
        res.send(`
        <h1>You are logged in</h1>
        <div>
            <a href="/logout">Logout</a>
        </div>
    `);
    } else {
        res.redirect('/login')
    }
});
export {routerRoot};
