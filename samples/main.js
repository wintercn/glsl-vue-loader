import "./draw.frag";

var app = new Vue({
    template:'<div><draw v-bind:iTime="x" indicesCount="3" width=600 height=500></draw><input type=range min=0 max=100 v-model="x" /></div>',
    el: '#app',
    data: {
      x: 1.0
    }

});