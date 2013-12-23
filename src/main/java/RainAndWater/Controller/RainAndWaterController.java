package RainAndWater.Controller;

import Dal.Helper.NetHelper;
import Dal.Reporter.Data.Water;
import Dal.Reporter.Manager.waterRepManager;
import Dal.Reporter.Manager.rwRepCig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
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
  
  //返回主页面
  @RequestMapping(value="/Water/Rep.do",method =RequestMethod.GET)
  public ModelAndView RepWater(HttpServletResponse response) throws JRException{
//      
//   byte[] dt=  Dal.Reporter.Water.getRep_Waterlevelforperiodoftime();
//     
//   try{
//      response.setContentType("text/html");
//      response.setContentLength(dt.length);
//      ServletOutputStream ouputStream = response.getOutputStream();
//      ouputStream.write(dt,0,dt.length);
//      ouputStream.flush();
//      ouputStream.close();
//      //response.sendError(404,"SB");
//   }catch(IOException e){
//   
//   }
    //return null;
    return new ModelAndView("/Water/WaterRep");
  };
    
    @RequestMapping(value = "/Water/RepQuery.do",method = RequestMethod.GET)
    public void Rep_Water_Qut(HttpServletResponse response,HttpServletRequest request){
       rwRepCig cig= new rwRepCig();
       //外传，输出模式
       cig.repmodel=rwRepCig.RepModelChoice.Waterlevelforperiodoftime;
       cig.outModel=rwRepCig.outModelChoice.html;
       cig.title="ss";
       //cig.outModel=new outModelChoice();
       
       //管理
      waterRepManager waterRepmg=new waterRepManager(null,null);
       
       switch(cig.repmodel){
           case Waterlevelforperiodoftime:
                //设置地址
                cig.RepPath="C:\\MrLin\\JavaProj\\WaterSource\\src\\main\\webapp\\resources\\WaterResource-rep\\water\\Waterlevelforperiodoftime\\Waterlevelforperiodoftime.jasper";
                //搞出数据
                waterRepmg =new waterRepManager(cig,Water.getRep_Waterlevelforperiodoftime());
               
       }
       
       //处理输出
       switch(cig.outModel){
           case Pdf :
                NetHelper.toPdf(response,waterRepmg.GetData());
               break;
           case excel:
                NetHelper.toExcel(response,waterRepmg.GetData());
               break;
           case html :
                 NetHelper.toHtml(response,waterRepmg.GetData());
               break;
               
       }
    };
}
