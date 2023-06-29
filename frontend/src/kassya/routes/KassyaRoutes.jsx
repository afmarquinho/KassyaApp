import { Navigate, Route, Routes } from "react-router-dom";
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
} from "../pages";

const KassyaRoutes = () => {
  return (
    <Routes>
      <Routes>
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
      </Routes>
    </Routes>
  );
};

export default KassyaRoutes;
