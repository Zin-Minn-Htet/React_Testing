import { Navigate } from 'react-router-dom';
import Home from '../components/Home';
import { useLoginContext } from '../store/LoginContext'

const RouteGuard = ({children}) => {
    const { loggedIn } = useLoginContext();
    if (loggedIn) return children;
    else return <Navigate to='/' replace />;
}

export default RouteGuard;