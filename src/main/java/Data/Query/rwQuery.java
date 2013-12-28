/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Data.Query;

import java.util.Date;

/**
 *
 * @author 尔康
 * @param <Tq> 其它参量类型
 */
public class rwQuery<Tq> {
    //测站编号
    public String[] stcds;
    //有关时间的参量
    public Date[] timepars;
    //其它参量
    public Tq pars;
}
