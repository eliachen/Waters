/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

import java.util.HashMap;

/**
 *
 * @author 尔康
 * 报表的设置选项
 */
public abstract class RepCig  {
            //报表地址
            public String RepPath;
            //标题
            public String title;
            //参数
            public HashMap Pars;
             //输出类型
            public outModelChoice outModel;
            
            
             public RepCig() {

             }
            
           

 

            //输出的数据枚举类型
            public enum outModelChoice{
                //Pdf
                Pdf,
                //html
                html,
                //excel
                excel
            };

}
