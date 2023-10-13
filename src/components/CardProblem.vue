<template>
    <div class="card">
        <fieldset class="fieldset">
      <legend class="fieldset-legend">{{ legend }}</legend>
      <slot></slot>
    </fieldset>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      legend: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>

  .card{
    margin: 0 ;
    width: 450px;
    background-color: rgb(233, 228, 238);
    border-radius: 25px;
    box-shadow: 0 0 110px #190707;
  }
 
  .fieldset {
    border-radius: 25px;
    padding: 10px 20px ;
    color: rgb(134, 52, 215);
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 0 0 10px #190707;
  }
  
  .fieldset-legend {
    font-weight: bold;
    font-size: 1.2em;
    padding: 0 10px;
    color: rgb(25, 20, 27);
  }
  </style>
  