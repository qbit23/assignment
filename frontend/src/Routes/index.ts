import { Home } from "../component/Dashboard/Home"
import Error404 from "../component/common/ErrorComponent"

export const dashboardRoutes=[{
    id:1,
    name:'home',
    path:'/home',
    component: Error404
},
{
    id:2,
    name:'transactions',
    path:'/transations',
    component:Home
},
{
    id:3,
    name:'payments',
    path:'/payments',
    component: Error404
},
{
    id:4,
    name:'cards',
    path:'/cards',
    component:Error404
},
{
    id:5,
    name:'capital',
    path:'/capital',
    component:Error404
},
{
    id:6,
    name:'Accounts',
    path:'/transations',
    component:Error404
},
]