const urlDecode = function(text) {
  var strings = text.split("&");
  var strings2 = []
  for (var i = 0; i < strings.length; i++){
    var dict = {}
    var key = strings[i].split("=")[0]
    var value = ""
    var value_temp = strings[i].split("=")[1]
    for (var a in value_temp){
      if (value_temp[a] == "%"){
        value +=" ";
      }
      else if (value_temp[a] == "2" || value_temp[a] == "0"){
      }
      else {
        value += value_temp[a];
      }
    }
    dict[key] = value
  }
  return dict
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
