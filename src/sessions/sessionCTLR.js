import session from "express-session";
import FileStore from "session-file-store";

const fileStore = new FileStore({
        logIn: function () {},
        path: "./"
    }
);

const sessionMDWARE = session({
    name: "SESSION",
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: fileStore,
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
});

export {sessionMDWARE};