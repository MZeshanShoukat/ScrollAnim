// Variables to Use
let scroll_height = 0,
    current_ratio = 0;

// apply given cords & transformations to continents (images)
let putState = (state) => {
  for(let item of state){
    let el = document.getElementById(item.id);
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    el.style.width = `${item.width}%`;
    el.style.transform = 'rotate(' + item.rotate + 'deg)';
  }
};

function apply_globe_visibility(current_ratio){
  if(current_ratio<0.8){
    $("#cont-section").addClass("visible");
  } else {
    $("#cont-section").removeClass("visible");
  }
}

function apply_typo_visibility(current_ratio){
  // Text: "Imaging"
  if(current_ratio<0.5){
    $("#wrd2").removeClass("visible");
  } else {
    $("#wrd2").addClass("visible");
  }

  // Text: "no"
  if(current_ratio<0.75){
    $("#wrd3p1").removeClass("visible");
  } else {
    $("#wrd3p1").addClass("visible");
  }

  // Text: "boundries"
  if(current_ratio<0.9){
    $("#wrd3p2").removeClass("visible");
  } else {
    $("#wrd3p2").addClass("visible");
  }
}

$(document).ready(function(){
  // Put Start-State Initially
  putState(start_state);

  // Calculate and store scrollable-scroll-hieght
  scroll_height = document.body.scrollHeight - window.innerHeight;

  $(document).scroll(function(){
    // Current-Position to Ent ratio
    current_ratio = window.scrollY / scroll_height;

    // Change Ratio
    apply_globe_visibility(current_ratio);

    // Change Ratio
    current_ratio = current_ratio + 0.3;
    if(current_ratio>1){
      current_ratio = 1;
    }

    // Teypography Visibility
    apply_typo_visibility(current_ratio);

    // Calculate Current State
    let current_state = JSON.parse(JSON.stringify(start_state));
    for(let i in start_state){
      ['x', 'y', 'width', 'rotate'].forEach(item => {
        current_state[i][item] =
          start_state[i][item] + 
          (origin_state[i][item] - start_state[i][item]) *
          current_ratio;
      });
    }

    // Apply Current Cords to Images
    putState(current_state);
  });
});