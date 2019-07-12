<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript" src="../ewebeditor/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="../ewebeditor/js/Validform_v5.3.2_min.js"></script>
<script type="text/javascript" src="../ewebeditor/js/RegexConstrants.js"></script>
<script type="text/javascript" src="../ewebeditor/js/layui.all.js"></script>
<script type="text/javascript" src="../ewebeditor/js/layui.js"></script>
<script type="text/javascript" src="../ewebeditor/js/layui.all.js"></script>
<HTML>
<HEAD>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
    <TITLE>eWebEditor ： 标准调用示例</TITLE>
    <META http-equiv=Content-Type content="text/html; charset=UTF-8">
    <link rel='stylesheet' type='text/css' href='../ewebeditor/_example/example.css'>
</HEAD>
<BODY>

<p><b>导航 ： <a href="../ewebeditor/_example/default.htm">示例首页</a> &gt; 标准调用示例</b></p>
<p>此例演示了eWebEditor的标准调用方法，也是最常用的调用方法。</p>
<p>本样式为精简版样式，最佳调用宽度550px，最佳调用高度300px。精简版只有部分精简功能。</p>

<FORM method="get" name="myform" action="/login.action" class="wsxForm">
    <label for="link_call" class="control-label">联系电话<span class="require">*</span></label>
    <input id="link_call" value="" type="text" class="form-control" name="link_call" datatype="telphone" nullmsg="请填写信息！">
    <TABLE border="0" cellpadding="2" cellspacing="1">
        <TR>
            <TD>编辑内容：</TD>
            <TD>
                <%
                    // 定义变量
                    String html;
                    // 赋值，如从数据库取值
                    // html = rs("field")
                    html = "<P align=center><FONT color=#ff0000><FONT face=\"Arial Black\" size=7><STRONG>eWeb<FONT color=#0000ff>Editor</FONT><FONT color=#000000><SUP>TM</SUP></FONT></STRONG></FONT></FONT></P><P align=right><FONT style='BACKGROUND-COLOR: #ffff00' color=#ff0000><STRONG>eWebEditor V9.0 for JSP 简体中文精简版</STRONG></FONT></P><P>本样式为精简版样式，最佳调用宽度550px，高度300px！</P><P>还有一些高级调用功能的例子，你可以通过导航进入示例首页查看112。</P><P><B><TABLE borderColor=#ff9900 cellSpacing=2 cellPadding=3 align=center bgColor=#ffffff border=1><TBODY><TR><TD bgColor=#00ff00><STRONG>看到这些内容，且没有错误提示，说明安装已经正确完成！</STRONG></TD></TR></TBODY></TABLE></B></P>";
                    // 字符转换，主要针对单双引号等特殊字符
                    // 只有在给编辑器赋值时才有必要使用此字符转换函数，入库及出库显示都不需要使用此函数
                    html = htmlEncode(html);
                %>

                <INPUT type="hidden" name="content1" id="content" value="<%=html%>">
                <IFRAME ID="eWebEditor1" src="../ewebeditor/ewebeditor.htm?id=content1&style=coolblue" frameborder="0" scrolling="no" width="550" height="300"></IFRAME>
            </TD>
        </TR>
        <TR>
            <TD colspan=2 align=right>
                <a href="javascript:void(0);" id ="submitInput">保存</a>
                <%--<INPUT type=submit value="提交" id="submitInput">--%>
                <INPUT type=reset value="重填">
                <INPUT type=button value="查看源文件" onclick="location.replace('view-source:'+location)">
            </TD>
        </TR>
    </TABLE>
</FORM>
</BODY>
</HTML>

<script type="text/javascript" src="../ewebeditor/js/form_verify.js"></script>

<script type="text/javascript" src="../ewebeditor/js/jquery-form.js"></script>


<%!

    static String htmlEncode(int i){
        if (i=='&') return "&amp;";
        else if (i=='<') return "&lt;";
        else if (i=='>') return "&gt;";
        else if (i=='"') return "&quot;";
        else return ""+(char)i;
    }

    static String htmlEncode(String st){
        StringBuffer buf = new StringBuffer();
        for (int i = 0;i<st.length();i++){
            buf.append(htmlEncode(st.charAt(i)));
        }
        return buf.toString();
    }

%>