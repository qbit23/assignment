import Transactions from "../component/Dashboard/Transactions"
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
    path:'/transactions',
    component:Transactions
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
    path:'/accounts',
    component:Error404
},
]