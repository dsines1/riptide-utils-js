/**
 * Created with JetBrains WebStorm.
 * User: jhorlin
 * Date: 5/5/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */
(function(proto) {
  "use strict";

  function defineProp(name, val){
    return Object.defineProperty(proto, name, {
       value: val,
       writable: false,
       enumerable: false,
       configurable: false
     })
  };

  var firstFunc = function(predicate) {
    for (var i = 0; i < this.length; ++i) {
      if (predicate(this[i])) {
        return this[i];
      }
    }
    return undefined;
  };

  var removeFunc = function(item) {
    var index = this.indexOf(item);
    if (index === -1) {
      return;
    }
    this.splice(index, 1);
  };

  //pushes a value only if it is not in the array
  var pushUniqueFunc = function(item) {
    if (!this.inArray(item)) {
      this.push(item);
    }
  };

  // returns a new array of unique values
  var uniqueFunc = function() {
    var uniqueArray = [];
    this.forEach(function(item) {
      uniqueArray.pushUnique(item);
    });
    return uniqueArray;
  };

  var intersectFunc = function(array) {
    var intersection = [];
    array.forEach(function(item) {
      if (this.inArray(item)) {
        intersection.push(item);
      }
    });
    return intersection;
  };

  var inArrayFunc = function(item) {
    return this.indexOf(item) !== -1;
  };

  var outerFunc = function(array) {
    var outer = [];
    this.forEach(function(item) {
      if (!array.inArray(item)) {
        outer.push(item);
      }
    });
    return outer;
  };

  var shuffleFunc = function() {
    var i = this.length,
      j, temp;
    if (i == 0) return;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };

  var equalsFunc = function(array) {
    if (this.length !== array.length) {
      return false;
    }

    for (var i = this.length; i--;) {
      if (this[i] !== array[i]) {
        return false;
      }
    }

    return true;
  };

  var equivalentFunc = function(array) {
    if (this.length != array.length) {
      return false;
    }

    //we want to compare the string values to we will convert number 1 to string "1" since they are equivalent
    var compareArray = this.map(function(item) {
      return item.toString();
    });


    for (var i = array.length; i--;) {
      if (!compareArray.inArray(array[i].toString())) {
        return false;
      }
    }

    return true;
  };

  var cloneFunc = function() {
    return this.map(function(item) {
      return typeof item === "object" ? Object.create(item) : item
    })
  }

  var clearFunc = function() {
    this.splice(0, this.length);
  };

  defineProp('first', firstFunc);
  defineProp('remove', removeFunc);
  defineProp('pushUnique', pushUniqueFunc);
  defineProp('unique', uniqueFunc);
  defineProp('intersect', intersectFunc);
  defineProp('inArray', inArrayFunc);
  defineProp('outer', outerFunc);
  defineProp('shuffle', shuffleFunc);
  defineProp('equals', equalsFunc);
  defineProp('equivalent', equivalentFunc);
  defineProp('clone', cloneFunc);
  defineProp('clear', clearFunc);


}(Array.prototype));
