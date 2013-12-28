/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Map;

/**
 *
 * @author 尔康
 */
public class rwRepCig extends RepCig{
   
    public RepModelChoice rwrepmodel;
    
    public rwRepCig() {

    }
    
    //报表类型
    public enum RepModelChoice
    {
     Waterlevelforperiodoftime,
      
    };
  

// 
//    
//    //报表类型
//    private RepModelChoice repmodel;
//    
//     //报表地址
//            private String RepPath;
//            //标题
//            private String title;
//            //参数
//            private Map Pars;
//            
//         
//            

//            
//            //输出类型
//            private outModelChoice outModel;
//
// 
//
//            //输出的数据枚举类型
//            public enum outModelChoice{
//                //Pdf
//                Pdf,
//                //html
//                html,
//                //excel
//                excel
//            };
//
//    public String getRepPath() {
//        return RepPath;
//    }
//
//    public void setRepPath(String RepPath) {
//        this.RepPath = RepPath;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public Map getPars() {
//        return Pars;
//    }
//
//    public void setPars(Map Pars) {
//        this.Pars = Pars;
//    }
//
//    public outModelChoice getOutModel() {
//        return outModel;
//    }
//
//    public void setOutModel(outModelChoice outModel) {
//        this.outModel = outModel;
//    }
//
// 
//    
//    //报表类型
//    public enum RepModelChoice
//    {
//     Waterlevelforperiodoftime,
//      
//    };
//
//   
//    public RepModelChoice getRepmodel() {
//        return repmodel;
//    }
//
//    public void setRepmodel(RepModelChoice repmodel) {
//        this.repmodel = repmodel;
//    }
    
};

