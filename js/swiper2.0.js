var swiper = (function () {
    // 私有变量, 不提供给外部使用
    var obj,
        obj1,
        $bannerBox,
        $tipBox,
        $tipAll,
        $prevBtn,
        $nextBtn,
        imgWidth,
        index = 0;

    return {
        init() {
            // 相当于给一个对象添加了一个属性
            obj1 = document.querySelector('#lunbo-wrapper');
            obj = document.querySelector('.lunbo');
            // obj = document.querySelector(ele);
            imgWidth = obj.clientWidth;
            // 获取上一页按钮
            $prevBtn = document.querySelector('.left-btn');
            $nextBtn = document.querySelector('.right-btn');
            // 获取下一页按钮
            $bannerBox = obj.firstElementChild;
            $tipBox = document.querySelector('.nav ul');
            $tipAll = $tipBox.children;
            console.log(imgWidth);
            // 给所有小圆点添加index
            for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].index = i;
            }
            // [...$tipAll].forEach((item, index) => {
            //     item.index = index;
            // })
            var $firstImg = obj1.firstElementChild;
            var $lastImg = obj1.lastElementChild;
            obj1.appendChild($firstImg.cloneNode(true));
            obj1.insertBefore($lastImg.cloneNode(true), $firstImg);
            obj1.style.left = -imgWidth + 'px';

            this.event()
        },
        event() {
            const self = this;
            $tipBox.addEventListener('click', function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI') {
                    index = target.index;
                    self.showImage();
                }
            }, false)
            $prevBtn.onclick = function () {
                index--;
                self.showImage()
            }
            $nextBtn.onclick = function () {
                index++;
                self.showImage()
            }
            // console.log(obj);
        },
        showImage() {
            console.log(index)
            // 展示对应的图片
            // 对应的小圆点
            if (index < 0) {
                obj1.style.left = -($tipAll.length + 1) * imgWidth + 'px';
                // 展示最后一张
                index = $tipAll.length - 1;
            } else if (index > $tipAll.length - 1) {
                obj1.style.left = 0;
                index = 0;
            }
            for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].classList.remove('bg');
                // $tipAll[i].className.replace('active', '');

            }
            $tipAll[index].classList.add('bg');
            move(obj1, { left: -(index + 1) * imgWidth }, 500)
        }
    }
}())
swiper.init();
