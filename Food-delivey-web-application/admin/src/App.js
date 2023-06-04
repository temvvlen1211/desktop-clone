import useCurrentUser from "./hooks";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterScreen from "views/admin/register";
import { OrdersScreen } from "./screens/OrdersScreen";
import SignInScreen from "views/admin/signin";

import AdminLayout from "layouts/admin";

function App() {
  const { currentUser } = useCurrentUser();
  console.log("currentUser:", currentUser);

  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />

      <Route path="signIn/*" element={<SignInScreen />} />
      <Route path="register/*" element={<RegisterScreen />} />
      <Route path="/orders" element={<OrdersScreen />} />

      <Route path="/" element={<Navigate to="/admin/" replace />} />
    </Routes>
  );
}

export default App;
