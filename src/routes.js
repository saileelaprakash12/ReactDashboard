
import Dashboard from "views/Dashboard.js";

import UserModule from "views/UserModule";
import AdminModule from "views/AdminModule";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
 
  
  
 
  {
    path: "/tables",
    name: "Admin Module",
    icon: "fa fa-users",
    component: AdminModule,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "User Module",
    icon: "fa fa-user",
    component: UserModule,
    layout: "/admin",
  },
  
];

export default routes;
