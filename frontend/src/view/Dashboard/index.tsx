
import generateRoutes from "../../utils/generateRoutes"
import { dashboardRoutes } from "../../Routes"

export default function Dashboard() {
  return (
    <div>
        <div>Sidebar</div>
        <div>
            {generateRoutes(dashboardRoutes)}
        </div>
    </div>
  )
}
