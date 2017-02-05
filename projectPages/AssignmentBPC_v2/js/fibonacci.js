/* Fibonacci sequence code */

(function(){

function Fibo(x, y){
	if(isNaN(x)) return "Invalid non-numeric input. Try again.";
	x = Number(x);
	if(!(Number.isInteger(x)) || x < 0) return "The input must be integer and positive. Try again.";
	if(y !== "ver")
	{
		if(x === 0) return "Indexing in the Fibonacci sequence starts with 1. Of course, we know that 0 is <b>the first</b> Fibonacci number. Try again.";
		if(x === 1 || x === 2) return x - 1;
		if(y === "iter")
		{
			var a = 0;
			var b = 1;
			count = 3;
			var rez = "";
			var t1 = performance.now();
			while(count <= x)
			{
				rez = b + a;
				a = b;
				b = rez;
				++count;
			}
			var t2 = performance.now();
			return "The Fibonacci number " + x + " is <b style = 'font-size:120%;'>" + rez + "</b><br />Iterative execution time: <b style = 'color:red;'>" + (t2 - t1).toFixed(6) + " milliseconds</b>.<br />";	
		}
		else if(y === "recur") 
		{
			function FiboRec(z)
			{
				if(z == 1 || z == 2) return (z - 1);
				return FiboRec(z - 1) + FiboRec(z - 2);
			}
			var t3 = performance.now();
			var rez = "";
			rez = FiboRec(x);
			var t4 = performance.now();
			return "The Fibonacci number " + x + " is <b style = 'font-size:120%;'>" + rez + "</b><br />Recursive execution time: <b style = 'color:red;'>" + (t4 - t3).toFixed(6) + " milliseconds</b>.<br />";
		}
		else if(y === "bin")
		{
			 var t5 = performance.now();
			 var phi = (1 + Math.sqrt(5))/2;
			 var first = Math.pow(phi, x - 1);
			 var second = Math.pow(- phi, -x + 1);
			 var inter = Math.ceil((first - second)/Math.sqrt(5));
			 var t6 = performance.now();
			 return "The Fibonacci number " + x + " is <b style = 'font-size:120%;'>" + inter + "</b><br />Binet execution time: <b style = 'color:red;'>" + (t6 - t5).toFixed(6) + " milliseconds</b>.<br />";
		}
	}

	else
	{
		var a = 5*x*x + 4;
		var b = 5*x*x - 4;
		var rad_a = parseInt(Math.sqrt(a));
		var rad_b = parseInt(Math.sqrt(b));
		var inter = (rad_a*rad_a == a || rad_b*rad_b == b)? true : false;
		if(inter) return "The number " + x + " <b style = 'color:blue;'>belongs</b> to the Fibonacci sequence.";
		else return "The number " + x + " <b style = 'color:red;'>does not belong</b> to the Fibonacci sequence.";
	}
}

document.querySelector("#fiboButton").addEventListener("click", function(){
	document.getElementById('displayFibo').innerHTML = Fibo(document.fibForm.valueToPass.value, document.fibForm.task.value);
});

})();

