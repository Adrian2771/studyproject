/* Personal repository for educational purposes: functionality */
(function(){
	var listButtonCollection = document.querySelectorAll(".nav-list > li");
	//console.log(listButtonCollection.length);
	var flagListBtn = false;
	
	document.querySelector(".menu-button").addEventListener('click', TogglePageMenu);
	
	function TogglePageMenu(){
		if(flagListBtn === false){
			flagListBtn = true;
			document.querySelector(".nav-list").style.display = "block";
			for(var i = 0; i < listButtonCollection.length; i++){
				listButtonCollection[i].style.display = "block";
			}
		}
		else{
			flagListBtn = false;
			for(var i = 0; i < listButtonCollection.length; i++){
				listButtonCollection[i].style.display = "none";
			}
			document.querySelector(".nav-list").style.display = "none";
		}
	}
	
	
	
	
})();