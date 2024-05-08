let camera = document.querySelector('.camera') //获取相机盒子
let camera_photo = document.querySelector('.camera_photo') //获取相机
let keyword = document.querySelector('.keyword') // 获取输入框
let search_list = document.querySelector('.search_list') //获取搜索框

// 鼠标移动监听，相机变红色
camera.addEventListener('mouseenter',function () {
    camera_photo.style.color = '#e2231a'
})
// 鼠标移出监听，相机颜色变回灰色
camera.addEventListener('mouseleave',function () {
    camera_photo.style.color = '#333'
})


//定义数组，存储搜索内容
let searchArr = ['小米手机','苹果手机','华为手机','vivo手机','oppo手机','小米电视','小米平板','小米冰箱','苹果12','苹果13','苹果14','苹果手表',]
//实现模糊查询
keyword.addEventListener('input',function () {
    // 每次循环清除旧的，防止信息叠加
    search_list.innerHTML = `` 
    for (let i = 0; i < searchArr.length; i++ ) {
        if (searchArr[i].indexOf(keyword.value) != -1) {
            // searchArr中的第i个元素寻找用户输入的值 如果不等于-1则说明有
            search_list.innerHTML += `<p>${searchArr[i]}</p>`
            search_list.style.display = 'block'
        }
    }   
})
//鼠标移除 板块隐藏
keyword.addEventListener('blur',function () {
    search_list.style.display = 'none'
})


//轮播切换
let LB_img = document.querySelector('.LB_img')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let sectorOneCenterLun = document.querySelector('.sectorOneCenterLun')
let lis = document.querySelectorAll(('.Lun_btn li'))


let LbImg = [
    {
        imgSrc: 'CO轮播1.png.webp'
    },
    {
        imgSrc: 'CO轮播2.jpg'
    },
    {
        imgSrc: 'CO轮播3.jpg'
    },
    {
        imgSrc: 'CO轮播4.jpg'
    },
    {
        imgSrc: 'CO轮播5.jpg.webp'
    },
    {
        imgSrc: 'CO轮播6.jpg'
    },
]
let photo = 0
function imgLb() {
    photo++
    LB_img.src = './images/' + LbImg[photo].imgSrc
    photo === LbImg.length - 1 ?  photo = -1 : photo
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
    }
    lis[photo].className = 'active'
}
//设置定时器每隔三秒切换图片
let times = setInterval (imgLb,3000)
//点击下一张
next.addEventListener('click',imgLb)
//点击上一张
prev.addEventListener('click',function() {
    photo--
    // if (photo < 0) {
    //     photo = LbImg.length + photo
    // } 
    // if (photo == -LbImg.length + 1) {
    //     photo = 0
    // }
    if (photo < 0) {
        photo = LbImg.length-1;
    }  
    if (photo === LbImg.length) {
        photo = 0
    }
    // LB_img.src = './images/' + LbImg[photo].imgSrc
   //alert(LbImg[photo].imgSrc);
    LB_img.src = './images/' + LbImg[photo].imgSrc;
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
    }
    lis[photo].className = 'active'
})
//鼠标划入关闭定时器
sectorOneCenterLun.addEventListener('mouseenter',function () {
    clearInterval(times)    
})
//鼠标划出开启定时器
sectorOneCenterLun.addEventListener('mouseleave',function () {
    times = setInterval (imgLb,1000)
})
//给li绑定点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click',function () {
        LB_img.src = './images/' + LbImg[i].imgSrc
    })
}

//数据渲染

