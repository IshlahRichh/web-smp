import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const { login } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      const success = login(username, password);
      
      if (success) {
         // Redirect to the page user was trying to access, or biaya-pendaftaran
         const from = (location.state as any)?.from?.pathname || '/biaya-pendaftaran';
         navigate(from, { replace: true });
      } else {
         setError('Username atau password salah. Silakan coba lagi.');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="row">
            {error && (
               <div className="col-lg-12 mb-25">
                  <div className="alert alert-danger" style={{ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px' }}>
                     {error}
                  </div>
               </div>
            )}
            <div className="col-lg-12 mb-25">
               <input 
                  className="input" 
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
               />
            </div>
            <div className="col-lg-12 mb-50">
               <input 
                  className="input" 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
            <div className="col-lg-12">
               <button type="submit" className="tg-btn w-100">Login</button>
            </div>
         </div>
      </form>
   )
}

export default LoginForm
