import { Outlet } from "react-router";
import Navebr from "../../components/navber/Navber";

const RootLayput = () => {
return <div>
    <Navebr />
    <Outlet />
    <h3>footer</h3>
</div>
}

export default RootLayput;