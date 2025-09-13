import { Navigate } from "react-router-dom"

function ProtectedRouter({children}){
const Admin= localStorage.getItem("admin")
if(!Admin){
    return <Navigate to="/customerlogin" replace />
}

    return children
}
export default ProtectedRouter