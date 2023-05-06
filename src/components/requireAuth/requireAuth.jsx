import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCurrentUser} from "../../store/users/selectors";


const RequireAuth = ({children}) => {
    const location = useLocation();
    const user = useSelector(getCurrentUser);

    if(!user){
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children;

}

export default RequireAuth