/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 package Dal.Reporter;
import net.sf.jasperreports.engine.export.*;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
 import waterRep.Waterlevelforperiodoftime;
        
/**
 *
 * @author 尔康
 */
public class Water {
    
public static byte[] getRep_Waterlevelforperiodoftime() throws JRException{
    //模拟数据
    List<Waterlevelforperiodoftime> demodata =new ArrayList<Waterlevelforperiodoftime>();
   waterRep.Waterlevelforperiodoftime ss=new waterRep.Waterlevelforperiodoftime();
   ss.setHour(1);
   demodata.add(ss);
    
    //报表参数
    Map pars=new HashMap();
    //pars.put("rep_title", "test");
    
    //输出html
    JRHtmlExporter htmlexp =new JRHtmlExporter();
    
    //输出
    ByteArrayOutputStream os = new ByteArrayOutputStream();
    
    JRBeanCollectionDataSource ds= new JRBeanCollectionDataSource(demodata);
    
    //填充数据
    JasperPrint jp =JasperFillManager.fillReport("C:\\MrLin\\JavaProj\\WaterSource\\src\\main\\webapp\\resources\\WaterResource-rep\\water\\Waterlevelforperiodoftime\\Waterlevelforperiodoftime.jasper",pars,ds);
    
   // htmlexp设置
    htmlexp.setParameter( JRHtmlExporterParameter.IS_USING_IMAGES_TO_ALIGN, false);
    htmlexp.setParameter(JRExporterParameter.JASPER_PRINT, jp);
    htmlexp.setParameter(JRExporterParameter.CHARACTER_ENCODING, "GBK");
    htmlexp.setParameter(JRExporterParameter.OUTPUT_STREAM, os);
    htmlexp.exportReport();
    byte[] bytes = os.toByteArray();
    return bytes;
};
  
}
