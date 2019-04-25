const debug = require("./utils/debug")("ut:mixin");

export default {
  props: {
    question: {
      // 题对象
      type: Object,
      required: true
    },
    tipsAudio: {
      // 开始提示音
      type: String,
      required: false,
      default: null
    },
    answer: {
      // 答案
      type: [String, Array, Object],
      required: false,
      default: null
    },
    mode: {
      // 模式 答题、
      type: String,
      required: false,
      default: "test",
      validator: value => {
        // 取值范围 test result 分别表示答题模式和查看结果模式
        return ["test", "result"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    /**
		 * 普通提示窗口
		 *
		 * @param {String} msg - 提示内容
		 * @param {string} [type='info'] - 类型 [info|error] 默认为info
		 */
    $message(msg, type = "info") {
      debug("[$message] msg: %s, type: %s", msg, type);
      this.$emit("message", msg, type);
    },

    /**
		 * 提交答案
		 *
		 * @param {Object} answer - 答案 { answer: '', result: true }
		 */
    submit(answer) {
      debug("[submit] answer: %o", answer);
      this.$emit("submit", answer);
    },

    /**
		 * 开始录音
		 *
		 * @param {String} sentence - 录音比对的单词或语句
		 * @param {Function} [cb=noop] - 回调函数
		 * 
		 */
    startRecord(sentence, cb) {
      debug("[startRecord] sentence: %s", sentence);
      if (!cb) {
        return new Promise((resolve, reject) => {
          // window.nativeSDK.startRecord(sentence, ({ code, url, score }) => {
          //   if (code) reject();
          //   else resolve({ url, score });
          // });
          resolve();
        });
      } else {
        cb();
      }
    },

    /**
		 * 停止录音
		 * 
		 * @param {Function} [cb=noop] - 回调函数
		 */
    stopRecord(cb) {
      debug("[stopRecord]");
      if (!cb) {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        cb();
      }
    },

    /**
		 * 播放音频
		 *
		 * @param {String} url - 音频URL 
		 * @param {Function} [cb=noop] - 回调函数 播放异常中断或者结束会调用
		 */
    playAudio(url, cb) {
      debug("[playAudio] url: %s", url);
      if (!cb) {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        cb();
      }
    },

    /**
		 * 暂停播放音频
		 *
		 * @param {Function} [cb=noop]
		 */
    pauseAudio(cb) {
      debug("[pauseAudio]");
      if (!cb) {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        cb();
      }
    },

    /**
		 * 停止播放音频
		 *
		 * @param {Function} [cb=noop]
		 */
    stopAudio(cb) {
      debug("[stopAudio]");
      if (!cb) {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        cb();
      }
    },

    /**
     * 获取音频时长
     *
     * @param {string} url - 
     * @param {Function} cb - 回调函数
     *          - err 
     *          - duration
     * @returns
     */
    getAudioDuration(url, cb) {
      debug("[getAudioDuration] url: %s", url);
      let audio = new Audio();
      audio.autoplay = "metadata";
      audio.volume = 0;
      audio.src = url;
      if (!cb) {
        return new Promise((resolve, reject) => {
          audio.onerror = (err) => {
            reject(err);
            audio = null;
          };

          audio.onloadedmetadata = () => {
            resolve(audio.duration);
            audio = null;
          };
        });
      } else {
        audio.onerror = (err) => {
          cb(err);
          audio = null;
        };

        audio.onloadedmetadata = () => {
          cb(null, audio.duration);
          audio = null;
        };
      }
    }
  }
};

