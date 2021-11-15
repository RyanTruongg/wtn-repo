/* eslint-disable import/no-unresolved */
import admin from "firebase-admin";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
