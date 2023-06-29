import { Navigate, Route, Routes } from "react-router-dom";
import {
  AccountConfirmPage,
  ForgotPage,
  LoginPage,
  NewPasswordPage,
  RegisterPage,
} from "../auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
      <Route path="auth/forgot" element={<ForgotPage />} />
      <Route path="auth/new-password" element={<NewPasswordPage />} />
      <Route
        path="auth/account-confirmation"
        element={<AccountConfirmPage />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoutes;
