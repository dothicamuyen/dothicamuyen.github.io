//looks best full screen: https://codepen.io/sdras/full/jEjRwo

var $sh = $("#shadow"),
    $line = $(".line"),
		$model = $(".model"),
    $ltP = $("#lt-paths"),
    $main = $("#main"),
    $dotsA = $("#dots"),
		$dots = $("#dots path"),
    $stP = $("#strong-paths");

TweenMax.set([$dots, $ltP, $stP, $main, $dotsA, $sh, $line], { visibility:"visible" });

TweenMax.set($dots, { opacity:0 });

TweenMax.set([$line, $ltP, $stP], {
  drawSVG:'0% -5%'
});

// the first scene
function sceneOne() {
  var tl = new TimelineMax();
  
  tl.add("start");
  tl.to($line, 3.6, {drawSVG:'102% 100%', repeat:2, opacity:0.6, stroke:"#333333", ease:Sine.easeOut}, "start")
	.staggerFromTo($dots, 1.5, {opacity:0, transformOrigin:"50% 50%", scale:0}, {opacity:0.6, scale:1.2, transformOrigin:"50% 50%", ease:Elastic.easeOut}, 0.05,  "start")
  .staggerTo($dots, 1, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Elastic.easeOut}, 0.05, "start+=2.5")
   .fromTo($main, 4, {opacity:0, transformOrigin:"50% 50%", scale:0.5}, {opacity:0.4, transformOrigin:"50% 50%", scale:0.9, ease:Back.easeOut}, "start+=2")
  .staggerFromTo($("#main polygon"), 0.85, {transformOrigin:"50% 50%", opacity:0, scale:0, rotation:45}, {transformOrigin:"50% 50%", opacity:1, scale:1, rotation:0, ease:Back.easeOut}, 0.02, "start+=2")
  .fromTo($ltP, 4, {opacity:0}, {opacity:0.4, ease:Sine.easeOut}, "start+=2")
  .to($("html, body"), 4, {backgroundColor:"#63626b"}, "start+=3.5")
  .fromTo($ltP, 100, {drawSVG:"0 0"}, {drawSVG:true, ease:Sine.easeOut}, "start+=2")
  .fromTo($stP, 5, {drawSVG:"0 0"}, {drawSVG:true, ease:Sine.easeOut}, "start+=1")
  .fromTo($sh, 3, {opacity:0, transformOrigin:"50% 50%", scale:0}, {opacity:0.8, transformOrigin:"50% 50%", scale:1, ease:Back.easeOut}, "start+=2")
	.to($main, 6, {rotation:360}, {rotation:180, transformOrigin:"50% 50%", ease:Elastic.easeIn}, "start+=2")
  .to($main, 1, {opacity:0.6, ease:Sine.easeIn}, "start+=6")
  .to($main, 1, {opacity:0.9, ease:Sine.easeOut}, "start+=7")
  .to($main, 1.5, {opacity:0.6, ease:Sine.easeOut}, "start+=8")
  .to($main, 1, {opacity:0.9, ease:Sine.easeOut}, "start+=9.5")
  .staggerFromTo($dots, 0.75, {opacity:1, scale:1, transformOrigin:"50% 50%"}, {opacity:0.7, scale:0.7, transformOrigin:"50% 50%", ease:Elastic.easeIn}, 0.05,  "start+=6")
  .staggerTo($dots, 0.75, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Elastic.easeOut}, 0.05, "start+=7");
  
  //tl.timeScale(0.1);

  return tl;
}

var master = new TimelineMax();
master.add(sceneOne(), "scene1");

//master.seek("pulse");