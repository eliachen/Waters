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

public interface RepManagerInterface {
  
//    //属性
//    public Tcig getcig();
//    public Tcig setcig(Tcig value);
//   
//    //平面化的数据流数据
//    public List<Tdata> getdata();
//    public List<Tdata> setdata( List<Tdata> value);
    
    //获取html
   public  byte[] gethtml();
   
   //获取excel
   public byte[] getexcel();
   
   //获取pdf
   public byte[] getpdf();
   
}
