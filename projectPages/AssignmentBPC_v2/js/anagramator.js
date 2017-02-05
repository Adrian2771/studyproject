/* Anagramator code */
(function(){
function Perm(ary){	
	var patt = /^\w{1,12}$/;
	if (null === ary.match(patt)) return "<p><del>Bad move, pal!</del><br />Mauvais mouvement, mon ami!*<br />* due to the Brexit</p>";
	var arr1 = ary.split(""); // The function works internally with finalar, an array of variable length. The ary argument is of string type.
	var finalr = [];
	len = arr1.length;
	
	// Luckily, Javascript allows us to define functions inside other functions :-)
	function Fun2(arr) {
		//first anagram: the word itself
		finalr.push(" " + arr.join(""));
		var temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
		//the second anagram results from the reciprocal change of positions corresponding to the first and the second letter
		finalr.push(" " + arr.join(""));
		// we restore the first and the second position and then right-shift all the letters in array with one position
		temp = arr[1];
		arr[1] = arr[0];
		arr[0] = temp;
	}

	// The followong function calls itself until the array length becomes equal to 2
	function RecursionFun(len) {
	if(len == 1) finalr.push(ary);
	if(len == 2) Fun2(arr1);
	if(len > 2)
		{
			for(var l = 0; l < len; ++l)
			{ 
				RecursionFun(len - 1);
				var temp2 = arr1[len - 1];
				for(var k = len - 1; k > 0; k--) arr1[k] = arr1[k - 1];
				arr1[0] = temp2;
			}
		}
	}	
	
	RecursionFun(len);
	if(finalr.length >= 720) return finalr.toString();
	return finalr.toString();
}

document.querySelector("#anagramator").addEventListener("click", function(){
	document.getElementById('anagram-collector').style.border='2px ridge gray';
	document.getElementById('anagram-collector').style.padding='.3em';
	document.getElementById('anagram-collector').style.margin='.3em';
	document.getElementById('anagram-collector').innerHTML=Perm(document.annForm.aname.value);	
});
	
})();
