/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

/**
 *
 * @author 尔康
 * 报表的设置选项
 */
public class RepCig  {
            //报表地址
            public String RepPath;
            //标题
            public String title;
            
            //输出类型
            public outModelChoice outModel;
            
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
