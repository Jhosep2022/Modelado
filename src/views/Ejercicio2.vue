<template>
  <div>
      <h1>Ejercicio 2</h1>
      <div class="flex-container">
          <Fieldset legend="Enunciado del Ejercicio 2">
              <p>
                  Determinar en una determinado tiempo para el deposito de monto de dinero (capital) y realizar el pago de interes dependiendo del monto <br>
                  k&lt;=10000  i=0.035 <br> 
                  10000&lt;=K&lt;=100000 i=0.040 <br>
                  k&gt;100000  i=0.050
              </p>
          </Fieldset>
          <div class="controls">
              <label for="capital">Monto (Capital):</label>
              <input type="number" v-model="capital" id="capital" min="0">
              
              <label for="time">Tiempo (en años):</label>
              <input type="number" v-model="time" id="time" min="1">
              
              <button @click="calculateInterest">Calcular Interés</button>
          </div>
          <div v-if="interest !== null" class="results">
              <p><strong>Interés:</strong> {{ interest }}</p>
              <p><strong>Monto total después de interés:</strong> {{ totalAmount }}</p>
          </div>
      </div>
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
    capital: 0,
    time: 1,
    interest: null,
    totalAmount: null
  };
},
methods: {
  calculateInterest() {
    let rate;
    if (this.capital <= 10000) {
      rate = 0.035;
    } else if (this.capital <= 100000) {
      rate = 0.040;
    } else {
      rate = 0.050;
    }
    this.interest = this.capital * rate * this.time;
    this.totalAmount = this.capital + this.interest;
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
.controls, .results {
display: flex;
flex-direction: column;
gap: 10px;
background-color: #fff;
padding: 40px;
border-radius: 30px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 1.1);
}

.results {
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

label{
  font-size: 20px;
  color: #1c0c39;
  font-weight: bold;
}

button {
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
</style>
