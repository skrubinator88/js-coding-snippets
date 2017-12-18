

  //For providing index of specified character or number
  String.prototype.myIndexOf = function(a) {

    if(typeof(a) == 'string'){
      var x = 0;
      while(x <= this.length){
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





//test functions
function firstName() {
  var text = document.getElementById('text-box');

  first = function(name) {
    var firstname = name.mySubString(0, " ");
    return (firstname);
  }

  console.log('First Name: ' + first(text.value));
  alert('Here is your first name: ' + first(text.value));
}

function lastName() {
  var text = document.getElementById('text-box');

  last = function(name) {
    var lastname = name.mySubString(" ", name.length);
    return (lastname);
  }

  console.log('Last Name: ' + last(text.value));
  alert('Here is your last name: ' + last(text.value));
}
