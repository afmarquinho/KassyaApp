import { Navigate, Route, Routes } from "react-router-dom";
import {
  AccountConfirmPage,
  ForgotPage,
  LoginPage,
  NewPasswordPage,
  RegisterPage,
} from "../auth";
import {
  AnalisisDatosPage,
  ClientesPage,
  ComprasPage,
  HomePage,
  InventariosPage,
  LogisticaPage,
  MarketingPage,
  ProveedoresPage,
  ProyectosPage,
  RRHHPage,
  ServicioClientePage,
  VentasPage,
} from "../kassya/pages";
import { useContext } from "react";
import AuthContext from "../auth/context/AuthProvider";

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      {isAuthenticated === false ? (
        // *RUTAS DEL LOGIN NO AUTENTICADO
        <Route>
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
          <Route path="auth/forgot" element={<ForgotPage />} />
          <Route
            path="auth/new-password/:token"
            element={<NewPasswordPage />}
          />
          <Route
            path="auth/account-confirmation/:token"
            element={<AccountConfirmPage />}
          />
          <Route path="/*" element={<Navigate to="auth/login" />} />
        </Route>
      ) : (
        // *RUTAS DE LA APP CUANDO ESTA AUTENTICADO
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="analisis-datos" element={<AnalisisDatosPage />} />
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="compras" element={<ComprasPage />} />
          <Route path="inventario" element={<InventariosPage />} />
          <Route path="logistica" element={<LogisticaPage />} />
          <Route path="marketing" element={<MarketingPage />} />
          <Route path="proveedores" element={<ProveedoresPage />} />
          <Route path="proyectos" element={<ProyectosPage />} />
          <Route path="RRHH" element={<RRHHPage />} />
          <Route path="serv-cliente" element={<ServicioClientePage />} />
          <Route path="ventas" element={<VentasPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
