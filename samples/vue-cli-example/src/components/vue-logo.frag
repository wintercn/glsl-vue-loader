precision mediump float;

void mainImage(){
    //vec3 r = vec3(100.0, 100.0, 1.0);
}
void main(){
    //vec2 st = gl_FragCoord.xy;
    vec4 lightgreen = vec4(0.26, 0.72, 0.51, 1.0);
    vec4 darkgreen = vec4(0.208, 0.286, 0.368, 1.0);
    vec4 white = vec4(1.0, 1.0, 1.0, 1.0);

    float x1 = 100.0 - 0.589 * gl_FragCoord.y + 10.0;
    float x2 = 100.0 - 0.589 * gl_FragCoord.y + 48.0;
    float x3 = 100.0 - 0.589 * gl_FragCoord.y + 87.0;

    if(gl_FragCoord.x < 100.0) {
        gl_FragColor = mix(white, lightgreen, smoothstep( x1, x1 + 1.0, gl_FragCoord.x));
        gl_FragColor = mix(gl_FragColor, darkgreen, smoothstep( x2, x2 + 1.0, gl_FragCoord.x));
        gl_FragColor = mix(gl_FragColor, white, smoothstep( x3, x3 + 1.0, gl_FragCoord.x));
    }
    else{
        gl_FragColor = mix(lightgreen, white , smoothstep( 200.0 - x1, 200.0 - x1 + 1.0, gl_FragCoord.x));
        gl_FragColor = mix(darkgreen, gl_FragColor , smoothstep( 200.0 - x2, 200.0 - x2 + 1.0, gl_FragCoord.x));
        gl_FragColor = mix(white, gl_FragColor , smoothstep( 200.0 - x3, 200.0 - x3 + 1.0, gl_FragCoord.x));
    }

    if(gl_FragCoord.y > 187.0) 
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}