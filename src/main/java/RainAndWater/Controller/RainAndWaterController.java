package RainAndWater.Controller;

import java.lang.reflect.Method;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 尔康
 */
@Controller
public class RainAndWaterController {
    
  @RequestMapping(value = "/InfMapRW.do",method =RequestMethod.GET)
  public ModelAndView RainAndWaterMap(){
      return new ModelAndView("/InfMap/InfMapRW");
  };
  
  @RequestMapping(value = "/InfChartRainQuey.do",method =RequestMethod.GET)
  public ModelAndView InfChartRainQuey(){
      return new ModelAndView("/InfChart/InfChartRainQuey");
  };
  
   @RequestMapping(value = "/InfChartWaterQuey.do",method =RequestMethod.GET)
  public ModelAndView InfChartWaterQuey(){
      return new ModelAndView("/InfChart/InfChartWaterQuey");
  };
  
}
