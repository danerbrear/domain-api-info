// geoIPContainer

import express from "express";
import path from "path";
import * as routes from "./src/router";

const port = 8084;
const app = express();

app.use(express.json());

// Configure routes
routes.register(app);

module.exports = () => {
   // const isTest = api.env('test');
   // You can use isTest to determine what presets and plugins to use.

   return {
       presets: [
           [
               '@babel/preset-env',
               '@babel/preset-typescript',
               {
                   targets: {
                       node: 'current',
                   },
               },
           ],
       ],
   };
};

// start the express server
app.listen(port, () => {
   // tslint:disable-next-line:no-console
   console.log( `server started at http://localhost:${port}`);
});

export default app;