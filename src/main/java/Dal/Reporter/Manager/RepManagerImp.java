/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRHtmlExporter;
import net.sf.jasperreports.engine.export.JRHtmlExporterParameter;
import net.sf.jasperreports.engine.export.JRXlsExporter;
import net.sf.jasperreports.engine.export.JRXlsExporterParameter;



/**
 * @author 尔康
 */
public class RepManagerImp <Td> implements RepManagerInterface {
    private List<Td> listdata;
    private Map pars;
    private String path;
    private InputStream ins;
    
    //报表的初始化方式
    private int model=0;
    
    
    public RepManagerImp(String _path,Map _pars,List<Td> _listdata) {
      listdata=_listdata;
      pars=_pars;
      path=_path;
      model=0;
    };
    
    public RepManagerImp(InputStream _ins,Map _pars,List<Td> _listdata) {
      listdata=_listdata;
      pars=_pars;
      ins=_ins;
      model=1;
    }

    @Override
    public byte[] gethtml() {
    //输出html
    JRHtmlExporter htmlexp =new JRHtmlExporter();
    
    //输出字节流
    ByteArrayOutputStream os = new ByteArrayOutputStream();
    
    //通过bean序列化好的数据
    JRBeanCollectionDataSource ds= new JRBeanCollectionDataSource(listdata);
    
    //填充数据
    JasperPrint jp;
        try {
              //jp = JasperFillManager.fillReport(path,pars,ds);
              jp = GetJp(ds);
              // htmlexp设置
               htmlexp.setParameter(JRHtmlExporterParameter.IS_USING_IMAGES_TO_ALIGN, false);
               htmlexp.setParameter(JRExporterParameter.JASPER_PRINT, jp);
               htmlexp.setParameter(JRExporterParameter.CHARACTER_ENCODING, "GBK");
               htmlexp.setParameter(JRExporterParameter.OUTPUT_STREAM, os);
               htmlexp.exportReport();
               byte[] bytes = os.toByteArray();
               return bytes;
            } catch (JRException ex) {
                Logger.getLogger(RepManagerImp.class.getName()).log(Level.SEVERE, "报表输出转换错误-html", ex);
               return null;
        }
    }

    @Override
    public byte[] getexcel() {

        //输出Excel
        JRXlsExporter exporter = new JRXlsExporter();
        //输出字节流
        ByteArrayOutputStream oStream = new ByteArrayOutputStream();
        //通过bean序列化好的数据
        JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(listdata);

        try {
             //填充数据
            JasperPrint  jp = GetJp(ds);
            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jp);
            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, oStream);
            exporter.setParameter(JRXlsExporterParameter.IS_REMOVE_EMPTY_SPACE_BETWEEN_ROWS, Boolean.TRUE);
            exporter.setParameter(JRXlsExporterParameter.IS_ONE_PAGE_PER_SHEET, Boolean.FALSE);
            exporter.setParameter(JRXlsExporterParameter.IS_WHITE_PAGE_BACKGROUND, Boolean.FALSE);
            exporter.exportReport();
            byte[] bytes = oStream.toByteArray();
            return bytes;

        } catch (JRException ex) {
            Logger.getLogger(RepManagerImp.class.getName()).log(Level.SEVERE, "报表输出转换错误-excel", ex);
            return null;
        }
        
    };
    

    @Override
    public byte[] getpdf() {
        //通过bean序列化好的数据
        JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(listdata);
        
        //填充数据
        JasperPrint jp;
        try {
            jp = GetJp(ds);
            byte[] bytes = JasperExportManager.exportReportToPdf(jp);
            return bytes;
        } catch (JRException ex) {
            Logger.getLogger(RepManagerImp.class.getName()).log(Level.SEVERE, "报表输出转换错误-pdf", ex);
            return null;
        }
    }
    
    
    //返回一个Jp,区分为Path或InStraem
    private JasperPrint GetJp(JRBeanCollectionDataSource data) throws JRException{
        switch (model){
            case 0:
                return JasperFillManager.fillReport(path,pars,data);
            case 1:
                return JasperFillManager.fillReport(ins,pars,data);
        }
        return null;
    }
}
