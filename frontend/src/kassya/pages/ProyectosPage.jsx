import NuevoProyecto from "../components/proyectos/NuevoProyecto";
import KassyaLayout from "../layout/KassyaLayout";

const ProyectosPage = () => {
  return (
    <>
      <KassyaLayout title="PROYECTOS">
        {/* //TODO:Estado del proyecto: "En progreso", "Completado", "En espera", "Cancelado", etc.  */}
        <NuevoProyecto />
      </KassyaLayout>
    </>
  );
};

export default ProyectosPage;
