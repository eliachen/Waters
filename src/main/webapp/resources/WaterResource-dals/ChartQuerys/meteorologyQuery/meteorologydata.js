/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(function(require,exports){
    
    //cig.assure 保证水位
    //cig.protect 安全水位
    //cig.hismax 历史最高
    exports.data={
                  container:'container',
                  stcd:'00000001',
                  stnm:'测试站1',
                  data:[{t:'2013-12-09',v:180},{t:'2013-12-10',v:213},{t:'2013-12-11',v:181},{t:'2013-12-12',v:178},
                        {t:'2013-12-13',v:201},{t:'2013-12-14',v:231},{t:'2013-12-15',v:186},{t:'2013-12-16',v:177}],
                  alm:212,
                  assure:201,
                  protect:220,
                  hismax:230
              };
            
});

