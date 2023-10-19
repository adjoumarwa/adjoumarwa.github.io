var text= new Array();
var  text1=["Free Shipping +Free Cup On Orders $50+","NEW! Yuzu Matcha Limited Edition for Summertime"];
text.push("Free Shipping +Free Cup On Orders $50+");
text.push("NEW! Yuzu Matcha Limited Edition for Summertime");

var count = 0 ;
function changeText() {
    $('.textchange').html(text[count]);
   
    if(count < text.length-1){
        count++;
    }
    else{
        count = 0;
    }
    setTimeout(changeText,3000);
}

changeText();

let imge = document.querySelector('.imge');
function imag(x) {
    imge.src = x;
}



function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById('tab1Content').style.display="none";
    document.getElementById('tab2Content').style.display="none";
    document.getElementById('tab3Content').style.display="none";
    document.getElementById('tab4Content').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('tab' + tabIndex + 'Content').style.display="block";  
  }