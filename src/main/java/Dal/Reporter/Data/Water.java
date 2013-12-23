/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 package Dal.Reporter.Data;
import java.util.ArrayList;
import java.util.List;
 import waterRep.Waterlevelforperiodoftime;
        
/**
 *
 * @author 尔康
 */
public class Water {
    
public static List<Waterlevelforperiodoftime> getRep_Waterlevelforperiodoftime(){
    //模拟数据
   List<Waterlevelforperiodoftime> demodata =new ArrayList<Waterlevelforperiodoftime>();
   waterRep.Waterlevelforperiodoftime ss=new waterRep.Waterlevelforperiodoftime();
   ss.setId(1);
   ss.setHour(1);
   ss.setStcd("8802700");
   ss.setStnm("林泽琛");
   ss.setRz(90);
   demodata.add(ss);
   return demodata;
    
};
  
}
