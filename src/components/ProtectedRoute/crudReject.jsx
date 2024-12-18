import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotPermitted from "./NotPermitted";

const RoleBaseRoute = (props) => {
    const isAdminRoute = window.location.pathname.startsWith('/admin');
    const userRole = useSelector(state => state.account.role);

    if (isAdminRoute  === true && userRole == 'Stock Manager') {
         return (<>{props.children}</>)
     } else {
         return (<NotPermitted />)
     }
}

const ProtectedCrudRoute = (props) => {
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    return (
        <>
            {isAuthenticated === true ?
                <>
                    <RoleBaseRoute>
                        {props.children}
                    </RoleBaseRoute>
                </>
                :
                <Navigate to='/loginAdmin' replace />
            }
        </>
    )
}

export default ProtectedCrudRoute;

