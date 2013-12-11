/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package hello.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author 尔康
 */
@Controller
public class helloController {
      @RequestMapping(value="/hello.do",method=RequestMethod.GET)
        public String sayHello(Model model){
        model.addAttribute("msg", "Hello, World!");
        return "hello";
    }
        @RequestMapping(value="/InfMap/InfMapRW.do",method=RequestMethod.GET)
        public String hh(Model model){
        model.addAttribute("msg", "Hello, World!");
        return "hello";
    }

}
