let rosary_counter = 0 ;
let old_rosary_count = 0;

rosary_counter = localStorage.getItem('old_rosary_count')

if (rosary_counter==0) 
    { 
    document.getElementById('rosary-btn').innerHTML=0;
    }
    else 
    {
        document.getElementById('rosary-btn').innerHTML= rosary_counter;  
    }
document.getElementById('rosary-btn').onclick = function()
{
rosary_counter++;
if (rosary_counter%33==0) {
    
    document.getElementById('33_click_changer').innerHTML='لا إله إلا الله';

    
}
document.getElementById('rosary-btn').innerHTML=rosary_counter;
localStorage.setItem('33_click_changer',rosary_counter)

localStorage.setItem('old_rosary_count',rosary_counter)

console.log(rosary_counter);
};

