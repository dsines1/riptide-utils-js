/**
 * Created with JetBrains WebStorm.
 * User: jhorlin
 * Date: 6/4/13
 * Time: 5:14 PM
 * To change this template use File | Settings | File Templates.
 */
(function($, elements){
    "use strict";
    elements.utils = {
        parsePath : function(filePath){
        var filename = filePath.split('/').pop(),
            path = filePath;
        if(/\.json/ig.test(filename)){
            path = path.replace(filename, '');
        }
        return path;
    },
        toLowerCaseKeys : function(obj){
            if(typeof obj === "object"){
                var newObj = {};
                for(var key in obj){
                    if(obj.hasOwnProperty(key)){
                        newObj[key.toLowerCase()] = obj[key];
                    }
                }

                return newObj;
            }
        }
    };
}(this.jQuery, ('elements' in this) ? this.elements : this.elements = {}));