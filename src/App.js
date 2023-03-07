import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import Rockets from './components/Views/Rockets';
import Navbar from './Navbar';
import MyProfile from './components/Views/MyProfile';
import Missions from './components/Views/Missions';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
