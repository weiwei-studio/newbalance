//获取操作对象
// var checkbox1=document.querySelector('[type="checkbox"]')
var btn1=document.querySelector('.denru')
var user2=document.querySelector(".druuser")
var pass2=document.querySelector(".drupass")
//获取地址栏中的参数
// var search1=location.search
//给选中框绑定点击事件


//给按钮绑定点击事件
btn1.onclick=function(){
    //获取输入框中的value值
    var u1=user2.value
    var p1=pass2.value
    // console.log(u1,p1)
    //通过ajax来发送请求
    ajax({
        url:'./php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
           //判断当前返回值是否为1
           if(dt==1){
              //保存账号
              setCookie('name',u1)
              // 判断当前search1是否有值
              if(search1){
                //分割参数
                var url1=search1.split('=')[1]
                //跳转到指定的地址中
                location.href=url1
              }else{
                alert("登录成功")
                //跳转到列表页
                // location.href="./index.html"
                history.go(-1)
              }
           }else{
               alert("登录失败")
               location.reload()
           }
        }
    })
    return false
}