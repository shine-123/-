var $lunboAll = $('#lunbo-wrapper');
var $nav = $('.nav');
var $liAll = $('.nav li')
console.log($liAll);
$nav.click(function(e){
    var target = e.target;
    if(target.nodeName == 'LI'){
        console.log(this.index);
        
    }
})