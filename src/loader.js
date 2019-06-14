var fs = require('fs');

module.exports = function (fragmentShaderSource, map) {
    var t = require('./componentTemplate.js')
    console.log(this.resourcePath);

    var hasVertexShader = false;
    try {
        var vertexShaderSource = fs.readFileSync(this.resourcePath.replace(/.frag$/, ".vert2"), 'utf8');
        hasVertexShader = true;
    } catch(err) {
        var vertexShaderSource = `attribute vec4 a_Position;
void main(){
    gl_Position=a_Position;
}
`
        hasVertexShader = false;
    }

    var typeMapping = {
        bool: {
            jsType: 'Boolean',
            ctxMethod: 'uniform1fv'
        },
        bvec2: {
            jsType: 'Float32Array',
            ctxMethod: 'uniform2fv'
        },
        bvec3: {
            jsType: 'Float32Array',
            ctxMethod: 'uniform3fv'
        },
        bvec4: {
            jsType: 'Float32Array',
            ctxMethod: 'uniform4fv'
        },

        float: {
            jsType: 'Number',
            ctxMethod: 'uniform1f'
        },
        vec2: {
            jsType: 'Array',
            ctxMethod: 'uniform2fv'
        },
        vec3: {
            jsType: 'Array',
            ctxMethod: 'uniform3fv'
        },
        vec4: {
            jsType: 'Array',
            ctxMethod: 'uniform4fv'
        },

        int: {
            jsType: 'Number',
            ctxMethod: 'uniform1i'
        },
        ivec2: {
            jsType: 'Int32Array',
            ctxMethod: 'uniform2iv'
        },
        ivec3: {
            jsType: 'Int32Array',
            ctxMethod: 'uniform3iv'
        },
        ivec4: {
            jsType: 'Int32Array',
            ctxMethod: 'uniform4iv'
        },

        mat2: {
            jsType: 'Float32Array',
            ctxMethod: 'uniformMatrix2fv'
        },
        mat3: {
            jsType: 'Float32Array',
            ctxMethod: 'uniformMatrix3fv'
        },
        mat4: {
            jsType: 'Float32Array',
            ctxMethod: 'uniformMatrix4fv'
        },

        sampler2D: {
            //TODO
        },

        samplerCube: {
            //TODO
        }
    }
    var watcherTemplate = (name, jsType, ctxMethod) => `
    ${name}: function(newVal, oldVal) { // watch it
        if(!this.gl||!this.glProgram)
            return;
        let ${name} = this.gl.getUniformLocation(this.glProgram,'${name}');
        this.gl.${ctxMethod}(${name}, ${jsType}(newVal));
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, this.$props['indicesStart'], this.$props['indicesCount']);
    },
    `
    function* getUniforms(code){
        var uniformPattern = /uniform ([a-z1-9A-Z]+) ([_a-zA-Z0-9]+)/g;
        var uniform;
        while(uniform = uniformPattern.exec(code)) {
            yield uniform;
        }
    }

    var watchersCode = '';
    var propertiesCode = '';

    for(let uniform of getUniforms(vertexShaderSource)) {
        watchersCode += watcherTemplate(uniform[2], typeMapping[uniform[1]].jsType, typeMapping[uniform[1]].ctxMethod)
        propertiesCode += `    ${uniform[2]} : {},\n`;
    }

    for(let uniform of getUniforms(fragmentShaderSource)) {
        watchersCode += watcherTemplate(uniform[2], typeMapping[uniform[1]].jsType, typeMapping[uniform[1]].ctxMethod)
        propertiesCode += `    ${uniform[2]} : {},\n`;
    }

    this.callback(
        null,
        t(vertexShaderSource, fragmentShaderSource, watchersCode, propertiesCode),
        map
    )

}