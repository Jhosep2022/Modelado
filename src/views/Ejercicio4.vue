<template>
  <div>
      <h1>Ejercicio 4</h1>
      <div class="flex-container">
          <Fieldset legend="Enunciado del Ejercicio 4">
              <p>
                  Desarrollar el diagrama de flujo para el siguiente juego de datos: el apostador lanza 2 dados y si saca 7 en la suma de los dos dados gana 5 Bs. De otra manera pierde 2 Bs. Simular el juego y determinar cuanto habra acumulado el apostador luego de los lanzamientos.
              </p>
          </Fieldset>
          <div class="controls">
              <label for="gamesCount">Número de juegos:</label>
              <input type="number" v-model="gamesCount" id="gamesCount" min="1">
              <button @click="simulateGame">Simular Juego</button>
          </div>
      </div>
      <Fieldset v-if="results.length" legend="Resultados" class="results-container">
          <div class="summary">
              <p><strong>Ganó la mesa:</strong> {{ houseWins }} veces</p>
              <p><strong>Ganó el apostador:</strong> {{ playerWins }} veces</p>
              <p><strong>Ingreso total de la mesa:</strong> {{ totalHouseGain }} Bs.</p>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Lanzamiento</th>
                      <th>Dado 1</th>
                      <th>Dado 2</th>
                      <th>Suma</th>
                      <th>Ganancia/Pérdida</th>
                      <th>Total Acumulado</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(result, index) in results" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ result.die1 }}</td>
                      <td>{{ result.die2 }}</td>
                      <td>{{ result.sum }}</td>
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
      results: [],
      gamesCount: 10
    };
  },
  computed: {
    houseWins() {
      return this.results.filter(result => result.gain === -2).length;
    },
    playerWins() {
      return this.results.filter(result => result.gain === 5).length;
    },
    totalHouseGain() {
      return (this.houseWins * 2) + (this.playerWins * -5);
    }
  },
  methods: {
    simulateGame() {
      this.results = [];
      let total = 0;
      for (let i = 0; i < this.gamesCount; i++) {
        const die1 = this.rollDie();
        const die2 = this.rollDie();
        const sum = die1 + die2;
        const gain = sum === 7 ? 5 : -2;
        total += gain;
        this.results.push({
          die1,
          die2,
          sum,
          gain,
          total
        });
      }
    },
    rollDie() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
}
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
