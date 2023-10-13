<template>
  <div>
      <h1>Ejercicio 5</h1>
      <div class="flex-container">
          <Fieldset legend="Enunciado del Ejercicio 5">
              <p>
                  Un granjero tiene una gallina que pone huevos a una razón Poisson con media de 2 huevos/día. El 20% de los huevos se rompen, del 30% de ellos nacen pollos y el resto permanecen como huevos. De los pollos, el 20% muere y el 80% sobrevive. Simule este sistema y determine el ingreso promedio del granjero si cada huevo lo vende en 2 Bs y cada pollo en 30 Bs.
              </p>
          </Fieldset>
          <div class="controls">
              <label for="simulationDays">Número de días:</label>
              <input type="number" v-model="simulationDays" id="simulationDays" min="1">
              <button @click="simulateFarm">Simular Granja</button>
          </div>
      </div>
      <Fieldset v-if="results.length" legend="Resultados" class="results-container">
        <p><strong>Total de Ganancia de los {{ simulationDays }} días:</strong> {{ totalIncome }} Bs.</p>
        <p><strong>Huevos Puestos en el total de dias</strong> 
        {{ results.reduce((acc, result) => acc + result.eggsLaid, 0) }} </p>
        <p><strong>Pollos Nacidos en el total de dias</strong> 
        {{ results.reduce((acc, result) => acc + result.chicksBorn, 0) }} </p>
        <p><strong>Huevos Rotos en el total de dias</strong> 
        {{ results.reduce((acc, result) => acc + result.eggsBroken, 0) }} </p>
        <p><strong>Pollos Muertos en el total de dias</strong> 
        {{ results.reduce((acc, result) => acc + result.chicksDied, 0) }} </p> 
        <p><strong>Total de Pollos vendidos</strong> {{ totalgallinas }}</p>
        <p><strong>Total de Huevos vendidos</strong> {{ totalhuevos }}</p>
          <table>
              <thead>
                  <tr>
                      <th>Día</th>
                      <th>Huevos Puestos</th>
                      <th>Huevos Rotos</th>
                      <th>Pollos Nacidos</th>
                      <th>Pollos Muertos</th>
                      <th>Ingreso del Día (Bs)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(result, index) in results" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ result.eggsLaid }}</td>
                      <td>{{ result.eggsBroken }}</td>
                      <td>{{ result.chicksBorn }}</td>
                      <td>{{ result.chicksDied }}</td>
                      <td>{{ result.dailyIncome }}</td>
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
      simulationDays: 300
    };
  },
  computed: {
    averageIncome() {
      const totalIncome = this.results.reduce((acc, result) => acc + result.dailyIncome, 0);
      return (totalIncome / this.results.length).toFixed(2);
    },
    totalIncome() {
      return this.results.reduce((acc, result) => acc + result.dailyIncome, 0);
    },
    //total de gallinas vendidas

    totalgallinas(){
      return this.results.reduce((acc, result) => acc + result.chicksBorn, 0);
    },

    //total de huevos vendidos

    totalhuevos(){
      return this.results.reduce((acc, result) => acc + result.eggsLaid, 0);
    }
  },
  methods: {
    simulateFarm() {
      this.results = [];
      for (let day = 1; day <= this.simulationDays; day++) {
        const eggsLaid = this.poissonRandom(2);
        const eggsBroken = Math.round(eggsLaid * 0.2);
        const chicksBorn = Math.round((eggsLaid - eggsBroken) * 0.3);
        let chicksDied = 0;
        for (let i = 0; i < chicksBorn; i++) {
          if (Math.random() < 0.2) {
            chicksDied++;
          }
        }
        const dailyIncome = (eggsLaid - eggsBroken - chicksBorn) * 2 + (chicksBorn - chicksDied) * 30;
        this.results.push({
          eggsLaid,
          eggsBroken,
          chicksBorn,
          chicksDied,
          dailyIncome
        });
      }
    },
    poissonRandom(lambda) {
      let L = Math.exp(-lambda);
      let k = 0;
      let p = 1;
      do {
        k++;
        p *= Math.random();
      } while (p > L);
      return k - 1;
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
</style>
