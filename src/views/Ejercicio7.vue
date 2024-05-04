<template>
  <div>
    <h1>Ejercicio 5</h1>
    <div class="flex-container">
      <Fieldset legend="Enunciado del Ejercicio 7">
        <p>
          Las llegadas de los clientes a una tienda, sigue una distribución uniforme: 2 ± 2, por hora y cada cliente compra artículos de acuerdo con la siguiente función de probabilidad:
           Artículos: 0 1 2 3
           Probabilidad: 0.2 0.3 0.4 0.1
          Mediante el desarrollo de un modelo de simulación, determine la ganancia neta del dueño y la cantidad de artículos vendidos de ese día si sus costos por día asciende a 300 Bs y el costo del articulo es igual A 50 Bs y el precio de venta es igual a 75 Bs.
        </p>
      </Fieldset>
      <div class="controls">
        <label for="simulationDays">Número de simulaciones:</label>
        <input type="number" v-model="simulationCount" id="simulationDays" min="1">
        <button @click="simulateStore">Simular Tienda</button>
      </div>
    </div>
    <Fieldset v-if="results.length" legend="Resultados" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Simulación</th>
            <th>Personas Entraron</th>
            <th>Personas Compraron</th>
            <th>Artículos Vendidos</th>
            <th>Ganancia Neta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.totalCustomers }}</td>
            <td>{{ result.buyingCustomers }}</td>
            <td>{{ result.totalItemsSold }}</td>
            <td>{{ result.netGain }}</td>
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
      simulationCount: 1
    };
  },
  methods: {
    simulateStore() {
      this.results = [];

      for (let sim = 0; sim < this.simulationCount; sim++) {
        let totalCustomers = 0;
        let buyingCustomers = 0;
        let totalItemsSold = 0;

        for (let hour = 0; hour < 24; hour++) {
          let customers = Math.floor(Math.random() * 5); // 2 ± 2
          totalCustomers += customers;

          for (let i = 0; i < customers; i++) {
            let randomValue = Math.random();

            if (randomValue <= 0.2) {
              // No items bought
            } else {
              buyingCustomers++;
              if (randomValue <= 0.5) {
                totalItemsSold += 1;
              } else if (randomValue <= 0.9) {
                totalItemsSold += 2;
              } else {
                totalItemsSold += 3;
              }
            }
          }
        }

        let totalRevenue = totalItemsSold * 75; // 75 Bs per item
        let totalCost = totalItemsSold * 50 + 300; // 50 Bs per item cost + 300 Bs daily cost
        let netGain = totalRevenue - totalCost;

        this.results.push({
          totalCustomers,
          buyingCustomers,
          totalItemsSold,
          netGain
        });
      }
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

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
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
  margin: 20px 0;
}

.controls{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1.1);
}
</style>
