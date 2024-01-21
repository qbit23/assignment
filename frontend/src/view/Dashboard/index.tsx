
import generateRoutes from "../../utils/generateRoutes"
import { dashboardRoutes } from "../../Routes"
import Sidebar from "../../component/Dashboard/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex">
        <div><Sidebar /></div>
        <div className="w-[calc(100vw-15rem)] h-screen">
            {generateRoutes(dashboardRoutes)}
        </div>
    </div>
  )
}
