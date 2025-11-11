import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProtectedRoute from "./pages/Protacted";
import Layout from "./component/common/Layout";
import Cart from "./pages/Cart";
import FullCard from "./component/food/FullCard";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading....</p>;

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="cart"
        element={
          <ProtectedRoute>
            <Layout>
              <Cart />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="item/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <FullCard />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* <Route path="*" element={<Navigate to={user ? "/home" : "/auth"} />} /> */}
    </Routes>
  );
}

export default App;
