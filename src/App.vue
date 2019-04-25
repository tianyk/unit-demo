<template>
  <div class="question">
    <div style="background: #81cdc1">
      <h2>{{ question.title }}</h2>
      <p>{{ question.content }}</p>

      <img
        src="./assets/4k.png"
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

      <div>
        <button @click="testAll()">
          testAll(promise)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const debug = require("./utils/debug")("ut:app");
import mixin from "./mixin.js";

export default {
  mixins: [mixin],
  data() {
    return {};
  },
  methods: {
    async testAll() {
      await this.submit("答案");
      await this.startRecord("Abc");
      try {
        await this.stopRecord();
      } catch(ignored) {
        // 出错了
      }
      await this.playAudio("http://video.51talk.com/na_web/coursereview/201801/1517207850.mp3");
      await this.pauseAudio();
      await this.stopAudio();

      const duration = await this.getAudioDuration("http://s.kg.51talk.com/ef5f1e2e-9d43-4fda-b763-b9f23f8f6d90.mp3?_" + Date.now());
      debug("duration: %s", duration);
    }
  }
};
</script>

<style scoped>
</style>