/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.47
 * Generated at: 2019-07-08 10:23:01 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {



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


  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/jquery-1.8.3.min.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/Validform_v5.3.2_min.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/RegexConstrants.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/layui.all.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/layui.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/layui.all.js\"></script>\n");
      out.write("<HTML>\n");
      out.write("<HEAD>\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\">\n");
      out.write("    <TITLE>eWebEditor ： 标准调用示例</TITLE>\n");
      out.write("    <META http-equiv=Content-Type content=\"text/html; charset=UTF-8\">\n");
      out.write("    <link rel='stylesheet' type='text/css' href='../ewebeditor/_example/example.css'>\n");
      out.write("</HEAD>\n");
      out.write("<BODY>\n");
      out.write("\n");
      out.write("<p><b>导航 ： <a href=\"../ewebeditor/_example/default.htm\">示例首页</a> &gt; 标准调用示例</b></p>\n");
      out.write("<p>此例演示了eWebEditor的标准调用方法，也是最常用的调用方法。</p>\n");
      out.write("<p>本样式为精简版样式，最佳调用宽度550px，最佳调用高度300px。精简版只有部分精简功能。</p>\n");
      out.write("\n");
      out.write("<FORM method=\"get\" name=\"myform\" action=\"/login.action\" class=\"wsxForm\">\n");
      out.write("    <label for=\"link_call\" class=\"control-label\">联系电话<span class=\"require\">*</span></label>\n");
      out.write("    <input id=\"link_call\" value=\"\" type=\"text\" class=\"form-control\" name=\"link_call\" datatype=\"telphone\" nullmsg=\"请填写信息！\">\n");
      out.write("    <TABLE border=\"0\" cellpadding=\"2\" cellspacing=\"1\">\n");
      out.write("        <TR>\n");
      out.write("            <TD>编辑内容：</TD>\n");
      out.write("            <TD>\n");
      out.write("                ");

                    // 定义变量
                    String html;
                    // 赋值，如从数据库取值
                    // html = rs("field")
                    html = "<P align=center><FONT color=#ff0000><FONT face=\"Arial Black\" size=7><STRONG>eWeb<FONT color=#0000ff>Editor</FONT><FONT color=#000000><SUP>TM</SUP></FONT></STRONG></FONT></FONT></P><P align=right><FONT style='BACKGROUND-COLOR: #ffff00' color=#ff0000><STRONG>eWebEditor V9.0 for JSP 简体中文精简版</STRONG></FONT></P><P>本样式为精简版样式，最佳调用宽度550px，高度300px！</P><P>还有一些高级调用功能的例子，你可以通过导航进入示例首页查看112。</P><P><B><TABLE borderColor=#ff9900 cellSpacing=2 cellPadding=3 align=center bgColor=#ffffff border=1><TBODY><TR><TD bgColor=#00ff00><STRONG>看到这些内容，且没有错误提示，说明安装已经正确完成！</STRONG></TD></TR></TBODY></TABLE></B></P>";
                    // 字符转换，主要针对单双引号等特殊字符
                    // 只有在给编辑器赋值时才有必要使用此字符转换函数，入库及出库显示都不需要使用此函数
                    html = htmlEncode(html);
                
      out.write("\n");
      out.write("\n");
      out.write("                <INPUT type=\"hidden\" name=\"content1\" id=\"content\" value=\"");
      out.print(html);
      out.write("\">\n");
      out.write("                <IFRAME ID=\"eWebEditor1\" src=\"../ewebeditor/ewebeditor.htm?id=content1&style=coolblue\" frameborder=\"0\" scrolling=\"no\" width=\"550\" height=\"300\"></IFRAME>\n");
      out.write("            </TD>\n");
      out.write("        </TR>\n");
      out.write("        <TR>\n");
      out.write("            <TD colspan=2 align=right>\n");
      out.write("                <a href=\"javascript:void(0);\" id =\"submitInput\">保存</a>\n");
      out.write("                ");
      out.write("\n");
      out.write("                <INPUT type=reset value=\"重填\">\n");
      out.write("                <INPUT type=button value=\"查看源文件\" onclick=\"location.replace('view-source:'+location)\">\n");
      out.write("            </TD>\n");
      out.write("        </TR>\n");
      out.write("    </TABLE>\n");
      out.write("</FORM>\n");
      out.write("</BODY>\n");
      out.write("</HTML>\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/form_verify.js\"></script>\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\" src=\"../ewebeditor/js/jquery-form.js\"></script>\n");
      out.write("\n");
      out.write("\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
