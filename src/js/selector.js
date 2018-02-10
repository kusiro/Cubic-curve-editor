import anime from 'animejs';
import BezierEasing from 'bezier-easing';
import bezier from './bezier.js'


var playpauseAni = anime({
  targets: '.square_cir',
  left: ['0', '500'],
  round: 1,
  borderRadius: ['0em', '50%'],
});
bezier(playpauseAni)




//-------------control---------------
document.querySelector('.play').onclick = playpauseAni.play;
document.querySelector('.replay').onclick = playpauseAni.restart;
document.querySelector('.pause').onclick = playpauseAni.pause;
var seekPorgressEl = document.querySelector('.progress');
seekPorgressEl.addEventListener('input', function(){
    seekPorgressEl.seek(playpauseAni.duration * (seekPorgressEl.value/100));
});
['input', 'change'].forEach(function(evt){
    seekPorgressEl.addEventListener(evt, function(){
        playpauseAni.seek(playpauseAni.duration * (seekPorgressEl.value/100))
    });
});
//-----------------------------------------
