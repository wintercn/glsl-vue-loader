precision mediump float;
uniform vec4 u_FragColor;

void main(){
    gl_FragColor = vec4(gl_FragCoord.x*1.0/600.0, gl_FragCoord.y*1.0/500.0, 0.0, 1.0);
}