function XO(str) {
      let stringCheck = 0;
  for (let i = 0; i < str.length; i++) {
    switch(str.charAt(i)) {
      case 'X':
      case 'x':
        stringCheck--
        break;
      case 'O':
      case 'o':
        stringCheck++
        break;
    }
  }
  return !stringCheck;
}