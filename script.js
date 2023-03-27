(function () {

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
    
    })();