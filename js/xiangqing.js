//获取操作对象
var box=document.querySelector(".chanpingxqin")
//获取地址栏中的参数信息
var search1=location.search
var dt
//判断当前地址栏中是否有参数
if(search1){
    //分割字符串
    var ar1=search1.split("=")
    //判断当前参数是否为id
    if(ar1[0]=="?id"){
        //获取当前参数的值
        var id=ar1[1];
        (async function(){
            //发送请求，并获取响应结果
            dt=await promiseAjax({
                url:'./php/xiangqing.php',
                data:'id='+id
            })
            //把字符串转为对象
            dt=eval('('+dt+')')
            //把数据渲染到页面中
            var str=`
			<div class="sizhangtu">
          <div class="leftbox">
            <img src="${dt.small1}" alt="" class="leftbox1">
              <div class="mark">
              </div>
          </div>
        
        <img src="${dt.small2}" alt="">
        <img src="${dt.small3}" alt="">
        <img src="${dt.small4}" alt="">
        <div class="rightbox">
            <img src="${dt.big1}">
        </div>
      </div>
      <div class="datu">
        <img src="${dt.big1}" alt="">
        <img src="${dt.big2}" alt="">
        <img src="${dt.big3}" alt="">
        <img src="${dt.big4}" alt="">
        
      </div>
      
      <div class="xinxi">
        <p style="font-size: 20px;">Men's<span style="text-align: right;width: 400px;display: inline-block;">${dt.price}</span></p>
        <br>
        <p style="font-size: 24px;font-weight: bold;">${dt.title}</p>
        <br>
        <p style="font-size: 16px;">尺码：<span style="text-align: right;width: 400px;display: inline-block;">尺码&尺码表</span></p>
        <br>
        <br>
        <div class="chima">
          <div>36</div>
          <div>37</div>
          <div>37.5</div>
          <div>38</div>
          <div>38.5</div>
          <div>39.5</div>
          <div>40</div>
          <div>40.5</div>
          <div>41.5</div>
          <div>42</div>
          <div>42.5</div>
          <div>43</div>
          <div>44</div>
          <div>45</div>
        </div>
        <br>
        <div class="gouwuche">
          <p style="line-height: 55px;text-align: center;">加入购物车</p>
        </div>
        <br>
        <div class="jiezhang">
          <p style="text-align: center;line-height: 55px;">结账</p>
        </div>
      </div>
		
            `
            box.innerHTML=str


      var leftBox=document.querySelector('.leftbox')
      var mark=document.querySelector('.mark')
      var rightBox=document.querySelector('.rightbox')

// 给左边大盒子对象绑定事件
leftBox.onmouseover=function(){
    //显示隐藏的盒子
    mark.style.display='block'
    rightBox.style.display='block'
}

leftBox.onmouseout=function(){
    //隐藏指定盒子
    mark.style.display='none'
    rightBox.style.display='none'
}
leftBox.onmousemove=function(e){
    //兼容事件对象
    var e = e || window.event

    var left1 = e.pageX - 352- (25);
    var top1 = e.pageY -110 - (25 );
    
    //获取移动距离
    
    // var left1=e.pageX-leftBox.offsetLeft-parseInt(mark.offsetWidth/2)
    // var top1=e.pageY-leftBox.offsetTop-parseInt(mark.offsetHeight/2)
    //设置边界条件
    var maxX=50
    var maxY=50
    //右边图片移动的距离
    var imgLeft,imgTop
    //水平方向的判断
    if(left1<=0){
        mark.style.left="0px"
        imgLeft=0
    }else if(left1>=maxX){
        mark.style.left=maxX+'px'
        imgLeft=maxX
    }else{
        mark.style.left=left1+'px'
        imgLeft=left1
    }

    //垂直方向
    if(top1<=0){
        mark.style.top="0px"
        imgTop=0
    }else if(top1>=maxY){
        mark.style.top=maxY+'px'
        imgTop=maxY
    }else{
        mark.style.top=top1+'px'
        imgTop=top1
    }

    //获取右边盒子中的图片
    var img=rightBox.querySelector("img")
    //给右边图片设置偏移量
    img.style.left=-2*imgLeft+'px'
    img.style.top=-2*imgTop+'px'
}
        })()
    }else{
        alert("参数有误")
        location.href="./list.html"
    }
}else{
    alert("非法进入，请选择商品")
    location.href="./list.html"
}


// box.onmouseover = function(e){
//   var e = e || window.event
//   var target=e.target || e.srcElement
//   // console.log(target)


   
//   if(target.className=='leftbox1'){
    

    
//     // console.log('cnm')
//       box.querySelector('.mark').style.display = 'block'
//       box.querySelector('.rightbox').style.display = 'block'

  

  
// }
// }
// box.onmouseout = function(e){
//   var e = e || window.event
//   var target=e.target || e.srcElement
//   if(target.className=='leftbox1'){
//       box.querySelector('.mark').style.display = 'none'
//       box.querySelector('.rightbox').style.display = 'none'


//   }



