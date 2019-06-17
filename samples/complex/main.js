import draw from "./draw.frag";

var app = new Vue({
    template:'<div><draw v-bind:iTime="x" width=600 height=500></draw><input type=range min=0 max=100 v-model="x" /></div>',
    el: '#app',
    data: {
      x: 1.0
    }
    ,
    components: {
      draw
    }
});