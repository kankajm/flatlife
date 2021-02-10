import React from 'react';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />

            <Container
              className="d-flex align-items-center 
               justify-content-center"
              style={{ minHeight: "100vh" }}
            >

              <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;