//获取操作对象
var row=document.querySelector(".xiezi")
var pagination=document.querySelector(".pagination");

//通过自执行函数来获取数据
(async function(){
    var arr=await promiseAjax({
        url:'./php/list.php'
    })
    //把字符串转为对象
    arr=eval('('+arr+')')
    //配置传入的对象信息
    var o1={
        pageInfo:{
            pagenum:1,
            pagesize:12,
            totalsize:arr.length,
            totalpage:Math.ceil(arr.length/12)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        }
    }
    //实例化分页器对象
    new Pagination(pagination,o1,(m)=>{
        //通过页码，来进行分页数据显示
        var arr2=arr.slice((m-1)*12,m*12)
        //创建字符串，拼接所有内容
        var str=''
        //遍历数组中所有数据
        arr2.forEach(item=>{
            str+=`
            <div class="box2">
            <img src="${item.url}" alt="">
            <br>
            <p style="font-weight: bold;">${item.title}</p>
            <p>${item.detail}</p>
            <p style="font-weight: bold;">${item.price}</p>
            <a style="font-weight: bold;" href="./xianqinye.html?id=${item.id}">点击进入详情页面</a>
        </div>
            `
        })
        //把拼接好的内容渲染到页面中
        row.innerHTML=str
    })
})()
