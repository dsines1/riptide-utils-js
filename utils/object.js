/**
 * Created with JetBrains WebStorm.
 * User: jhorlin.dearmas
 * Date: 7/17/13
 * Time: 1:28 PM
 * To change this template use File | Settings | File Templates.
 */

(function(object){
    "use strict";
    if(!('create' in object)){
        object.create = (function(){
            function F(){}
            return function(o){
                if (arguments.length != 1) {
                    throw new Error('Object.create implementation only accepts one parameter.');
                }
                F.prototype = o
                return new F()
            }
        })()
    }
}(Object));
