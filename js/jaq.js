$(function(){
  var sound_files = "20Kftview get-practical parts-of-speech actually-do google revenue alotofswagger greatest-internet scientific-fact amazing-car hate shit-happen bank-account imaustralian think-abt-that big_sign internetandtech total-idiot cheapest-shoes listen-adapt-change u_and_u_and_u crazy-cool-store m-v-product weirdest-thing customs muhammand-ali what-is-that cyberfashion myhood what_do_we_do different-things now_today who-r-u doitnow outtatheway youth-of-world dreamscancometrue own_brand".split(" ")
  var sounds = {};
  var current = sound_files[0];

   var buttons = $("buttons");
   sound_files.forEach(function(filename){
	var audio = document.createElement("audio")
	audio.src = 'mp3/' + filename + '.mp3'
	sounds[filename] = audio
     $("buttons").append($("<button></button>", {
       "data": {
         "sound": filename
       }
     }).html(filename));
   })
   $("img,button").click(function(){
     var ss = $(this).data("sound");
	 play(ss)
 })
function play(ss){
     sounds[current].pause();
     sounds[ss].currentTime = 0
     sounds[ss].play();
     current = ss;
   };
  $(window).keydown(function(e){
	var filename = sound_files[e.keyCode % sound_files.length]
	play(filenamea)
})
  $("buttons").fadeIn(500);
  $("footer").fadeIn(500);
  $("header").fadeIn(500);
});