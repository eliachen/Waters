package RainAndWater.Controller;

import java.io.IOException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import static sun.security.krb5.internal.crypto.Confounder.bytes;

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
  
  @RequestMapping(value="/rep/water/Waterlevelforperiodoftime.do")
  public void Rep_Water_Waterlevelforperiodoftime(HttpServletResponse response) throws JRException{
      
   byte[] dt=  Dal.Reporter.Water.getRep_Waterlevelforperiodoftime();
     
   try{
      response.setContentType("text/html");
      response.setContentLength(dt.length);
      ServletOutputStream ouputStream = response.getOutputStream();
      ouputStream.write(dt,0,dt.length);
      ouputStream.flush();
      ouputStream.close();
      //response.sendError(404,"SB");
   }catch(IOException e){
   
   }
       
   
    //return null;
     //return new ModelAndView("/InfReport/water/Waterlevelforperiodoftime");
  };
  
}
