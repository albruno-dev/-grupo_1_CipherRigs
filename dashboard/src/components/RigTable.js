import Fila from "./RigRow";

function RigTable(props) {
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">
        {" "}
        Todos los RIGS de la base de datos
      </h1>

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Especificaciones</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {props.rigList.map((rig, i) => (
                  <tr key={i}>
                    <Fila {...rig} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RigTable;
