(function() {
    "use strict";
    function utility$$generateRandom(){
        return Math.random();
    }

    function utility$$sum(a,b){
        return a+b;
    }

    (function() {

      var App = (function(){var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};
        function App() {
          this.name = "Mike";
          this.bigStr = ("\
\n            Hello world you are\
\n            the coolest string ever\
\n          ");
        }DP$0(App,"prototype",{"configurable":false,"enumerable":false,"writable":false});
        proto$0.test = function() {
          window.alert(this.bigStr);
        };
      MIXIN$0(App.prototype,proto$0);proto$0=void 0;return App;})();

      var myApp = new App();
      myApp.test();

    })();
}).call(this);