let itemArr = [
    {
        imgSrc: './images/B4.png',
        p: '企业购'
    },
    {
        imgSrc: './images/B5.png',
        p: '酒店'
    },
    {
        imgSrc: './images/B6.png',
        p: '礼品卡'
    },
    {
        imgSrc: './images/B7.png',
        p: '云建战'
    },
    {
        imgSrc: './images/B8.png',
        p: '白条'
    },
    {
        imgSrc: './images/B9.png',
        p: '话费'
    },
    {
        imgSrc: './images/B10.png',
        p: '游戏'
    },
    {
        imgSrc: './images/B11.png',
        p: '五金店'
    },
    {
        imgSrc: './images/B12.png',
        p: '电影票'
    },
    {
        imgSrc: './images/B13.png',
        p: '火车票'
    },
    {
        imgSrc: './images/B14.png',
        p: '机票'
    },
    {
        imgSrc: './images/B15.png',
        p: '加油卡'
    },
]
let SORitem = document.querySelector('.SORitem')
//遍历数组
for (let i = 0; i < itemArr.length; i++) {
    // 根据数组创建li
    let li = document.createElement("li")
    li.innerHTML = `
        <img src=${itemArr[i].imgSrc} alt="" srcset="" class="SORitemImg">
        <p class="SORitemP">${itemArr[i].p}</p>
        `
    SORitem.appendChild(li)
}


//导航移入显示
let navLis = document.querySelectorAll('.SOL_nav li')
let picture = document.querySelector('.picture')

for (let i = 0; i < navLis.length; i++) {
    navLis[i].addEventListener('mouseenter',function () {
        picture.style.display = 'block'
    })
    navLis[i].addEventListener('mouseleave',function () {
        picture.style.display = 'none'
    })
}

//实现楼层定位切换
let header = document.querySelector('.header')
let sectorOne = document.querySelector('.sectorOne')
let elevator = document.querySelector('.elevator')
let items = document.querySelectorAll('.sectorTwo .item')
let as = document.querySelectorAll('.elevator a')
let search = document.querySelector('.search')
let search_m = document.querySelector('.search-m')
let form = document.querySelector('.form')
let shopping = document.querySelector('.shopping')
let search_logo = document.querySelector('.search-logo')

//实现楼层滚动文字变色
let elevatorArr = []
//基础高度
let base = header.offsetHeight + sectorOne.offsetHeight

for (let i = 0; i < items.length; i++) {
    base = base + items[i].offsetHeight
    elevatorArr.push(base)
}

//所有颜色变回去
function clearColor () {
    for (let i = 0; i < as.length; i++) {
        as[i].style.color = '#333'
    }
}

document.onscroll = function () {
    //获取滚动条垂直方向滚动多少
    let top = document.documentElement.scrollTop || document.body.scrollTop
    // 获取到header的高度
    let headerHeight = header.offsetHeight //包括height，padding，border
    // 获取sectorOne的高度
    let sectorOneHeight = sectorOne.offsetHeight //包括height，padding，border
    //当滚动条滚动到一定程度时，将楼层定位换成固定定位
    if (top >= headerHeight + sectorOneHeight) {
        elevator.classList.add('elevator-fix')
        search.classList.add('search-fix')
        search_m.style.height = '50px'
        form.style.top = '8px'
        form.style.left = '410px'
        shopping.style.top = '8px'
        shopping.style.right = '300px'
        search_logo.style.display = 'block'
        search_logo.style.left = '200px'
    } else {
        elevator.classList.remove('elevator-fix')
        search.classList.remove('search-fix')
        search_m.style.height = '60px'
        form.style.top = '25px'
        form.style.left = '260px'
        shopping.style.right = '130px'
        shopping.style.top = '25px'
        search_logo.style.display = 'none'
        search_logo.style.left = '85px'
    }

    if (top < header.offsetHeight + sectorOne.offsetHeight) {
        clearColor()
    }
    if (top >= header.offsetHeight + sectorOne.offsetHeight && top < elevatorArr[0]) {
        clearColor()
        as[0].style.color = 'red'
    }else if (top >=  elevatorArr[0] && top < elevatorArr[1]) {
        clearColor()
        as[1].style.color = 'red'
    }else if (top >=  elevatorArr[1] && top < elevatorArr[2]) {
        clearColor()
        as[2].style.color = 'red'
    }else if (top >=  elevatorArr[2]) {
        clearColor()
        as[3].style.color = 'red'
    }
}

