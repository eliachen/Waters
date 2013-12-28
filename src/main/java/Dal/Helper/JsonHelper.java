/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Dal.Helper;

import com.google.gson.Gson;
import java.lang.reflect.Type;

/**
 *
 * @author 尔康
 * json帮助类
 */
public class JsonHelper {
    //转为json
    public static String toJson(Object obj) {
        Gson gson = new Gson();
        return gson.toJson(obj);
    }

    //获取json
    public static <T extends Object> T fromJson(String str, Type typeOfT) {
        Gson gson = new Gson();
        return gson.fromJson(str, typeOfT);
    }
}
