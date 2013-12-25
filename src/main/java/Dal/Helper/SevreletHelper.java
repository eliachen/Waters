/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Helper;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author 尔康
 */
public class SevreletHelper {
    
    //输出Excel
    public static void toExcel(HttpServletResponse response, byte[] dt) {
        commonto("application/vnd.ms-excel", response, dt);
    }

   
  
    //输出Html
  public static void toHtml(HttpServletResponse response, byte[] dt) {
        commonto("text/html", response, dt);
    }

  
  
    //输出Pdf
  public static void toPdf(HttpServletResponse response, byte[] dt) {
        commonto("application/pdf", response, dt);
  }

  
  
  //通用转换
  public static void commonto(String type, HttpServletResponse response, byte[] dt) {
        try {
            response.setContentType(type);
            response.setContentLength(dt.length);
            ServletOutputStream ouputStream = response.getOutputStream();
            ouputStream.write(dt, 0, dt.length);
            ouputStream.flush();
            ouputStream.close();
        } catch (IOException ex) {
            Logger.getLogger(SevreletHelper.class.getName()).log(Level.SEVERE, "输出HttpServletResponse失败", ex);
        }
    }
}