// }
// box.onmousemove = function(e){
//   var mark = box.querySelector('.mark')
//   var rightBox = box.querySelector('.rightbox')
//   var leftBox = box.querySelector('.sizhangtu')
//   var e = e || window.event
//   var target=e.target || e.srcElement
//   if(target.className=='leftbox1'){
//     // console.log('cnm')
//     target.onmousemove=function(e){
//       // console.log('cnm')
//           //兼容事件对象
//           var e = e || window.event
//           var left1 = e.pageX - leftBox.offsetLeft- (25);
//     var top1 = e.pageY -leftBox.offsetTop - (25 );
//           // console.log(e.pageX,e.pageY)
//           //获取移动距离
//           // var left1=e.pageX-leftBox.offsetLeft-parseInt(mark.offsetWidth/2)
//           // var top1=e.pageY-leftBox.offsetTop-parseInt(mark.offsetHeight/2)
//           // console.log(leftBox.offsetLeft,leftBox.offsetTop)
//           //设置边界条件
//           var maxX=100
//           var maxY=100
//           //右边图片移动的距离
//           var imgLeft,imgTop
//           //水平方向的判断
//           if(left1<=0){
//               mark.style.left="0px"
//               imgLeft=0
//           }else if(left1>=maxX){
//               mark.style.left=maxX+'px'
//               imgLeft=maxX
//           }else{
//               mark.style.left=left1+'px'
//               imgLeft=left1
//           }
      
//           //垂直方向
//           if(top1<=0){
//               mark.style.top="0px"
//               imgTop=0
//           }else if(top1>=maxY){
//               mark.style.top=maxY+'px'
//               imgTop=maxY
//           }else{
//               mark.style.top=top1+'px'
//               imgTop=top1
//           }
      
//           //获取右边盒子中的图片
//           var img=rightBox.querySelector("img")
//           //给右边图片设置偏移量
//           img.style.left=-2*imgLeft+'px'
//           img.style.top=-2*imgTop+'px'
//       }

//   }
// }

// var leftBox=document.querySelector('.leftbox')
// var mark=document.querySelector('.mark')
// var rightBox=document.querySelector('.rightbox')

//给左边大盒子对象绑定事件
// leftBox.onmouseover=function(){
//     //显示隐藏的盒子
//     mark.style.display='block'
//     rightBox.style.display='block'
// }

// leftBox.onmouseout=function(){
//     //隐藏指定盒子
//     mark.style.display='none'
//     rightBox.style.display='none'
// }
// leftBox.onmousemove=function(e){
//     //兼容事件对象
//     var e = e || window.event
//     //获取移动距离
//     var left1=e.pageX-leftBox.offsetLeft-parseInt(mark.offsetWidth/2)
//     var top1=e.pageY-leftBox.offsetTop-parseInt(mark.offsetHeight/2)
//     //设置边界条件
//     var maxX=leftBox.offsetWidth-mark.offsetWidth
//     var maxY=leftBox.offsetHeight-mark.offsetHeight
//     //右边图片移动的距离
//     var imgLeft,imgTop
//     //水平方向的判断
//     if(left1<=0){
//         mark.style.left="0px"
//         imgLeft=0
//     }else if(left1>=maxX){
//         mark.style.left=maxX+'px'
//         imgLeft=maxX
//     }else{
//         mark.style.left=left1+'px'
//         imgLeft=left1
//     }

//     //垂直方向
//     if(top1<=0){
//         mark.style.top="0px"
//         imgTop=0
//     }else if(top1>=maxY){
//         mark.style.top=maxY+'px'
//         imgTop=maxY
//     }else{
//         mark.style.top=top1+'px'
//         imgTop=top1
//     }

//     //获取右边盒子中的图片
//     var img=rightBox.querySelector("img")
//     //给右边图片设置偏移量
//     img.style.left=-2*imgLeft+'px'
//     img.style.top=-2*imgTop+'px'
// }
//给大盒子对象绑定点击事件
box.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //事件目标的兼容
    var target=e.target || e.srcElement
    // console.log(target.innerHTML)
    //判断当前点击的是否为加入购物车
    if(target.innerHTML=="加入购物车"){
      // alert("成功添加")
        //获取localStorage中cartList4
        var cartList4=localStorage.getItem("cartList4")||[]
        //判断当前cartList4是否存在
        if(cartList4.length>0){
          // alert("成功添加")
            //把cartList4转为数组对象
            cartList4=eval('('+cartList4+')')
            var bool=true //是否有相同的商品
            //遍历数组
            cartList4.forEach(item=>{
                //判断当前遍历的商品是否跟添加的商品相同
                if(dt.id==item.id){
                  
                    bool=false
                    //让当前的商品数量加1
                    item.number++
                    alert('成功再次添加商品'+item.title+'='+item.number)
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            //判断bool是否为true
            if(bool){
                 //修改dt对象中的数量
                dt.number=1
                //把当前商品追加到cartList4中
                cartList4.push(dt)
                //重新给localStorage设置键值对
                alert('成功添加商品'+dt.title+'='+dt.number)
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
        }else{
            //修改dt对象中的数量
            dt.number=1
            //把当前商品追加到cartList4中
            cartList4.push(dt)
            alert('第一次添加商品成功'+dt.title+'='+dt.number)
            //重新给localStorage设置键值对
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }
    }
}