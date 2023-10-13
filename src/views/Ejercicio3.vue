<template>
    <div>
      <h1>Ejercicio 3</h1>
      <div class="container">
        <Fieldset legend="Enunciado del Ejercicio 3">
          <p>
            Min Z = 2x1 + 2x2<br>
            Sujeto a:<br>
            6x1 + 3x2 &lt;= 200<br>
            3x1 + 5x2 &lt;= 180<br>
            x1, x2 &gt;= 0
            0&lt;=x1&lt;=1000
            5&lt;=x2&lt;=100
          </p>
        </Fieldset>
  
        <div class="simulation">
          <div class="input-section">
            <label>Iteraciones: </label>
            <input v-model="NUM_ITERACIONES" type="number" />
            <button @click="simulateMonteCarlo">Simular</button>
          </div>
  
          <div v-if="mejor_solucion" class="card">
            <p><strong>x1:</strong> {{ mejor_solucion[0] }}</p>
            <p><strong>x2:</strong> {{ mejor_solucion[1] }}</p>
            <p><strong>Valor mínimo de Z:</strong> {{ Z }}</p>
            <p><strong>Mejor solución encontrada en la iteración:</strong> {{ iteracion_mejor_solucion + 1 }}</p>
            <p><strong>Se hicieron:</strong> {{ NUM_ITERACIONES }} iteraciones.</p>
          </div>
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
        NUM_ITERACIONES: 1000,
        mejor_solucion: null,
        Z: Infinity,
        iteracion_mejor_solucion: null,
      };
    },
    methods: {
      generar_rx() {
        return Math.random();
      },
      simulateMonteCarlo() {
        this.mejor_solucion = null;
        this.Z = Infinity;
        this.iteracion_mejor_solucion = null;
  
        for (let i = 0; i < this.NUM_ITERACIONES; i++) {
          const rx1c = this.generar_rx();
          const rx2c = this.generar_rx();
          const xc1 = Math.round(1000 * rx1c);
          const xc2 = Math.round(5 + 95 * rx2c);
          const x1 = xc1;
          const x2 = xc2;
  
          const restriccion = 6 * x1 + 3 * x2 >= 200 && 3 * x1 + 5 * x2 >= 180;
  
          if (restriccion) {
            const Zc = Math.floor(2.5 * x1 + 2 * x2);
            if (Zc < this.Z) {
              this.Z = Zc;
              this.mejor_solucion = [x1, x2];
              this.iteracion_mejor_solucion = i;
            }
          }
        }
      },
    },
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
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  
  .simulation {
    width: 40%;
    margin-right: 30px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 2px 2px 4px #000000;
  }
  

  input {
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .input-section {
    margin-bottom: 20px;
  }
  
  p {
    margin: 0;
    color: #3e0669;
    font-size: 20px;
  }
  
  </style>
  