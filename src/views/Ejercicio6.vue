<template>
  <div>
    <h1>Ejercicio 6</h1>
    <div class="flex-container">
      <Fieldset legend="Enunciado del Ejercicio 6">
        <p>
          La demanda de azúcar en una tienda sigue una distribución exponencial con media de 100 Kg/día. El dueño de la tienda revisa el inventario cada 7 días y hace un pedido a la planta igual a la capacidad de la bodega menos la cantidad de azúcar que tiene disponible en ese momento: la entrega no es inmediata y sigue una distribución uniforme entre 1 y 3 días. La demanda no surtida por falta de existencias representa ventas perdidas. La capacidad de almacenamiento de la bodega es de 700 Kgrs. El costo de ordenar es de 100 Bs./orden. El costo de llevar el inventario es igual a 0.1 Bs./Kg, el costo de adquisición es igual a 3.5 Bs/Kgr y el precio de venta igual 5 Bs/Kgr. Determinar el comportamiento del inventario a lo largo del tiempo, el costo y la ganancia neta, la demanda insatisfecha para un horizonte de dos meses. Sera la capacidad del almacén suficiente?
        </p>
      </Fieldset>
      <div class="controls">
        <label for="simulationDays">Número de simulaciones:</label>
        <input type="number" v-model="simulationDays" id="simulationDays" min="1">
        <button @click="simulateStore">Simular Tienda</button>
      </div>
    </div>
    <Fieldset v-if="results.length" legend="Resultados" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Inventario Inicial</th>
            <th>Demanda</th>
            <th>Inventario Final</th>
            <th>Demanda Insatisfecha</th>
            <th>Costo de Ordenar</th>
            <th>Costo de Inventario</th>
            <th>Ganancia Neta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.initialInventory }}</td>
            <td>{{ result.demand }}</td>
            <td>{{ result.finalInventory }}</td>
            <td>{{ result.unmetDemand }}</td>
            <td>{{ result.orderingCost }}</td>
            <td>{{ result.inventoryCost }}</td>
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
      simulationDays: 60, // Valor por defecto para dos meses
      currentInventory: 700,
      deliveryTime: 0
    };
  },
  methods: {
    simulateStore() {
      this.results = [];
      for (let day = 1; day <= this.simulationDays; day++) {
        let demand = Math.round(Math.random() * 100);
        let initialInventory = this.currentInventory;
        let unmetDemand = 0;
        let orderingCost = 0;
        let inventoryCost = Math.round(this.currentInventory * 0.1);
        let netGain = 0;

        if (day % 7 === 0 || this.currentInventory === 0) {
          orderingCost = 100;
          this.deliveryTime = Math.floor(Math.random() * 3) + 1;
        }

        if (this.deliveryTime > 0) {
          this.deliveryTime--;
          if (this.deliveryTime === 0) {
            this.currentInventory = 700 - this.currentInventory;
          }
        }

        if (demand > this.currentInventory) {
          unmetDemand = demand - this.currentInventory;
          this.currentInventory = 0;
        } else {
          this.currentInventory -= demand;
        }

        netGain = (demand - unmetDemand) * 5 - demand * 3.5 - orderingCost - inventoryCost;

        this.results.push({
          initialInventory,
          demand,
          finalInventory: this.currentInventory,
          unmetDemand,
          orderingCost,
          inventoryCost,
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
