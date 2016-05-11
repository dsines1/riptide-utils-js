/**
 * Created with JetBrains WebStorm.
 * User: jhorlin
 * Date: 5/5/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */
(function(proto) {
  "use strict";

  Object.defineProperty(proto, 'first', {
    value: function(predicate) {
      for (var i = 0; i < this.length; ++i) {
        if (predicate(this[i])) {
          return this[i];
        }
      }
      return undefined;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(proto, 'remove', {
    value: function(item) {
      var index = this.indexOf(item);
      if (index === -1) {
        return;
      }
      this.splice(index, 1);
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  //pushes a value only if it is not in the array
  Object.defineProperty(proto, 'pushUnique', {
    value: function(item) {
      if (!this.inArray(item)) {
        this.push(item);
      }
    },
    writable: false,
    enumerable: false,
    configurable: false
  })

  // returns a new array of unique values
  Object.defineProperty(proto, 'unique', {
    value: function() {
      var uniqueArray = [];
      this.forEach(function(item) {
        uniqueArray.pushUnique(item);
      });
      return uniqueArray;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.intersect(proto, 'intersect', {
    value: function(array) {
      var intersection = [];
      array.forEach(function(item) {
        if (this.inArray(item)) {
          intersection.push(item);
        }
      });
      return intersection;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(proto, 'inArray', {
    value: function(item) {
      return this.indexOf(item) !== -1;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(proto, 'outer', {
    value: function(array) {
      var outer = [];
      this.forEach(function(item) {
        if (!array.inArray(item)) {
          outer.push(item);
        }
      });
      return outer;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  //shuffles the items in an array;
  Object.defineProperty(proto, 'shuffle', {
    value: function() {
      var i = this.length,
        j, temp;
      if (i == 0) return;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(proto, 'equals', {
    value: function(array) {
      if (this.length !== array.length) {
        return false;
      }

      for (var i = this.length; i--;) {
        if (this[i] !== array[i]) {
          return false;
        }
      }

      return true;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });


  Object.defineProperty(proto, 'equivalent', {
    value: function(array) {
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

      /*for(var i = this.length; i--;) {
          if(this[i] != array[i]){
              return false;
          }
      }*/

      return true;
    },
    writable: false,
    enumerable: false,
    configurable: false
  });


  Object.defineProperty(proto, 'clone', {
    value: function() {
      return this.map(function(item) {
        return typeof item === "object" ? Object.create(item) : item
      })
    },
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(proto, 'clear', {
    value: function() {
      this.splice(0, this.length);
    },
    writable: false,
    enumerable: false,
    configurable: false
  })


}(Array.prototype));
