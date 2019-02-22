var xiaomi = (function(){
    var main = document.querySelector('.main');
    console.log(main);
    return{
        init(){
            this.event();
        },
        event(){
            main.onmouseover = function(e){
                var target = e.target;
                if(target.nodeName == "LI"){
                    console.log(target);
                    var bg = target.querySelector('.bg');
                    move(bg,{bottom:0},200)
                }
            }
            main.onmouseout = function(e){
                var target = e.target;
                if(target.nodeName == "LI"){
                    console.log(target);
                    var bg = target.querySelector('.bg');
                    move(bg,{bottom:-70},200)
                }
            }
        }
    }
}())
xiaomi.init();