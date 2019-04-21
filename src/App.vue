<template>
  <div class="question">
    <div style="background: #81cdc1">
      <h2>{{ question.title }}</h2>
      <p>{{ question.content }}</p>

      <img
        src="./assets/<4k.png"
        width="100"
      >

      <div>
        <button @click="submit('答案')">
          提交答案
        </button>
      </div>
      <div>
        <button @click="startRecord('Abc')">
          开始录音
        </button>
        <button @click="stopRecord()">
          停止录音
        </button>
      </div>
      <div>
        <button @click="playAudio('http://example.com/abc.mp3')">
          播放音频
        </button>
        <button @click="pauseAudio()">
          暂停播放
        </button>
        <button @click="stopAudio()">
          停止播放
        </button>
      </div>
      <div>
        <button @click="$message('普通信息')">
          普通信息
        </button>
        <button @click="$message('错误错信', 'error')">
          错误错信
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin.js";

export default {
  mixins: [mixin],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>