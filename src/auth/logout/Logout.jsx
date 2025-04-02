import { useEffect } from 'react';
import { logout } from './logout.api';
import { setUserId } from '../../utils/analytics'; 

export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        await logout();
        setUserId(null);
        alert('Logged out successfully');
        window.location.href = '/login';
      } catch (error) {
        console.error('Logout failed', error);
      }
    })();
  }, []);

  return <div>Logging out...</div>;
};
