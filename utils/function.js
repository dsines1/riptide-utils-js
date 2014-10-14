(function(proto){
    "use strict";
    if(!proto.curry){
        proto.curry = function(){
            if(arguments.length < 1){
                return this;//nothing to curry
            }
            //store off the original function and argument
            var func = this,
                args = Array.prototype.slice.call(arguments);
            return function(){
              return func.apply(this, args.concat(Array.prototype.slice.call(arguments)));
            };
        };
    }

    if(!proto.async){
         proto.async = function(){
            var func = this;
           return function(){
               setTimeout(func.apply(this, arguments),0);
           };
        };
    }

    if(!proto.inherit){
        proto.inherit = function(superFn){
            //create a new instance of the parents prototype and set it to the constructor
            this.prototype =  Object.create(superFn.prototype);
            //setup the supper call to pass in any arguments
            this.prototype['super'] = function(){
              superFn.apply(this, arguments);
            };
            // set the constructor of your new prototype to the original function so that instanceof will work
            this.prototype.constructor = this;
        };
    }

    if(!proto.invoke){
        proto.invoke = function(args){
            switch (args.length) {
                case  0: return this();
                case  1: return this(args[0]);
                case  2: return this(args[0], args[1]);
                case  3: return this(args[0], args[1], args[2]);
                case  4: return this(args[0], args[1], args[2], args[3]);
                case  5: return this(args[0], args[1], args[2], args[3], args[4]);
                case  6: return this(args[0], args[1], args[2], args[3], args[4], args[5]);
                case  7: return this(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                case  8: return this(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                case  9: return this(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
                case 10: return this(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
                default: return this.apply(this, args);
            }
        };
    }

}(Function.prototype));