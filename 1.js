(function($){    //($)防止$冲突
    $.fn.extend({   //jquery方法
　　　　　　 check: function() {
            console.log(this);
        }
        // uncheck: function() {
        //  return this.each(function() { this.checked = false; });
        // }
        });
    })(jQuery)
    $('.wrapper').check();