package com.taobao.controller;

import com.taobao.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * @Description
 * @Author Administrator
 * @Date 2019/7/5 11:06
 * @Vertion 1.0
 **/
@Controller
public class UserController {
    // 注入UserService
    /*@Autowired
    private UserService userService;*/

    @RequestMapping(value = "/login")
    public String login(User user, String link_call, String content1, HttpServletRequest request) {

        ModelAndView mv = new ModelAndView();
        String content = request.getParameter("content1");
        System.out.println("开始查询---");
        System.out.println(link_call);
        /*user = userService.get(user);

        if (user != null) {
            System.out.println("查到的User: " + user.getUsername());
            mv.addObject("user", user);
            // 转到user.jsp用户界面
            return "user";
        } else {
            System.out.println("未查到此用户");
            // 查不到用户信息，则重定向回登录界面
            System.out.println("重定向回登录界面---");
            return "login";
        }*/
        return "";
    }
}
