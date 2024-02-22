import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotels from "./pages/AddHotels";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Main page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/my-hotels"
          element={
            <Layout>
              <MyHotels />
            </Layout>
          }
        />

        {isLoggedIn && (
          <Route
            path="/add-hotel"
            element={
              <Layout>
                <AddHotels />
              </Layout>
            }
          />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
