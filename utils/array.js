/**
 * Created with JetBrains WebStorm.
 * User: jhorlin
 * Date: 5/5/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */
(function(proto){
    "use strict";

    proto.first = function(predicate){
      for(var i = 0; i < this.length; ++i){
          if(predicate(this[i])){
              return this[i];
          }
      }
      return undefined;
    };

    proto.remove = function (item){
        var index = this.indexOf(item);
        if(index === -1){
            return;
        }
        this.splice(index,1);
    };

    //pushes a value only if it is not in the array
    proto.pushUnique = function(item){
        if(! this.inArray(item)){
            this.push(item);
        }
    };

    // returns a new array of unique values
    proto.unique = function(){
      var uniqueArray = [];
        this.forEach(function(item){
           uniqueArray.pushUnique(item);
        });
       return uniqueArray;
    };

    proto.intersect = function(array){
        var intersection = [];
        array.forEach(function(item){
            if(this.inArray(item)){
                intersection.push(item);
            }
        });
        return intersection;
    };

    proto.inArray = function(item){
        return this.indexOf(item) !== -1;
    };

    proto.outer = function(array){
      var outer = [];
        this.forEach(function(item){
           if(! array.inArray(item)){
               outer.push(item);
           }
        });
        return outer;
    };

    //shuffles the items in an array;
    proto.shuffle = function(){
        var i = this.length, j, temp;
        if ( i == 0 ) return;
        while ( --i ) {
            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
    };

    proto.equals = function(array){
        if(this.length !== array.length){
            return false;
        }

        for(var i = this.length; i--;) {
            if(this[i] !== array[i]){
                return false;
            }
        }

        return true;
    };


    proto.equivalent = function(array){
        if(this.length != array.length){
            return false;
        }

        //we want to compare the string values to we will convert number 1 to string "1" since they are equivalent
        var compareArray = this.map(function(item){
            return item.toString();
        });


        for(var i = array.length; i--;){
            if(!compareArray.inArray(array[i].toString())){
                return false;
            }
        }

        /*for(var i = this.length; i--;) {
            if(this[i] != array[i]){
                return false;
            }
        }*/

        return true;
    };

    proto.clone = function(){
        return this.map(function(item){
            return typeof item === "object" ? Object.create(item) : item
        })
    }

    proto.clear = function(){
        this.splice(0, this.length);
    }


}(Array.prototype));