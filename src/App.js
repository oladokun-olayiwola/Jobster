import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import {Landing, Register, Error, ProtectedRoute} from './pages'
import {
  Profile,
  Addjob,
  Alljobs,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {

  return (
    // <Landing />
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<Alljobs />} />
            <Route path="add-job" element={<Addjob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <ToastContainer position="top-center" /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
