import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { CircularProgress, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ 
  children,
  requiredRoles = [],
  customRedirect
}) {
  const { user, isLoading, error } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        gap: 2
      }}>
        <CircularProgress size={60} thickness={4} />
        <Typography variant="body1" color="text.secondary">
          Verifying your session...
        </Typography>
      </Box>
    );
  }

  if (error && user) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="error">
          Authentication error: {error.message}
        </Typography>
      </Box>
    );
  }
  

  if (!user) {
    return (
      <Navigate 
        to={customRedirect || '/login'} 
        state={{ from: location }} 
        replace 
      />
    );
  }

  if (requiredRoles.length > 0 && 
      !requiredRoles.some(role => user.roles?.includes(role))) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh'
      }}>
        <Typography variant="h6" color="error">
          Unauthorized Access
        </Typography>
      </Box>
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRoles: PropTypes.arrayOf(PropTypes.string),
  customRedirect: PropTypes.string
};
