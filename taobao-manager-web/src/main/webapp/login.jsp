<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/7/5
  Time: 14:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>login</title>
</head>
<body>
<h1>用户登录界面</h1>
<h2>用户信息</h2>
<h3>Tom  123</h3>
<h3>Jack 456</h3>
<br>
<form id="form" action="/login.action" method="post">
    <table>
        <tr>
            <td>用户名</td>
            <td><input id="username" name="username" value="" /></td>
        </tr>
        <tr>
            <td>密码</td>
            <td><input id="password-always-checkbox" name="password" /></td>
        </tr>
        <tr>
            <td></td>
            <td align="right"><input type="submit" value="提交"></td>
        </tr>
    </table>
</form>

</body>
</html>
