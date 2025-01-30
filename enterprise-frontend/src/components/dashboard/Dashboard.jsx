import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  return (
    <div>
      <h2>Welcome to Dashboard, {user?.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;