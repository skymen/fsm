import { id, addonType } from "../../config.caw.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      const initialState = properties ? properties[0] : "";
      const triggerInitial = properties ? !!properties[1] : false;

      this.state = initialState;
      this.previousState = "";
      this.exitingState = null;
      this.stack = [];
      this.enterTime = this.runtime.gameTime;

      this.pendingInitialTrigger = triggerInitial;
      if (this.pendingInitialTrigger) {
        this._setTicking(true);
      }
    }

    _tick() {
      if (!this.pendingInitialTrigger) return;
      this.pendingInitialTrigger = false;
      this._setTicking(false);
      this._trigger("OnStateEnter");
      this._trigger("OnAnyStateChange");
    }

    _trigger(method) {
      this.dispatch(method);
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    on(tag, callback, options) {
      if (!this.events[tag]) {
        this.events[tag] = [];
      }
      this.events[tag].push({ callback, options });
    }

    off(tag, callback) {
      if (this.events[tag]) {
        this.events[tag] = this.events[tag].filter(
          (event) => event.callback !== callback,
        );
      }
    }

    dispatch(tag) {
      if (this.events[tag]) {
        this.events[tag].forEach((event) => {
          if (event.options && event.options.params) {
            const fn = self.C3[AddonTypeMap[addonType]][id].Cnds[tag];
            if (fn && !fn.call(this, ...event.options.params)) {
              return;
            }
          }
          event.callback();
          if (event.options && event.options.once) {
            this.off(tag, event.callback);
          }
        });
      }
    }

    _getDebuggerProperties() {
      return [
        {
          title: "FSM",
          properties: [
            {
              name: "State",
              value: this.state,
              onedit: (v) => this.SetState(String(v)),
            },
            { name: "Previous state", value: this.previousState },
            {
              name: "Time in state",
              value: this.runtime.gameTime - this.enterTime,
            },
            { name: "Stack", value: this.stack.join(" > ") },
          ],
        },
      ];
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        s: this.state,
        p: this.previousState,
        t: this.enterTime,
        k: this.stack.slice(),
      };
    }

    _loadFromJson(o) {
      this.state = o.s;
      this.previousState = o.p;
      this.enterTime = o.t;
      this.stack = Array.isArray(o.k) ? o.k.slice() : [];
      this.pendingInitialTrigger = false;
    }
  };
}
