/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Meteorology.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author 尔康
 */

@Controller
public class MeteorologyController {
    
    @RequestMapping(value = "/InfMapMeteorology.do",method =RequestMethod.GET)
    public ModelAndView InfMapMeteorology(){
    return new ModelAndView("/InfMap/InfMapMeteorology");
    };
    
    
    @RequestMapping(value = "/InfChartMeteorologyQuery.do",method=RequestMethod.GET)
    public ModelAndView InfChartMeteorologyQuery(){
    return new ModelAndView("/InfChart/InfChartMeteorologyQuery");
    };
    
    @RequestMapping(value = "/InfChartWeatherQuery.do",method=RequestMethod.GET)
    public ModelAndView InfChartWeatherQuery(){
    return new ModelAndView("/InfChart/InfChartWeatherQuery");
    };
    
}
