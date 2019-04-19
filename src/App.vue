<template>
  <div class="question">
    <div style="background: #81cdc1">
      <h2>题型二</h2>

      <span>{{question && question.content}}</span>

      <button @click="$emit('next', 'xxx')">next</button>
    </div>
  </div>
</template>

<script>
const { name } = require("../package.json");

export default {
  name,
  props: ["question", "answer", "mode"]
};
</script>

<style scoped>
</style>