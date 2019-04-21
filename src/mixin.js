const debug = require("./utils/debug")("ut:mixin");
import { noop } from "./utils";

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
    },

    /**
		 * 提交答案
		 *
		 * @param {String|Array|Object} answer - 答案
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
    startRecord(sentence, cb = noop) {
      debug("[startRecord] sentence: %s", sentence);
      cb();
    },

    /**
		 * 停止录音
		 * 
		 * @param {Function} [cb=noop] - 回调函数
		 */
    stopRecord(cb = noop) {
      debug("[stopRecord]");
      cb();
    },

    /**
		 * 播放音频
		 *
		 * @param {String} url - 音频URL 
		 * @param {Function} [cb=noop] - 回调函数 播放异常中断或者结束会调用
		 */
    playAudio(url, cb = noop) {
      debug("[playAudio] url: %s", url);
      cb();
    },

    /**
		 * 暂停播放音频
		 *
		 * @param {Function} [cb=noop]
		 */
    pauseAudio(cb = noop) {
      debug("[pauseAudio]");
      cb();
    },

    /**
		 * 停止播放音频
		 *
		 * @param {Function} [cb=noop]
		 */
    stopAudio(cb = noop) {
      debug("[stopAudio]");
      cb();
    }
  }
};