<template>
  <div>
    <h1>Ejercicio 3</h1>
    <div class="flex-container">
      <Fieldset legend="Enunciado del Ejercicio 3">
        <p>
          Max Z = 2X1 + 3X2 - X3<br>
          Sujeto a:<br>
          X1 + X2 &gt;= 2<br>
          1 &lt;= X3 &lt;= 2<br>
          X2 &gt;= 0 (Entero)<br>
          0 &lt;= X1 &lt;= 10
        </p>
      </Fieldset>
      <div class="controls">
        <label for="iterations">Iteraciones:</label>
        <input type="number" v-model="NUM_ITERACIONES" id="iterations" min="1">
        <button @click="simulateMonteCarlo">Simular</button>
      </div>
    </div>
    <Fieldset v-if="results.length" legend="Resultados" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Mejor Z Encontrado</th>
            <th>Iteración de Mejor Solución</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ Z }}</td>
            <td>{{ iteracion_mejor_solucion + 1 }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Iteración</th>
            <th>X1</th>
            <th>X2</th>
            <th>X3</th>
            <th>Z (Función Objetivo)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.x1 }}</td>
            <td>{{ result.x2 }}</td>
            <td>{{ result.x3 }}</td>
            <td>{{ result.z }}</td>
          </tr>
        </tbody>
      </table>
    </Fieldset>
  </div>
</template>

<script>
import Fieldset from '../components/CardProblem.vue';

export default {
  components: {
    Fieldset
  },
  data() {
    return {
      NUM_ITERACIONES: 1000,
      results: [],
      mejor_solucion: null,
      Z: -Infinity,
      iteracion_mejor_solucion: null,
    };
  },
  methods: {
    generar_rx(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    simulateMonteCarlo() {
      this.mejor_solucion = null;
      this.Z = -Infinity; // Establece Z a infinito negativo para la maximización
      this.iteracion_mejor_solucion = null;
      this.results = [];

      for (let i = 0; i < this.NUM_ITERACIONES; i++) {
        const x1 = this.generar_rx(0, 10);
        const x2 = this.generar_rx(0, 10);
        const x3 = this.generar_rx(1, 2);

        if (x1 + x2 >= 2) {
          const z = 2 * x1 + 3 * x2 - x3;
          if (z > this.Z) {
            this.Z = z;
            this.mejor_solucion = { x1, x2, x3, z };
            this.iteracion_mejor_solucion = i; // Guarda la iteración actual
          }
          this.results.push({ x1, x2, x3, z });
        }
      }
    },
  }

};
</script>


<style scoped>
h1 {
  font-size: 50px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  text-shadow: 2px 2px 4px #000000;
}
.flex-container {
  display: flex;
  align-items: start;
  gap: 20px;
  margin-top: 20px;
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1.1);
}
.results-container {
  margin: 20px auto;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
label {
  font-size: 20px;
  color: #1c0c39;
  font-weight: bold;
}
button {
  background-color: #3e0669;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
input {
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
</style>
