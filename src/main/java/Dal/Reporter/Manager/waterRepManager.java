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
        //设置一个标题
        Map pars=new HashMap();
        pars.put("reptitle", rwCig.title);
        RepManagerImp<Td> rep=new  RepManagerImp<Td>(rwCig.RepPath,pars,data);
        
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
