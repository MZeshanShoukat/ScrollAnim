let putState = (state) => {
  for(let item of state){
    let el = document.getElementById(item.id);
    el.style.left = item.x;
    el.style.top = item.y;
    el.style.width = item.width;
    el.style.transform = 'rotate(' + item.rotate + ')';
  }
};


$(document).ready(function(){
  putState(origin_state);

  $(document).scroll(function(){
    // var x = $(document).scrollTop();
    // $('#c1p1').css("transform", `translate(${(x/52) - 20}px, ${-x/30 - 50}px) rotate(${-x/500}deg)`);
    // $('#c1p2').css("transform", `translate(${(x)/50 + 100}px, ${((-x)/40) - 120}px) rotate(${x/x - 12}deg)`);
    // $('#c1p3').css("transform", `translate(${(x)/50 + 25}px, ${((-x)/38) - 50}px) rotate(15deg)`);
    // $('#c1p4').css("transform", `translate(${(x)/40 + 80}px, ${((-x)/43) + 30}px) rotate(${x/500}deg)`);
    // $('#c1p5').css("transform", `translate(${(x)/28 - 50}px, ${((-x)/33) - 30}px) rotate(${-x/100}deg)`);
  });
});