import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="login-button">
        Se connecter
      </Button>
    </form>
  );
}