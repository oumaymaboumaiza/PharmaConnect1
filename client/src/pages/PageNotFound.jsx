import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

export default function PageNotFound() {
  return (
    <Container sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography paragraph sx={{ mb: 4 }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button 
        component={Link} 
        to="/" 
        variant="contained"
        sx={{ px: 4 }}
      >
        Return Home
      </Button>
    </Container>
  );
}