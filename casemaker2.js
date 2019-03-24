
const makeCase = function(input, casetype) {
  const space_replace = function(phrase, char) {
    var message = '';
    for (var a = 0; a < phrase.length; a++){
      if (phrase[a] == ' '){
        message += char
      }
      else if (phrase[a] != ' '){
        message += phrase[a];
      }
    }
    return message
  }
  var outputMessage = '';
  if (casetype == 'pascal' || casetype == 'title'){
    var capitalizeFlag = 'true';
  }
  else {
    var capitalizeFlag = 'false';
  }
  //for each letter in input string
  for (var i = 0; i < input.length; i++){
    if (casetype == 'camel' || casetype == 'pascal'|| casetype == 'title'){
    //CAMEL - remove spaces and make first character after space a capitalize
    //PASCAL - capitalize first char, remove spaces and capitalize first char after space
    //TITLE - first char after space UpperCase
      if (input[i] == ' '){
         capitalizeFlag = 'true';
         outputMessage += input[i];
      }
      else if (input[i] != ' '){
        if (capitalizeFlag == 'false'){
        outputMessage += input[i];
        }
        else {
          outputMessage += input[i].toUpperCase();
        capitalizeFlag = 'false';
        }
      }
    }
  }
  if (casetype == 'camel'){
    outputMessage = space_replace(outputMessage, '');
  }
  if (casetype == 'pascal'){
    outputMessage = space_replace(outputMessage, '');
  }
  if (casetype == 'snake'){  //SNAKE - convert spaces to underscore
    outputMessage = space_replace(input, '_');
  }
  if (casetype == 'kebab'){  //KEBAB - convert spaces to dash
    outputMessage = space_replace(input, '-');
  }
  if (casetype == 'vowel'){  //VOWEL - every vowel UpperCase
    for (var a = 0; a < input.length; a++){
      if (input[a] == 'a' ||input[a] == 'e' ||input[a] == 'i' ||input[a] == 'o' ||input[a] == 'u'){
        outputMessage += input[a].toUpperCase();
      }
      else {
        outputMessage += input[a];
      }
    }
  }
  if (casetype == 'consonant'){  //CONSONANT - every consonant UpperCase
    for (var a = 0; a < input.length; a++){
      if (input[a] != 'a' && input[a] != 'e' && input[a] != 'i' && input[a] != 'o' && input[a] != 'u'){
        outputMessage += input[a].toUpperCase();
      }
      else {
        outputMessage += input[a];
      }
    }
  }
  if (casetype == 'upper'){  //UPPER - convert to Upper
    for (var u = 0; u < input.length; u++){
      outputMessage += input[u].toUpperCase()
    }
  }
  if (casetype == 'lower'){  //LOWER - convert to Lower
    for (var u = 0; u < input.length; u++){
      outputMessage += input[u].toLowerCase()
    }
  }
  console.log(outputMessage)
  return outputMessage
}

makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);
