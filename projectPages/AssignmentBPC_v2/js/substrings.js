/* dealing with substrings */
// IIFE

(function(){

document.querySelector('#action').onclick = Action;
document.querySelector('#predefined').onclick = Predefined;
document.querySelector('#substrings').onclick = Substrings;

function Action(){
	let x = document.querySelector("#string-input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction(x);
}

function Predefined(){
	let arrOfStr = ['zakxfmxbangxyl','rbbyoiwouzkpgsrwflvatbl', 'qvrcdfxnoucltkt', 'jykbeweupppsgdegmcodwwlm', 'yornmuwooloygpkhuah', 'ledpzugfc', 'ndxihzqz', 'abcdefghijklmnopqrstuvwxyz', 'oarlcrmlstxocjckyvgltna', 'ggikmvabqpvhsb', 'nxnahdzzhgi', 'zyxwvutsrqponmlkjihgfedcba', 'ngwwpslsngufq', 'mivvqmznckwbnpwyjerazmmv', 'mnjucvnygceaunxvq', 'quswmyufhpoqofqyxqkozg', 'jcmdfilstlsm', 'mbuczpuedlic', 'jwjxlioronxhgqc', 'grbdryzhfw'];
	let temp1 = '';
	for(let s = 0; s < arrOfStr.length; s++){
		temp1 += (myFunction(arrOfStr[s]) + "<br>");
	}
	console.log(arrOfStr.length);
	document.querySelector("#result").innerHTML = temp1;
}

function Substrings(){
	let x = document.querySelector("#string-input").value;
	if(x.length === 0){
		document.querySelector("#result").innerHTML = "A non-empty string should be provided!";
	}
	else document.querySelector("#result").innerHTML = myFunction1(x);
}

function myFunction(s){

	let temp = '';

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

	let temp = "These are the substrings of the string <b>" + s + "</b>:<br>"

	let j = 0;
	let arr = [];
	while(j <= s.length){
		let i = j + 1;
		while(i <= s.length){
			//console.log(s.substring(j, i));
			let curr_ss = s.substring(j, i);
			let not_there = true;

			arr.forEach(function(el){
				if(el === curr_ss){
					not_there = false;
				}
			});

			if(not_there){
				arr.push(curr_ss);
			}
			i++;
		}
		j++;
	}

	arr.sort(function(a, b){
		if (a.length < b.length){
			return -1;
		} else if (a.length > b.length){
			return 1;
		} else {
			return 0;
		}
	});

	for(let k = 0; k < arr.length; k++){
		temp += arr[k] + '<br>';
	}
	return temp;
}

})();
