// This is in hello.js
export default hello = function(name) {
  console.log(`Hello, ${name}!`);
}

// Add your code here...
// export default hello;
// export { hello };


// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
    ////////////////////////////////////
    // module "my-module.js"

    // function cube(x) {
    //   return x * x * x;
    // }
    // const foo = Math.PI + Math.SQRT2;
    // var graph = {
    //     options:{
    //         color:'white',
    //         thickness:'2px'
    //     },
    //     draw: function(){
    //         console.log('From graph draw function');
    //     }
    // }
    // export { cube, foo, graph };

    ///////////////////////////////////
    // in another script, we could have

    // import { cube, foo, graph } from 'my-module';
    // graph.options = {
    //     color:'blue',
    //     thickness:'3px'
    // };
    // graph.draw();
    // console.log(cube(3)); // 27
    // console.log(foo);    // 4.555806215962888
