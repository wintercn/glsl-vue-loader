# GLSL vue loader

This is a webpack loader which is used to load a fragment shader to a Vue.js component.

Uniforms will be automatically converted to Vue.js property.

## Quick glimpse

Go to the samples folder, run the following command:

```shell
webpack
```

You will get `./samples/dist/main.js`, It is a Vue.js component.

Then open `./samples/draw.html`, you will see a graph rendered by webgl.

## How to use

The loader(GLSL vue loader) will create a vue component with a template which will contain a canvas element. All uniforms used in the shader code will be compile into vue component's property.

To use the loader, you can follow the steps below:

1. Add rule to your webpack.config.js, for example test .frag extension (see `./samples/webpack.config.js`)
2. Create a fragment shader with ".frag" extension.(see `./samples/draw.frag`)
3. require/import this .frag file in your .js file(see `./main.js`) as its a vue component.
4. (optional) Create a vertex shader with the same name as .frag file with extension ".vert", it will be automitically loaded into the vue component.(see `./samples/draw.vert`) The default vertext shader will draw in the full canvas.

## Properties

The created vue component will hold the flowing properties:

* width: the width of the canvas.
* height: the height of the canvas.
* indicesCount: default 5, indicesCount needed by webglcontext.drawArrays, dont modify if you are using default vertext shader.
* indicesStart: default 0, indicesStart needed by webglcontext.drawArrays.

Besides, if you declared uniforms in shader code, a property with same name will be added to this vue component. For example:

```
uniform float iTime;
//other shader code ......
```

The generated vue component will hold a property "iTime". You can use it like:
```
<myComponent v-bind:iTime={3.5}></myComponent>
```

