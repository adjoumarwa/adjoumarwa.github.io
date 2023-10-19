//object 
var person = {
    firstname :"lucille",
    lastname:"rick",
    age : 20,
    get fullName() {
        return this.firstname + " " +this.lastname;
    },
    set fname(p_name) {
        this.age = p_name;
    }
};
var text="";
var i;
for (i in person) {
    text += person[i]+"<br>";
};
//constructer
function person1(first,last ,age){
    this.frst =first;
    this.lst = last;
    this.age = age;
}
person.fname = 30;
var p1 = new person1("rick","luci",20);
//document.getElementById("x").innerHTML = p1.frst;
//document.getElementById("x").innerHTML = person.age;
//change value of the object 
Object.defineProperty(p1,"age",{value:25});
//document.getElementById("x").innerHTML = p1.age;
//class
class Person{
    constructor(first,last ,age){
        this.frst =first;
        this.lst = last;
        this.age = age;
    }
    myinfo(first,last ,age){
        this.frst =first;
        this.lst = last;
        this.age = age;
    }
    static info(x,first,last ,age){
        this.frst =first;
        this.lst = last;
        this.age = age;
    }
}
var p2 = new Person("rick","luci",20);
var p3 = new Person();
p3.myinfo ("rick",'luci',20);
var p4 = new Person();
Person.info(p4,"luci","rick",20);
//document.getElementById("x").innerHTML = Person.age;
//document.getElementById("x").innerHTML = p4.frst;
//jquery
//$('h1').html('<h6>heeeyoooo</h6>');
//$('h1').hide();
/*$('h1').text('heeeyoooo');
$('h1').css('color','red');
$('h1#heading1').css('color','blue');
$('.heading2').css('color','purple');
$('ul#list li:first').css('color','red');
$('ul#list li:nth-child(3n)').css('color','red');
$('a').css('color','red');
$('a[href="https://google.com"]').css('color','green');
$(':button').hide();*/

$('#btn1').click(function(){
    $('p').hide();
});
$('#btn2').click(function(){
    $('p').show();
});
//hide and show in the same time
$('#btn1').dblclick(function(){
    $('p').toggle();
});
$('#btn2').hover(function(){
    $('p').show();
});
$('#btn2').click(function(){
    alert('clicked');
});
$('input').focus(function(){
    $(this).css('background-color','yellow')
});
$('input').blur(function(){
    $(this).css('background-color','white')
});
$('select#gender').change(function(){
    $(this).css('background-color','gray')
});
$('#form').submit(function(){
   var x= $('#name').val();
  // alert(x);
});

$('#btnFadeOut').click(function(){
    $('#box').fadeOut(2000,function(){
        $('#btnFadeOut').text('gone');
    });
});
$('#btnFadeIn').click(function(){
    $('#box').fadeIn(2000,function(){
        $('#btnFadeIn').text('gone');
    });
});
$('#btnFadeTog').click(function(){
    $('#box').fadeToggle(2000);
});
$('#btnSlideUp').click(function(){
    $('#box').slideUp(2000);
});
$('#btnSlideDown').click(function(){
    $('#box').slideDown(2000);
});
$('#btnSlideTog').click(function(){
    $('#box').slideToggle(2000);
});
$('#btnStop').click(function(){
    $('#box').stop();
});
$('#moveLeft').click(function(){
    $('#box2').animate({
        left :500,
        width:'200px',
        height:'200px',
        opacity:0.5
    });
});
$('#moveRight').click(function(){
    $('#box2').animate({
        left :0,
        width:'100px',
        height:'100px',
        opacity:1
    });
});
$('#moveAround').click(function(){
    $('#box2').animate({
        left :100,
        width:'50px',
        height:'50px'
    });
    $('#box2').animate({
        top :100,
        width:'50px',
        height:'50px'
    });
    $('#box2').animate({
        left:0,
        top:100,
        width:'50px',
        height:'50px'
    });
    $('#box2').animate({
        left :0,
        top:0,
        width:'100px',
        height:'100px'
    });
});
$('p.para1').css({color:'red',background:'gray'})
//$('p.para2').addClass('myClass');
$('#btnn1').click(function(){
    $('p.para2').toggleClass('myClass');
});
//add text
//$('#mydiv').text('Heeeyooo');
$('#mydiv').html('<h3>Heeeyooo</h3>');
alert($('#mydiv').text());
//add in all the ul
//$('ul').append('<li>Append List Item</li>');
//add in the  first ul
//$('ul').prepend('<li>Append List Item</li>');
//add before or after
$('ul').before('<h4>heeeee</h4>');
$('ul').after('<h4>yooooo</h4>');
$('a').attr('target','_blank');
//when i write smth he add it in the list
/*$('#newItem').keyup(function(e){
    if(e.which == 13) {
        $('ul').append('<li>'+e.target.value+'</li>');
    }
});*/
var myArr = ['luci','rick','volg','miyata'];
$.each(myArr,function(i,val){
    $('#users').append('<li>'+val+'</li>');
});



