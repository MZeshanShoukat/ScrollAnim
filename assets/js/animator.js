let scroll_height = 0,
    current_ratio = 0;

let putState = (state) => {
  for(let item of state){
    let el = document.getElementById(item.id);
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    el.style.width = `${item.width}%`;
    el.style.transform = 'rotate(' + item.rotate + 'deg)';
  }
};

$(document).ready(function(){
  putState(origin_state);
  scroll_height = document.body.scrollHeight - window.innerHeight;

  $(document).scroll(function(){
    current_ratio = window.scrollY / scroll_height;
    console.log(scroll_height, window.scrollY, current_ratio);

    let current_state = JSON.parse(JSON.stringify(start_state));
    for(let i in start_state){
      ['x', 'y', 'width', 'rotate'].forEach(item => {
        current_state[i][item] =
          start_state[i][item] + 
          (origin_state[i][item] - start_state[i][item]) *
          current_ratio;
      });
    }
    // putState(current_state);
  });
});