function testFunction () {
  var text = document.getElementById('text-box');

  //For searching index of specified character
  String.prototype.myIndexOf = function(a) {

    if(typeof(a) == 'string'){
      var x = 0;
      while(x<this.length){
        if(this[x] == a){
          var index = x;
        }
        x++;
      }
    }else if(a <= this.length && a >= 0){
      var index = a.valueOf();
    }

    return index;
  }

//Finding a specified string within a string
  String.prototype.mySubString = function(firstChar, secondChar) {
      var substr = "";

      var first = this.myIndexOf(firstChar);
      var second = this.myIndexOf(secondChar);

      while(first < second) {
        substr += this[first];
        first++;
      }
      return substr;

  }

  //test function
  firstName = function(name) {
    var firstname = name.mySubString(0, " ");
    return (firstname);
  }

  console.log('First Name: ' + firstName(text.value));
  alert('Here is your first name: ' + firstName(text.value));

}
