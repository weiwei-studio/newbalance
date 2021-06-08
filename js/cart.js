var box=document.querySelector(".hezi1")
//获取localStorage中是否有cartList4
var cartList4=localStorage.getItem("cartList4")

var name1=getCookie("name")
if(name1){
  //转为对象
  cartList4=eval('('+cartList4+')')
  show1()
  total()
}else{
  alert("尚未登录，请登录")
  //获取当前地址栏信息
  // var url=location.href
  location.href='./login.html'
}
// var c = total()[1]
function show1(){
  // var c = total()[1]
  //判断当前是否有数据
  if(cartList4.length>0){
    var c = total()[1]
      // 判断是否所有的商品中is_select都为1
      var bool=cartList4.every(item=>{
          return item.select==1
      })
      //拼接字符串
      var str2 = `
      
      <input type="checkbox" name="quan" ${bool?"checked":''}>全选
      

      `
      //遍历数组中所有元素
      cartList4.forEach(item=>{
          str2+=`
          
     <div class="box4">
        <div class="chacha" data-id=${item.id}>x</div>
          <ul>
            <li> <input type="checkbox" name="xuan" id="" data-id=${item.id} ${item.select==1?"checked":''} ></li>
            <li><img src="${item.small1}" alt="" width=100px height=100px></li>
            <li style="width: 200px;">${item.title}</li>
            <li>支付完成的订单, 会在下单后24小时内发货</li>
            <li style="width: 100px;"><button data-id=${item.id} ${item.number<=1?"disabled":''}> - </button>
              <button data-id=${item.id}>${item.number}</button>
              <button data-id=${item.id} ${item.number>=10?"disabled":''} > + </button>
            </li>
            <li style="width: 60px;">${item.price}</li>
          </ul>
      </div>
      
          `
      })
      str2+=`
      <div class="henxian3">
      <p class="zonjia">
        总价 <span>￥${c}</span>
      
    <p style="color: white;width:100px;height:30px;background:red;text-align: center; font-weight:bold;font-size:14px;position:  absolute; top: 30px;right:0px">结算</p>
    </div>
      `
      // 把所有拼接好的内容，渲染到页面中
      box.innerHTML=str2
  }else{
      var str=`
      <h2>这个是一个购物车页 <a href="./index.html" class="btn btn-success">返回首页</a></h2>
      <div class="jumbotron">
          <h1>您的购物车空空如也</h1>
          <p>点击下方按钮快去选购吧! ^_^</p>
          <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
      </div>

      `
      //把当前字符串渲染到页面中
      box.innerHTML=str

  }
}


box.onclick=function(e){
  //事件对象兼容
  var e = e || window.event
  //目标对象兼容
  var target=e.target || e.srcElement
  // console.log(target.innerHTML)
  //判断点击的是否为加法按钮
  if(target.innerHTML==' + '){
      //获取当前操作对的id属性值
      var id=target.getAttribute("data-id")
      //操作cartList4中指定的数据
      cartList4.forEach(item=>{
          //判断是否为当前要操作的商品
          if(item.id==id){
              item.number++
          }
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //减法
  if(target.innerHTML==' - '){
      //获取id
      var id=target.getAttribute("data-id")
       //操作cartList4中指定的数据
       cartList4.forEach(item=>{
          //判断是否为当前要操作的商品
          if(item.id==id){
              item.number--
          }
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //删除
  if(target.innerHTML=="x"){
      //获取id属性值
      var id=target.getAttribute("data-id")
      cartList4=cartList4.filter(item=>{
          return item.id!=id
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //判断是否为全选框
  if(target.name=="quan"){
      //遍历所有商品
      cartList4.forEach(item=>{
          //判断当前全选框是否被选中
          if(target.checked){
              item.select=1
          }else{
              item.select=0
          }
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //判断点击的是否为选中框对象
  if(target.name=="xuan"){
      //获取当前选中框对象的id属性
      var id=target.getAttribute('data-id')
      //遍历数组元素
      //遍历所有商品
      cartList4.forEach(item=>{
         //判断是否为当前要操作的商品
         if(item.id==id){
             //判断当前商品中is_select是否等于1
             if(item.select==1){
                  item.select=0
             }else{
                  item.select=1
             }
         }
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //去结算
  if(target.innerHTML=='结算'){
      alert("你已支付："+total()[1])
      //过滤不满足条件的商品
      cartList4=cartList4.filter(item=>{
          return item.select!=1
      })
      //把修改完毕的cartList4重新存储在localStorage中
      localStorage.setItem("cartList4",JSON.stringify(cartList4))
      show1()
  }
  //清空购物车
  // if(target.innerHTML=="清空购物车"){
  //      cartList4=[]
  //      //把修改完毕的cartList4重新存储在localStorage中
  //      localStorage.setItem("cartList4",JSON.stringify(cartList4))
  //      show1()
  // }
}


//计算所选商品价格和数量
function total(){
  var nums=0 //所选商品数量
  var prices=0 //所选商品价格

  // item.price.split("$")[1].split(",")[0]+item.price.split("$")[1].split(",")[1]
  // item.price.split(',')[1]
  //遍历所有商品
  cartList4.forEach(item=>{
      //判断当前商品是否被选中
      if(item.select==1){
       
          nums+=item.number
          prices+=parseFloat((item.price.split(',')[0].split('￥')[0].substring(3)+item.price.split(',')[1]))*parseInt(item.number)
      }
  })
  return [nums,prices]
}