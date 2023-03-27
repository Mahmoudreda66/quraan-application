let rosary_counter = 0 ;
let old_rosary_count = 0;
rosary_counter = localStorage.getItem(old_rosary_count)

document.getElementById('rosary-btn').innerHTML=rosary_counter;
 


document.getElementById('rosary-btn').onclick = function(){
    rosary_counter++;
    document.getElementById('rosary-btn').innerHTML=rosary_counter;
    localStorage.setItem('old_rosary_count',rosary_counter)

    console.log(rosary_counter);
  };
