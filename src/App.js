import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import {Stats, Landing, Login, Profile, Addjob, Alljobs, Error, Register} from './pages'
import Navbar from './components/Navbar'


function App() {

  return (
    // <Landing />
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Stats />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-job" element={<Addjob />} />
          <Route path="/all-jobs" element={<Alljobs />} />
          <Route path="*" element={<Error />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
