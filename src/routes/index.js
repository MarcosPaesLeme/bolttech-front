import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SingUp';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="home" element={<PrivateRoute />}>
        <Route path="" element={<Home />} />
      </Route>
      {/* <Route path="analysis" element={<PrivateRoute />}>
        <Route path="" element={<Analysis />} />
      </Route> */}
    </Routes>
  );
};

export default Router;