//活动倒计时
let hour = document.querySelector('#hour')
let minutes = document.querySelector('#minutes')
let scond = document.querySelector('#scond')
let tips = document.querySelector('.tips')
let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
getTime()
setInterval(getTime, 1000)
function getTime() {
    // 1. 实例化时间对象 一定写到定时器里面才可以额
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let date1 = date.getDate()
    let hour = date.getHours()
    hour = hour < 10 ? '0' + hour : hour
    let min = date.getMinutes()
    min = min < 10 ? '0' + min : min
    let sec = date.getSeconds()
    sec = sec < 10 ? '0' + sec : sec
    let day = date.getDay()
    tips.innerHTML = `今天是：<br> ${year}年${month}月${date1}日 ${hour}:${min}:${sec} ${arr[day]}`
}

dataTimes()
setInterval(dataTimes, 1000)
function dataTimes() {
    // 1. 得到现在的时间戳
    let now = +new Date()
    // 2. 得到指定时间的时间戳
    let last = +new Date('2023-10-25 15:20:00')
    // 3. （计算剩余的毫秒数） / 1000 === 剩余的秒数
    let count = (last - now) / 1000
    // console.log(count)
    // 4. 转换为时分秒
    // h = parseInt(总秒数 / 60 / 60 % 24)   //   计算小时
    let h = parseInt(count / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    // m = parseInt(总秒数 / 60 % 60);     //   计算分数
    let m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
    // s = parseInt(总秒数 % 60); //   计算当前秒数
    let s = parseInt(count % 60);
    s = s < 10 ? '0' + s : s
    // console.log(h, m, s)
    hour.innerHTML = h
    minutes.innerHTML = m
    scond.innerHTML = s
}

let HWArr = [
    {
        ImgSrc: './images/E2.webp',
        h3: '好物低至9.9',
        p: '粮油调味'
    },
    {
        ImgSrc: './images/E3.webp',
        h3: '低价抢购',
        p: '酒类预售'
    },
    {
        ImgSrc: './images/E4.webp',
        h3: '每满299减50',
        p: '安装建材'
    },
    {
        ImgSrc: './images/E5.webp',
        h3: '满99元打85折',
        p: '京东超市'
    },
    {
        ImgSrc: './images/E6.webp',
        h3: '满299减50',
        p: '京东母婴用品'
    },
    {
        ImgSrc: './images/E7.webp',
        h3: '全场低至1元',
        p: '玩具乐器'
    },
    {
        ImgSrc: './images/E8.webp',
        h3: '满299减50',
        p: '洗护好物'
    },
    {
        ImgSrc: './images/E9.webp',
        h3: '至高24期免息',
        p: '京东白条'
    },
    {
        ImgSrc: './images/E10.webp',
        h3: '好物低至9.9',
        p: '零食团购'
    },
    {
        ImgSrc: './images/E11.webp',
        h3: '爆品不止5折',
        p: '名酒甩卖'
    },
    {
        ImgSrc: './images/E12.webp',
        h3: '全场8折',
        p: '美味水果'
    },
    {
        ImgSrc: './images/E3.webp',
        h3: '好物低至9.9',
        p: '粮洗护保养'
    }
]
let HWUl = document.querySelector('.HWUl')
//遍历数组
for (let i = 0; i < itemArr.length; i++) {
    // 根据数组创建li
    let li = document.createElement("li")
    li.innerHTML = `
                <img src=${HWArr[i].ImgSrc} alt="" srcset="">
                <div>
                    <h3>${HWArr[i].h3}</h3>
                    <p>${HWArr[i].p}</p> 
                </div>
        `
        HWUl.appendChild(li)
}


 // 0. 获取元素
    // 得到所有的小li  
    let lias = document.querySelectorAll('.tab .tab-item')
    let divs = document.querySelectorAll('.products .main')
    // 1. 头部tab栏切换模块
    // 1.1 先给4个小li添加点击事件
    for (let i = 0; i < lias.length; i++) {
      lias[i].addEventListener('click', function () {
        // console.log(11)
        // 找到以前的active 类，移除掉 
        document.querySelector('.tab .actives').classList.remove('actives')
        // 当前的元素添加
        this.classList.add('actives')

        // 2. 底部显示隐藏模块  一定要写到点击事件的里面
        document.querySelector('.products .actives').classList.remove('actives')

        // div对应序号的那个加上active 
        divs[i].classList.add('actives')
      })
    }









