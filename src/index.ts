import express from 'express';
import {routerLogin} from "./routers/login";
import cookieSession from "cookie-session";
import {routerRoot} from "./routers/root";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['245uriodfjgms[wpogjsdpn89io;m']}));
app.use(routerRoot);
app.use(routerLogin);

app.listen(3000, () => {
    console.log('listening 3000 .....')
})
