import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext.provider";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <div>
        {auth?.user ? (
          <h3>Welcome! {auth?.user}</h3>
        ) : (
          <h3>
            Please <Link to="/login">Login</Link>
          </h3>
        )}

        {auth?.user && (
          <button onClick={() => auth.logOut()} className="btn-submit">
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
