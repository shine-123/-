function move(obj,targetObj,time,callback){
    if(typeof(obj) == "string"){
        obj = document.querySelector(obj);
    }
    clearInterval(obj.timer);
    // 获取初始值
    const speedObj = {};
    for(var attr in targetObj){
        var init = parseFloat(getStyle(obj,attr));
        if(attr === 'opacity'){
            init *= 100;
            console.log(attr,init);
        }
        var target = targetObj[attr];
        speedObj[attr] = (target - init) / (time / 10);
        // console.log(speed);
    }
        obj.timer = setInterval( _ =>{
            var flag = true;
            for(var attr in targetObj){
                var init = parseFloat(getStyle(obj,attr)); 
                var speed = speedObj[attr];
                var target = targetObj[attr];
                if(attr === 'opacity') {
                    init *= 100;
                    target *= 100
                }
                init += speed;
                if ((speed >= 0 && init >= target) || (speed <= 0 && init <= target)) {
                    init = target;
                }else{
                    flag = false;
                }
                if(attr === 'opacity'){
                    obj.style[attr] = init / 100;
                    console.log(attr,init);
                }else{
                    obj.style[attr] = init + 'px';
                }
            }
            if(flag){
                clearInterval(obj.timer);
                if(typeof callback == 'function'){
                    callback(obj);
                }
            }
        },10)
    
}
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}