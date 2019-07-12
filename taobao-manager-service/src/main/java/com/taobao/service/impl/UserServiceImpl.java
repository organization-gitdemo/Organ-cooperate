package com.taobao.service.impl;

import com.taobao.mapper.UserMapper;
import com.taobao.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @Description
 * @Author Administrator
 * @Date 2019/7/5 11:09
 * @Vertion 1.0
 **/
@Service
public class UserServiceImpl {
    @Autowired
    private UserMapper userMapper;


    public User get(User user) {
        // 通过Mapper的select方法查询用户
        return userMapper.select(user);
    }
}
