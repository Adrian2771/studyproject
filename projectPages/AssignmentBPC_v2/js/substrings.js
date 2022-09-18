/* dealing with substrings */
// IIFE

(function(){

document.querySelector('#action').onclick = Action;
document.querySelector('#predefined').onclick = Predefined;
document.querySelector('#substrings').onclick = Substrings;

function Action(){
	var x = document.querySelector("#string-input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction(x);
}

function Predefined(){
	var arrOfStr = ['zakxfmxbangxyl','rbbyoiwouzkpgsrwflvatbl', 'qvrcdfxnoucltkt', 'jykbeweupppsgdegmcodwwlm', 'yornmuwooloygpkhuah', 'ledpzugfc', 'ndxihzqz', 'abcdefghijklmnopqrstuvwxyz', 'oarlcrmlstxocjckyvgltna', 'ggikmvabqpvhsb', 'nxnahdzzhgi', 'zyxwvutsrqponmlkjihgfedcba', 'ngwwpslsngufq', 'mivvqmznckwbnpwyjerazmmv', 'mnjucvnygceaunxvq', 'quswmyufhpoqofqyxqkozg', 'jcmdfilstlsm', 'mbuczpuedlic', 'jwjxlioronxhgqc', 'grbdryzhfw'];
	var temp1 = '';
	for(var s = 0; s < arrOfStr.length; s++){
		temp1 += (myFunction(arrOfStr[s]) + "<br>");
	}
	console.log(arrOfStr.length);
	document.querySelector("#result").innerHTML = temp1;
}

function Substrings(){
	var x = document.querySelector("#string-input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction1(x);
}

function myFunction(s){

	var temp = '';

	let len = s.length;

  for(let i = 0; i < len; i++){
    for(let j = i + 1; j <= len; j++){
      let curr_ss = s.substring(i, j);
      let longest = true;

      // Check if the current substring is alphabetically ordered
      for(let k = 0; k < curr_ss.length - 1; k++){
        if(curr_ss.charCodeAt(k) >= curr_ss.charCodeAt(k + 1)){
          longest = false;
          break;
  		 }
     }
		 // If curr_ss is alphabetically ordered and longer than the string stored in the temp variable,
		 // we'll store curr_ss in temp
     if(longest){
       if(temp.length < curr_ss.length){
         temp = curr_ss;
       }
     }
   }
 }
 return "String: <b>" + s + "</b>. The longest substring in alphabetical order is: <b>" + temp + "</b>";
}

function myFunction1(s){

	var temp = "These are the substrings of the string <b>" + s + "</b>:<br>"

	var j = 0;
	while(j <= s.length){
		var i = j + 1;
		while(i <= s.length){
			//console.log(s.substring(j, i));
			temp += (s.substring(j, i) + "<br>");
			i++;
		}
		j++;
	}
	return temp;
}

})();
