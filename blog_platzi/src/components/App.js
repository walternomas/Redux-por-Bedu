const App = () => {
  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Walter</td>
            <td>w.barriosvazquez@gmail.com</td>
            <td>wbit.ar</td>
          </tr>
          <tr>
            <td>Platzi</td>
            <td>team@platzi.com</td>
            <td>platzi.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
