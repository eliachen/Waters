/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Engineer.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/** 
 *
 * @author 尔康
 */
@Controller
public class EngineerController {
    
    @RequestMapping(value = "/InfMapPumpAndGate.do",method = RequestMethod.GET)
    public ModelAndView InfMapPumpAndGate(){
      return new ModelAndView("/InfMap/InfMapPumpAndGate");
    };
    
    @RequestMapping(value = "/InfMapRiverAndReservoir.do",method = RequestMethod.GET)
    public ModelAndView InfMapRiverAndReservoir(){
      return new ModelAndView("/InfMap/InfMapRiverAndReservoir");
    };
    
    @RequestMapping(value = "/InfDataPumpAndGate.do",method = RequestMethod.GET)
    public ModelAndView InfDataEngineer(){
      return new ModelAndView("/Engineer/InfDataPumpAndGate");
    };
    
    
     @RequestMapping(value = "/InfChartswAndkrQuery.do",method = RequestMethod.GET)
    public ModelAndView InfChartswAndkrQuery(){
      return new ModelAndView("/InfChart/InfChartswAndkrQuery");
    };
    
      @RequestMapping(value = "/InfChartswAndllQuery.do",method = RequestMethod.GET)
    public ModelAndView InfChartswAndllQuery(){
      return new ModelAndView("/InfChart/InfChartswAndllQuery");
    };
    
    
    

    
}
