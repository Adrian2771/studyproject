/* JS functions for Bigfoot first and last page */
(function(){
	var arr = ['img/diver-res.jpg', 'img/clock-res.jpg', 'img/honeycomb-res.jpg', 'img/osa-res.jpg', 'img/workers-res.jpg', 'img/hammer-res.jpg', 'img/stones-res.jpg', 'img/computing-res.jpg', 'img/tree-trunks-res.jpg', 'img/computer-res.jpg', 'img/mobile-phone-res.jpg', 'img/border-collie-res.jpg'];

	var arrPgMore = ['Ever since the dawn of civilisation, humans have been fascinated with agencies, although back in the old days agencies had a different name. Recently, in the modern era, agencies have been intensely popularised due to the activities of various institutions such as <strong> NSA , CIA, KGB, FSB, GRU </strong> or <strong>BND</strong>. In Romania, a depopulated country located in southern Europe and suffering from widespread corruption, citizens have experienced in the past (and they are still experiencing today) a close and unilateral relation with local agencies such as <strong>SRI</strong> and <strong>SIE</strong> – not to mention the well known <strong>&quot;Securitate&quot;</strong>, that used to be the active during the Communist regime.', 'Agencies have agents, otherwise their names and statutes would not be justified. Among the agents whose names ring loud bells in the collective Romanian mentality, we can mention <strong>Agent Celsius</strong>, blamed for the low temperatures in people’s homes during the cold season. Another agent known to the rather mature generations is <strong>Agent Cooper</strong>, played by <strong>Kyle Maclachlan</strong> in a TV series produced back in the good old days, when TV channels had not yet taken up the habit of broadcasting only shows aimed at lowlifes, and nothing else. Today, Humanity&#39;s existence would be virtually unimaginable without agents and this is, in itself, a good enough reason to justify this idiotic text.', 'Photoshop is a well known  product launched by the Adobe Company – a product that is mentioned by many, but very few people know exactly what it does and even fewer know how to use it. This doesn&#39;t matter, however: there are plenty of good or bad things that remain fairly unknown to the wide public or they are misunderstood by the masses. I don&#39;t mean to say that Photoshop is either a good or a bad thing. In fact, I don&#39;t mean to say anything about Photoshop, but this word is present on my page, in one of the size 2 headings  and it&#39;s too late to change the layout and content now. ', 'Just like many other 2D image editing programmes, Photoshop relies on <strong> layers</strong>. Imagine an over-crowded graveyard. Because people will keep dying and they will have to be buried, the graveyard administrator decides to bury the corpses at a depth of 7 m instead of 2. This is a layer. The next burial candidate will be placed on the same spot, but only 5 m deep – 2 m above the first tenant. This is another layer. Funny, isn&#39;t it? That&#39;s how layers work, and not only in Photoshop.', '<strong>Java</strong> is a volcanic island in South-East Asia, home to the vast majority of the Indonesian population and the place where the country&#39;s capital, Jakarta, is located. <strong>Script</strong>  is a word of Latin origin, which means <strong>book</strong> and <strong>law</strong>. But, after the year 2000, this word came to have many other meanings. <a href=\"http://en.wikipedia.org/wiki/Brendan_Eich\" target=\"_blank\"> <strong>Brendan Eich</strong></a>, a programmer who used to work for <strong>Netscape</strong> a long time ago and later founded <strong>Mozilla Corporation</strong>,  created the first <strong>Javascript</strong> version in only 10 days, in the mid-90s (that&#39;s what the legend says). The reason for this hurry: Netscape was about to launch a new version of the browser bearing the same name and it wanted to incorporate in it a programming language that would piggyback on Java&#39;s success – Java being another programming language that was already popular at that time.  Are you dizzy yet? I haven&#39;t finished!', '<a href=\"http://en.wikipedia.org/wiki/Alistair_MacLean\" target=\"_blank\"><strong>Alistair MacLean</strong></a> was a Scottish writer who wrote a war book named <strong>South by Java Head</strong>. Excellent book, in my opinion. In a time when inmates write books in exchange for  prison sentence cuts and books are worth less than toilet paper, I decided to bury MacLean&#39;s book in a sterile, hermetically sealed container, along with other books, whether they are related or not to Java, script or Javscript . A present for the future generations. Or, a present for nobody if there are no future generations.', 'I have recently came into contact with an aggressive form of marketing, when a guy wearing a magenta T sticker knocked on my door, trying very hard to convince me to change my cable provider. Faced with my almost polite boredom, he became rude: he almost called me stupid when I told him how much I paid for my monthly bill with my current provider. His offer being, of course, at almost half that price, with similar quality, blah, blah, blah. After a certain age, I learned to control my nerves better, so I slammed the door in the guy&#39;s face, without turning it into collar around his neck.', 'It must be a secret Telekom strategy: they make you beat up their agents, so that they have grounds to sue you and ask for compensations. It is probably the only way they can get people to give them any money.'];

	var arrScr =[];

	var arrCss =[];

	document.getElementById('paradeOnOff').setAttribute("onclick", "$StartStop()");

	document.getElementById('more').setAttribute("onclick", "$FuncMore()");

	document.getElementById('less').setAttribute("onclick", "$FuncLess()");

	var counter = 1; // global, updated within function body

	var temp = ""; // global, set by BOM method setInterval

	var select1 = true; // global, updated within function body

	var select2 = true; // idem select1

	function StartStop(){
		if(select1){
			temp = setInterval(function(){Parade()}, 1000);
			select1 = false;
		}
		else{
			clearInterval(temp);
			select1 = true;
		}
	}

	function Parade(){
		for(var i = 0; i < 12; ++i)
		{
			var ident = "wim-" + (1 + i);
			document.getElementById(ident).src= arr[(counter + i)%12];
		}
		counter++;
	}

	function FuncMore()
	{
		for(var j = 0; j < 8; ++j)
		{
			var ident2 = 'pg-' + (1 + j);
			var temp2 = document.getElementById(ident2).innerHTML;
			document.getElementById(ident2).innerHTML = arrPgMore[j];
			arrPgMore[j] = temp2;
		}
	}

	function FuncLess(){
		var script_arr = document.scripts; // We get all the scripts of the current document as elements of an array of objects - script_arr
		var css_arr = document.getElementsByTagName("link"); // We get all the external css references as elements of an array of objects - css_arr
		var lscr = script_arr.length - 1; 
		
		/* By assigning the void string to the src attributes, we disable all the scripts, except the last one. We need this script to restore the document. The same method (assigning the '#' string) applies to the link elements with href attributes. */
		//console.log(lscr);
		
		var lcss = css_arr.length;
		//console.log(lcss);
		
		if(select2){
			for(var k = 0; k < lscr; ++k){
				// The arrScr is populated with src attributes of the script elements
				arrScr.push(script_arr[k].src);
				script_arr[k].src = "";
			}

			for(var n = 0; n < lcss; ++n)
			{	// The arrScr is populated with href attributes of the link elements
				arrCss.push(css_arr[n].href);
				css_arr[n].href="#";
			}
			select2 = false;
		}
		else{
			for(var k = lscr; k >= 0; --k)
			{
				script_arr[k].src = arrScr[k];
				arrScr.pop(); // The current last element in the array is removed
			}
			
			for(var n = lcss - 1; n >= 0; --n)
			{
				css_arr[n].href = arrCss[n];
				arrCss.pop(); // The current last element in the array is removed
			}	
			select2 = true;
		}
			
	}
	
	window.$FuncLess = FuncLess;
	window.$FuncMore = FuncMore;
	window.$StartStop = StartStop;
})();
