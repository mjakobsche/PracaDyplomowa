System.register(["./index-legacy-fd45d8cb.js"],(function(t,e){"use strict";var i,r,n;return{setters:[t=>{i=t.W,r=t.I,n=t.N}],execute:function(){t("HapticsWeb",class extends i{constructor(){super(...arguments),this.selectionStarted=!1}async impact(t){const e=this.patternForImpact(null==t?void 0:t.style);this.vibrateWithPattern(e)}async notification(t){const e=this.patternForNotification(null==t?void 0:t.type);this.vibrateWithPattern(e)}async vibrate(t){const e=(null==t?void 0:t.duration)||300;this.vibrateWithPattern([e])}async selectionStart(){this.selectionStarted=!0}async selectionChanged(){this.selectionStarted&&this.vibrateWithPattern([70])}async selectionEnd(){this.selectionStarted=!1}patternForImpact(t=r.Heavy){return t===r.Medium?[43]:t===r.Light?[20]:[61]}patternForNotification(t=n.Success){return t===n.Warning?[30,40,30,50,60]:t===n.Error?[27,45,50]:[35,65,21]}vibrateWithPattern(t){if(!navigator.vibrate)throw this.unavailable("Browser does not support the vibrate API");navigator.vibrate(t)}})}}}));
