package RainAndWater.Controller;

import Dal.Helper.JsonHelper;
import Dal.Helper.SevreletHelper;
import Dal.Reporter.Data.User;
import Dal.Reporter.Data.WaterRepDataFactory;
//import Dal.Reporter.Manager.waterRepManager;
import Dal.Reporter.Manager.rwRepCig;
import Data.Query.rwQuery;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.AnnotationIntrospector.ReferenceProperty.Type;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonAnyFormatVisitor;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import net.sf.jasperreports.engine.JRException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
  @RequestMapping(value="/Water/sda/dsa/Rep.do",method =RequestMethod.GET)
  public ModelAndView RepWater(){
    return new ModelAndView("/InfReport/WaterRep");
  };
    
  
    //@pare报表类型
    //@pare查询条件
//    @RequestMapping(value = "/Water/RepQuery.do",method = RequestMethod.GET) 
//    public void Rep_Water_Qut(String rwrepcig,String rwquery,HttpServletResponse response)d{
//        
//        Gson gson = new Gson();
//        rwQuery sb0=gson.fromJson(rwquery,new TypeToken<rwQuery<String>>(){}.getType());
//        rwRepCig sb= gson.fromJson(rwrepcig,new TypeToken<rwRepCig>(){}.getType());
//        
//              //查询参数
//            rwQuery recvquery;
//            recvquery = JsonHelper.fromJson(rwquery, new TypeToken<rwQuery>(){}.getType());
//            
//            //报表参数
//            rwRepCig recvcig;
//            recvcig = JsonHelper.fromJson(rwrepcig, new TypeToken<rwRepCig>(){}.getType());
//          
//     
//       
//        
//       
//        rwRepCig cig= new rwRepCig();
//       //外传，输出模式
//       cig.repmodel=rwRepCig.RepModelChoice.Waterlevelforperiodoftime;
//       cig.outModel=rwRepCig.outModelChoice.html;
//       cig.title="ss";
//       //cig.outModel=new outModelChoice();
//       
//       //管理
//      waterRepManager waterRepmg=new waterRepManager(null,null);
//       
//       switch(cig.repmodel){
//           case Waterlevelforperiodoftime:
//                //设置报表地址
//                cig.RepPath="C:\\MrLin\\JavaProj\\WaterSource\\src\\main\\webapp\\resources\\WaterResource-rep\\water\\Waterlevelforperiodoftime\\Waterlevelforperiodoftime.jasper";
//                //标题
//                cig.title="时段水位报表";
//                //搞出数据
//                waterRepmg =new waterRepManager(cig,WaterRepDataFactory.getRep_Waterlevelforperiodoftime(recvquery));
//             
//               
//       }
//       
//       //处理输出
//       switch(cig.outModel){
//           case Pdf :
//                SevreletHelper.toPdf(response,waterRepmg.GetData());
//               break;
//           case excel:
//                SevreletHelper.toExcel(response,waterRepmg.GetData());
//               break;
//           case html :
//                 SevreletHelper.toHtml(response,waterRepmg.GetData());
//               break;
//               
//       }
//       
//    };
    //@RequestBody rwRepCig t 
    
     @RequestMapping(value = "/Water/test.do",method = RequestMethod.POST)
     @ResponseBody
    public String addUser(String user,String s2,int s3,HttpServletRequest request)
    {
        Gson gson=new Gson();
        //User u=  JsonHelper.fromJson(user, new TypeToken<User>(){}.getType());
        rwRepCig r=  JsonHelper.fromJson(s2, new TypeToken<rwRepCig>(){}.getType());
            
        //, rwRepCig rw
        String returnText="ss";
       // return r.getRepmodel().toString();
      return null;
    }
    
    public class test 
    {
       private String T1;
       private String T2;

      

        public test() {

        }

        public String getT1() {
            return T1;
        }

        public void setT1(String T1) {
            this.T1 = T1;
        }

        public String getT2() {
            return T2;
        }

        public void setT2(String T2) {
            this.T2 = T2;
        }

       
    }
}
