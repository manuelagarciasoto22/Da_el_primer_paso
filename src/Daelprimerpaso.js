import React from "react";
import "./styles.css";

export default function Daelprimerpaso() {
  return (
    <div className="Daelprimerpaso">
      <h1>Proyecto PPI Da el primer paso</h1>
      <h2>Datos de los integrantes</h2>

      <table border="1" className="tabla">
        <tr className="fila#1">
          <td className="columna">Nombres</td>

          <td className="columna">Apellidos</td>

          <td className="columna">Correo electronico</td>

          <td className="columna">Número de celular</td>
        </tr>

        <tr>
          <td className="columna1">Manuela</td>

          <td className="columna1">García Soto</td>

          <td className="columna1">manuelitagarso@gmail.com</td>

          <td className="columna1">3015920265</td>
        </tr>

        <tr>
          <td className="columna2">Daniela</td>

          <td className="columna2">Caraballo Osorio</td>

          <td className="columna2">caraballo1625@gmail.com</td>

          <td className="columna2">3023940689</td>
        </tr>
      </table>
    </div>
  );
}
