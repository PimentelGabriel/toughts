import session from "express-session";
import FileStore from "session-file-store";
import path from "path";
import os from 'os';

const fileStore = FileStore(session);

const sessionMDWARE = session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () {},
      path: path.join(os.tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
});

export {sessionMDWARE};