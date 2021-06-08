//获取操作对象
// var checkbox1=document.querySelector('[type="checkbox"]')
var btn=document.querySelector('.sign')
var user1=document.querySelector(".signusername")
var pass1=document.querySelector(".signpassword")
//获取地址栏中的参数
var search1=location.search
//给选中框绑定点击事件


//给按钮绑定点击事件
btn.onclick=function(){
    //获取输入框中的value值
    var u1=user1.value
    var p1=pass1.value
    //通过ajax来发送请求
    ajax({
        url:'./php/sign.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
           //判断当前返回值是否为1
           if(dt==1){
              //保存账号
              // setCookie('name',u1)
              //判断当前search1是否有值
              alert("注册成功")
                //跳转到列表页
                // location.href="./index.html"
                location.reload()
              
           }else{
               alert("注册失败")
           }
        }
    })
    return false
}