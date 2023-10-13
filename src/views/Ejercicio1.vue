<template>
  <div>
      <h1>Ejercicio 1</h1>
      <div class="flex-container">
          <Fieldset legend="Enunciado del Ejercicio 1">
              <p>
                  En un juego de azar se arrojan 3 monedas si todas las monedas muestran Cara o Sello el apostador recibe 5 Bs. De otra manera el apostador debe pagar 3 Bs. Simular el juego y determinar cuanto habra acumulado el apostador luego de los lanzamientos.
              </p>
          </Fieldset>
          <div class="controls">
              <label for="gamesCount">Número de juegos:</label>
              <input type="number" v-model="gamesCount" id="gamesCount" min="1">
              <button @click="simulateGame">Simular Juego</button>
          </div>
      </div>
      <Fieldset v-if="results.length" legend="Resultados" class="results-container">
          <div>
              <p><strong>Ganó la casa:</strong> {{ houseWins }} veces</p>
              <p><strong>Total ganado por la casa:</strong> {{ totalHouseGain }} Bs.</p>
              <p><strong>Ganó el apostador:</strong> {{ playerWins }} veces</p>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Lanzamiento</th>
                      <th>Resultado</th>
                      <th>Ganancia/Pérdida</th>
                      <th>Total Acumulado</th>
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
    results: [],
    gamesCount: 10
  };
},
computed: {
  houseWins() {
    return this.results.filter(result => result.gain === -3).length;
  },
  playerWins() {
    return this.results.filter(result => result.gain === 5).length;
  },
  totalHouseGain() {
    return (this.houseWins * 3) - (this.playerWins * 5);
  }
},
methods: {
  simulateGame() {
    this.results = [];
    let total = 0;
    for (let i = 0; i < this.gamesCount; i++) {
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

label{
  font-size: 20px;
  color: #1c0c39;
  font-weight: bold;
}

button{
  background-color: #3e0669; /* Green */
  border: none;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

input{
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
