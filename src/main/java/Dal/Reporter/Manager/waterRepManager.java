/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Reporter.Manager;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



/**
 * @author 尔康
 * @param <Td>
 */
public class waterRepManager<Td>{
    private rwRepCig rwCig;
    private List<Td> data;
    
    public waterRepManager(rwRepCig _rwCig,List<Td> _data) {
        this.rwCig=_rwCig;
        this.data=_data;
    };
    
    public byte[] GetData(){
        //设置一个标题,默认就一个标题
        Map rwpars=new HashMap();
        rwpars.put("reptitle", rwCig.title);
        
        
        //其它的参数
        if (!(rwCig.Pars == null)){
            rwpars.putAll(rwCig.Pars);      
        }
              
        RepManagerImp<Td> rep=new  RepManagerImp<Td>(rwCig.RepPath,rwpars,data);
        
        switch(rwCig.outModel){
            case Pdf:
               return rep.getpdf();
            case excel:
                 return rep.getexcel();
            case html:
                 return rep.gethtml();
        }
        return null;
    }
}
