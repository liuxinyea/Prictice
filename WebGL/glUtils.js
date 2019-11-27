class GLUtils {
    constructor() {
        //创建着色器程序
    }
}
GLUtils.prototype.createProgramFromScripts = function (gl, array) {
    var vertCode = document.getElementById(array[0]).textContent;
    var fragCode = document.getElementById(array[1]).textContent;
    //Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    //Attach vertex shader source code
    gl.shaderSource(vertShader, vertCode);
    //Compile the vertex shader
    gl.compileShader(vertShader);
    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    // Attach fragment shader source code
    gl.shaderSource(fragShader, fragCode);
    // Compile the fragment shader
    gl.compileShader(fragShader);
    // Create a shader program object to store combined shader program
    var shaderProgram = gl.createProgram();
    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader);
    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);
    // Link both programs
    gl.linkProgram(shaderProgram);
    return shaderProgram;
};
