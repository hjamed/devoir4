# devoir4
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Module 4 </title>
  <script src="SpeakHello.js"></script>
  <script src="SpeakGoodBye.js"></script>
  <script src="script.js"></script>
  <script>(function () {

    var names = ["jamal", "ahmed", "souhail", "lina", "hiba", "soukaina", "jihane", "saad", "salah", "alaa"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();</script>
    
    <script>(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);</script>

    <script>function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);</script>
</head>
<body>
  <h1 style="color: blue; text-align: center;">devoir 4</h1>
  <p>open console to see my code </p>
</body>
</html>
