import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { mockLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock login success
    const mockUser = {
      username: 'testuser',
      email: 'test@example.com'
    };
    
    mockLogin(mockUser); // Set mock user
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;