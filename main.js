(()=>{"use strict";(new class{INGAME_TIME_EL_ID="ingame-time";#e;GAME_CLOCK=2880;GAME_OFFSET=-.05;#t;get inGameTimeEl(){return void 0===this.#e&&(this.#e=document.getElementById(this.INGAME_TIME_EL_ID)),this.#e}get sinceMidnight(){const e=new Date,t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),(e.getTime()-t.getTime())/1e3}leftPadZero(e){return`0${e}`.slice(-2)}renderTime(e,t){return`${this.leftPadZero(e)}:${this.leftPadZero(t)}`}get inGameTimeProgress(){return this.sinceMidnight%this.GAME_CLOCK}get inGameTimeDecimal(){return this.inGameTimeProgress/(this.GAME_CLOCK/24)}get inGameTime(){const e=this.inGameTimeDecimal+this.GAME_OFFSET,t=Math.floor(e),i=Math.round(e%1*60);return this.renderTime(t,i)}run(){this.inGameTimeEl.value=this.inGameTime,console.log(this.inGameTime)}start(){this.run(),void 0===this.#t&&(this.#t=setInterval(this.run.bind(this),1e3))}stop(){clearInterval(this.#t),this.#t=void 0}}).start()})();
//# sourceMappingURL=main.js.map