<?php
include "./datas.php";
//获取传入的数据
$u=$_GET['username'];
$p=$_GET['password'];

//编写SQL语句
$sql="insert into  user(name,pass) values('$u',$p)";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//判断当前结果集中是否有数据
if($result){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link);
?>