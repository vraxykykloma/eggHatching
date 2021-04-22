var collection = {
  chaotic : ["forest" , "abyss" , "fortress" , "shadow"],
  entangled : ["warrior" , "mage" , "ranger" , "assassin" , "priest"],
  sober : ["trans" , "light" , "dark"],
  acquired : [],
  mats : [0,0,0,0],
  dust : 0 // in thousands
}
var egg = 0; //move to html probably, 1 = chaotic, 2 = entangled, 3 = sober
var pityT = 0; // pity timer

function hatch(egg){
  pityT++;
  var pull = Math.random();
  if (pull < 0.06 || pityT == 15){
    // egg/mats pull
    switch egg{
      case 1://chaotic
        if (collection.chaotic.length > 0){
          var ssRng = Math.floor(Math.random() * collection.chaotic.length);  // determines what kind of starspawn we got
          collection.acquired.push( collection.chaotic.splice(ssRng-1 , 1) ); // removes the ss from the missing array and puts it in the aquired one
        }
        break;
        default;
    }
  }
  else if(pull < 0.2){
    // mats pull
    var matRng = Math.floor(Math.random() * 4);  // determines what kind of mat we got
    collection.mats[matRng] += 10 * Math.pow(2 , matRng); // adds 10 for type1, 20 for type2, 40 for type3, 80 for type4
  }
  else {
    // dust pull
    collection.dust += 7;
    
  }
}
