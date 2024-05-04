<template>
    <div>
      <h1>Juego de Lanzamiento de Monedas</h1>
      <div class="flex-container">
        <Fieldset legend="Enunciado del Juego">
          <p>
            En un juego se arrojan 3 monedas. Si todas las monedas muestran Cara o Sello, el apostador recibe 5 Bs. De otra manera, debe pagar 3 Bs. Determina cuánto habrá acumulado el apostador luego de un número determinado de lanzamientos.
          </p>
        </Fieldset>
        <div class="controls">
          <label for="numLanzamientos">Número de lanzamientos:</label>
          <input type="number" v-model="numLanzamientos" id="numLanzamientos" min="1" placeholder="Introduce número de lanzamientos">
          <button @click="simulateGame">Simular Juego</button>
        </div>
      </div>
      <Fieldset v-if="results.length" legend="Resultados" class="results-container">
        <table>
          <thead>
            <tr>
              <th>Número de Lanzamiento</th>
              <th>Monedas Lanzadas</th>
              <th>Ganancia/Pérdida (Bs)</th>
              <th>Total Acumulado (Bs)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in results" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ result.coins }}</td>
              <td>{{ result.gain }}</td>
              <td>{{ result.total }}</td>
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
        numLanzamientos: 10,  // Valor por defecto
        results: []
      };
    },
    methods: {
      simulateGame() {
        this.results = [];
        let total = 0;
        for (let i = 0; i < this.numLanzamientos; i++) {
          const coins = this.throwCoins();
          const allSame = coins.every(coin => coin === coins[0]);
          const gain = allSame ? 5 : -3;
          total += gain;
          this.results.push({
            coins: coins.join(', '),
            gain,
            total
          });
        }
      },
      throwCoins() {
        const outcomes = ['Cara', 'Sello'];
        return Array(3).fill(null).map(() => outcomes[Math.floor(Math.random() * 2)]);
      }
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
  button, input {
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
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
  label {
    font-size: 20px;
    color: #1c0c39;
    font-weight: bold;
  }
  </style>
