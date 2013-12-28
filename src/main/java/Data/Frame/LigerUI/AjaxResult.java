/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Data.Frame.LigerUI;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

/**
 *
 * @author 尔康
 */
public class AjaxResult {

    public Object Data;
    public boolean IsError;
    public String Message;

    
    
    public static AjaxResult Success() {
        AjaxResult ar = new AjaxResult();
        ar.IsError = false;
        return ar;
    }

    
    public static AjaxResult Success(String Msg) {
        AjaxResult ar = new AjaxResult();
        ar.IsError = false;
        ar.Message = Msg;
        return ar;
    }

    
    
    public static AjaxResult Success(Object Data, String Msg) {
        AjaxResult ar = new AjaxResult();
        ar.IsError = false;
        ar.Message = Msg;
        ar.Data = Data;
        return ar;
    }

   
    
     public static AjaxResult Error() {
        AjaxResult ar = new AjaxResult();
        ar.IsError = true;
        return ar;
    }

      public static AjaxResult Error(String Msg) {
        AjaxResult ar = new AjaxResult();
        ar.IsError = true;
        ar.Message = Msg;
        return ar;
    }

   
   @Override
   public String toString(){
         Gson gson = new Gson();
         java.lang.reflect.Type type=new TypeToken<Object>(){}.getType();
         return gson.toJson(this);
   }
   
}
