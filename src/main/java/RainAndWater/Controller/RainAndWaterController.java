package RainAndWater.Controller;

import Dal.Helper.SevreletHelper;
import Dal.Reporter.Data.WaterRepDataFactory;
import Dal.Reporter.Manager.waterRepManager;
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
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import org.springframework.stereotype.Controller;
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
  @RequestMapping(value="/Water/Rep.do",method =RequestMethod.GET)
  public ModelAndView RepWater(){
    return new ModelAndView("/InfReport/WaterRep");
  };
    
  
    //@pare报表类型
    //@pare查询条件
    @RequestMapping(value = "/Water/RepQuery.do",method = RequestMethod.GET)
    @ResponseBody  
    public void Rep_Water_Qut(@RequestBody rwRepCig.RepModelChoice rwmodel,@RequestBody ArrayList<rwQuery<Object>> rwq,HttpServletResponse response){
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
                //设置报表地址
                cig.RepPath="C:\\MrLin\\JavaProj\\WaterSource\\src\\main\\webapp\\resources\\WaterResource-rep\\water\\Waterlevelforperiodoftime\\Waterlevelforperiodoftime.jasper";
                //标题
                cig.title="时段水位报表";
                //搞出数据
                waterRepmg =new waterRepManager(cig,WaterRepDataFactory.getRep_Waterlevelforperiodoftime(rwq));
             
               
       }
       
       //处理输出
       switch(cig.outModel){
           case Pdf :
                SevreletHelper.toPdf(response,waterRepmg.GetData());
               break;
           case excel:
                SevreletHelper.toExcel(response,waterRepmg.GetData());
               break;
           case html :
                 SevreletHelper.toHtml(response,waterRepmg.GetData());
               break;
               
       }
       
    };
    
    @RequestMapping(value = "/Water/test.do",method = RequestMethod.GET)
    public  Object test(@RequestBody test t1,String t2){
//        Gson gson = new Gson();
//        //Type type=new TypeToken<test>(){}.getType();
//       test tr= gson.fromJson(t1,new TypeToken<test>(){}.getType());
       
       // gson.fromJson(t2, )
       List<String> k =new ArrayList<String>();
       k.add("s");
       k.add("s2");
       k.add("s3");
        return k;
    }
    
    public class test implements Serializable
    {
       public String t1;
       public String t2;

        public test() {

        }
       
    }
}
