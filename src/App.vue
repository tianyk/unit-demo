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
export default {
  /* eslint no-undef:0 */
  name: COMPONENT_NAME,
  props: ["question", "answer", "mode"]
};
</script>

<style scoped>
</style>