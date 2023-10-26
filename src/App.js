import './App.css';
import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programa: '',
      asignatura: '',
      corte: '1 Previo',
      unidadAprendizaje: '',
      competenciaEspecifica: '',
      marcoContextualizacion: {
        pregunta: '',
        marco: '',
      },
      opcionesRespuesta: {
        opcion1: '',
        opcion2: '',
        opcion3: '',
        opcion4: '',
      },
      clave: '',
      evidencia: '',
      justificacion: '',
      disenadoPor: '',
      fecha: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleMarcoInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      marcoContextualizacion: {
        ...prevState.marcoContextualizacion,
        [name]: value,
      },
    }));
  }

  handleOpcionesRespuestaChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      opcionesRespuesta: {
        ...prevState.opcionesRespuesta,
        [name]: value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Programa:</label>
          <input
            type="text"
            name="programa"
            value={this.state.programa}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Asignatura:</label>
          <input
            type="text"
            name="asignatura"
            value={this.state.asignatura}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Corte:</label>
          <label>
            <input
              type="radio"
              name="corte"
              value="1 Previo"
              checked={this.state.corte === "1 Previo"}
              onChange={this.handleInputChange}
            />
            1 Previo
          </label>
          <label>
            <input
              type="radio"
              name="corte"
              value="2 Previo"
              checked={this.state.corte === "2 Previo"}
              onChange={this.handleInputChange}
            />
            2 Previo
          </label>
          <label>
            <input
              type="radio"
              name="corte"
              value="Examen"
              checked={this.state.corte === "Examen"}
              onChange={this.handleInputChange}
            />
            Examen
          </label>
        </div>

        <div>
          <label>Unidad de Aprendizaje:</label>
          <input
            type="text"
            name="unidadAprendizaje"
            value={this.state.unidadAprendizaje}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Competencia Específica por Evaluar:</label>
          <textarea
            name="competenciaEspecifica"
            value={this.state.competenciaEspecifica}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Enunciado de la pregunta:</label>
          <div>
            <label>Marco de Contextualización para Inferir la Pregunta:</label>
            <textarea
              name="marco"
              value={this.state.marcoContextualizacion.marco}
              onChange={this.handleMarcoInputChange}
            />
          </div>
          <div>
            <label>Pregunta o Afirmación según el Marco de Contextualización:</label>
            <textarea
              name="pregunta"
              value={this.state.marcoContextualizacion.pregunta}
              onChange={this.handleMarcoInputChange}
            />
          </div>
        </div>

        <div>
          <label>Opciones de Respuesta:</label>
          <div>
            <label>Opción 1:</label>
            <input
              type="text"
              name="opcion1"
              value={this.state.opcionesRespuesta.opcion1}
              onChange={this.handleOpcionesRespuestaChange}
            />
          </div>
          <div>
            <label>Opción 2:</label>
            <input
              type="text"
              name="opcion2"
              value={this.state.opcionesRespuesta.opcion2}
              onChange={this.handleOpcionesRespuestaChange}
            />
          </div>
          <div>
            <label>Opción 3:</label>
            <input
              type="text"
              name="opcion3"
              value={this.state.opcionesRespuesta.opcion3}
              onChange={this.handleOpcionesRespuestaChange}
            />
          </div>
          <div>
            <label>Opción 4:</label>
            <input
              type="text"
              name="opcion4"
              value={this.state.opcionesRespuesta.opcion4}
              onChange={this.handleOpcionesRespuestaChange}
            />
          </div>
        </div>

        <div>
          <label>Clave:</label>
          <input
            type="text"
            name="clave"
            value={this.state.clave}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Evidencia:</label>
          <input
            type="text"
            name="evidencia"
            value={this.state.evidencia}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Justificación:</label>
          <textarea
            name="justificacion"
            value={this.state.justificacion}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Diseñado por:</label>
          <input
            type="text"
            name="disenadoPor"
            value={this.state.disenadoPor}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Fecha:</label>
          <input
            type="text"
            name="fecha"
            value={this.state.fecha}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;
