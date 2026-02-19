import { useState, useEffect } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { useApi } from "./hooks/useApi";

function App() {
  //const [count, setCount] = useState(0);
  /*
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  */

  /*
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  */
  const handleReload = () => {
    const { data, loading, error } = useApi(
      "https://jsonplaceholder.typicode.com/posts",
    );
  };
  const apiURL = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useApi(
    //"https://jsonplaceholder.typicode.com/posts"
    //"http://localhost:5051/reportes/prueba"
    apiURL,
  );

  if (loading) {
    return (
      <div className="app">
        <h1>Mi App con API jsonplaceholder</h1>
        <p>Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <h1>Mi App con API jsonplaceholder</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={handleReload}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <h1> Mi App con API jsonplaceholder</h1>
      {/*<button onClick={handleReload}>Recargar Datos</button>*/}

      <div className="table-container">
        <h2>Posts de la API:</h2>

        {data && data.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Contenido</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {/*{data.slice(0, 10).map((item) => (*/}
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p> No hay datos </p>
        )}
      </div>
    </div>
  );
}

export default App;
