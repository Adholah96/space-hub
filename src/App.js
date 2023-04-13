import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import Missions from 'components/Missions';
import Profile from 'components/Profile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);
export default App;
