import { Link } from "react-router-dom"

const Admin  = () =>{

    return(
        <div>
            <Link to={"/allorders"}>Orders</Link>
            <Link>Registrations</Link>
        </div>
    )
}

export default Admin 