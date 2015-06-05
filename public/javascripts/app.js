/* jshint esnext:true */

import { generateRandom, sum } from 'utility';

(function() {

  class App {
    constructor() {
      this.name = "Mike";
      this.bigStr = `
        Hello world you are
        the coolest string ever
      `;
    }
    test() {
      window.alert(this.bigStr);
    }
  }

  var myApp = new App();
  myApp.test();

})();