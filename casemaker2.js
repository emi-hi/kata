const makeCase = function(input, casetype) {
  const space_replace = function(phrase, char) {
    var message = "";
    for (var a = 0; a < phrase.length; a++){
      if (phrase[a] == " "){
        message += char
      }
      else if (phrase[a] != " "){
        message += phrase[a];
      }
    }
    return message
  }
  const firstcase = function(input, casetype){
    if (casetype == "camel" || casetype == "pascal" ||casetype == "title"){
      if (input[i] == " "){
        capitalizeFlag = "true";
        firstcase_message += input[i];
      }
      else if (input[i] != " "){
        if (capitalizeFlag == "false"){
          firstcase_message += input[i];
          }
        else {
          firstcase_message += input[i].toUpperCase();
          capitalizeFlag = "false";
        }
      }
    }
    if (casetype == "camel"){
      firstcase_message = space_replace(firstcase_message, "");
      //CAMEL - remove spaces and make first character after space a capitalize
    }
    if (casetype == "pascal"){
    //PASCAL - capitalize first char, remove spaces and capitalize after space
      firstcase_message = space_replace(firstcase_message, "");
    }
    if (casetype == "snake"){  //SNAKE - convert spaces to underscore
      firstcase_message = space_replace(input, "_");
    }
    if (casetype == "kebab"){  //KEBAB - convert spaces to dash
      firstcase_message = space_replace(input, "-");
    }
    return firstcase_message;
  }
  const secondcase = function(input, casetype){
    if (casetype == "vowel"){
      //VOWEL - every vowel UpperCase
        if (input[i] == "a" ||input[i] == "e" ||input[i] == "i"
        ||input[i] == "o" ||input[i] == "u"){
          secondcase_message += input[i].toUpperCase();
        }
        else {
          secondcase_message += input[i];
        }
      }
    if (casetype == "consonant"){
      //CONSONANT - every consonant UpperCase
      if (input[i] != "a" && input[i] != "e" && input[i] != "i"
      && input[i] != "o" && input[i] != "u"){
        secondcase_message += input[i].toUpperCase();
      }
      else {
        secondcase_message += input[i];
      }
    }
    return secondcase_message
    }
  const thirdcase = function(input, casetype){
    if (casetype == "upper"){  //UPPER - convert to Upper
      thirdcase_message += input[i].toUpperCase();
    }
    if (casetype == "lower"){  //LOWER - convert to Lower
      thirdcase_message += input[u].toLowerCase();
    }
  return thirdcase_message;
  }
  var outputMessage = "";
  var firstcase_message = "";
  var secondcase_message = "";
  var thirdcase_message = "";
  if (casetype == "pascal" || casetype == "title"){
    var capitalizeFlag = "true";
  }
  else {
    var capitalizeFlag = "false";
  }
  var caselist = [];
  var isarray = Array.isArray(casetype);
  if (isarray == true){
    for (var a = 0; a < casetype.length; a++){
      if (casetype[a] == "camel" || casetype[a] == "pascal" || casetype[a] ==
       "title" || casetype[a] == "snake"|| casetype[a] == "kebab" ){
        caselist.unshift(casetype[a]);
      }
      else {
        caselist.push(casetype[a]);
      }
    }
  }
  else {
    caselist.push(casetype);
  }
  for (var x = 0; x < caselist.length; x++){
    for (var i = 0; i < input.length; i++){

      if (caselist[x] == "camel" || caselist[x] == "pascal" || caselist[x] ==
       "title" || caselist[x] == "snake"|| caselist[x] == "kebab" ){
        outputMessage = firstcase(input, caselist[x]);
      }

      if (caselist[x] == "vowel" || caselist[x] == "consonant"){
        if (firstcase_message.length > 0){
          outputMessage = secondcase(firstcase_message, caselist[x]);
        }
        else {
          outputMessage = secondcase(input, caselist[x]);
        }
      }
      else if (caselist[x] == "upper" || caselist[x] == "lower"){
        if (firstcase_message.length > 0){
          outputMessage = thirdcase(firstcase_message, caselist[x]);
        }
        else {
          outputMessage = thirdcase(input, caselist[x]);
        }
      }
    }
  }

  console.log(outputMessage);
  return outputMessage;
}

makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);
