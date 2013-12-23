/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

/**
 *
 * @author 尔康
 */
public class rwRepCig extends RepCig {
    //标题
    public String title;
    //地址
    public String path;
    
    //报表类型
    public RepModelChoice repmodel;
    
    //报表类型
    public enum RepModelChoice
    {
     Waterlevelforperiodoftime,
      
    };
    
};

