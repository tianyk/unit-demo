<template>
  <div class="question">
    <div style="background: #81cdc1">
      <h2>{{ question.title }}</h2>
      <p>{{ question.content }}</p>

      <img
        src="./assets/<4k.png"
        width="100"
      >

      <button @click="submit('答案')">
        提交答案
      </button>
      <button @click="startRecord('Abc')">
        开始录音
      </button>
      <button @click="stopRecord()">
        停止录音
      </button>
      <button @click="playAudio('http://example.com/abc.mp3')">
        播放音频
      </button>
      <button @click="pauseAudio()">
        暂停播放
      </button>
      <button @click="stopAudio()">
        停止播放
      </button>
      <button @click="$message('普通信息')">
        普通信息
      </button>
      <button @click="$message('错误错信', 'error')">
        错误错信
      </button>
    </div>
  </div>
</template>

<script>
import mixin from './mixin.js';
export default {
	/* eslint no-undef:0 */
	name: COMPONENT_NAME,
	mixins: [mixin]
};
</script>

<style scoped>
</style>