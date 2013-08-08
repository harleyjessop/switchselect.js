/**
** Switchselect 1.0
** No copyrights or licenses.
** @author:     @harleyjessop
** @repository: https://github.com/harleyjessop/boxtree.js
**
**/

(function($) {

    $.fn.switchselect = function(options){
    
        var defaults = {
            targetSelect:   this,
            targetOptions:  $(this).children('option'),
            switchMarkup:   '<label class="switch"><span><b><i class="icon-ban-circle"></i></b><b><i class="icon-ok"></i></b></span></label>',
        };

        var options = $.extend(defaults, options);

        var init = function(){
                var $ul = $("<ul/>").insertAfter(options.targetSelect);
                var baseId = "_" + $(options.targetSelect).attr("id");
                $(options.targetOptions).each(function(i) {
                    var $option = $(this);
                    var id = baseId + i;
                    var $li = $("<li/>").appendTo($ul);
                    var $switch = $(options.switchMarkup).attr('for', id ).appendTo($li);
                    var $checkbox = $("<input type='checkbox' id='" + id + "'/>").prependTo($switch).change(function() {
                        if ($(this).is(":checked")) {
                            $option.attr("selected", "selected");
                        } else {
                            $option.removeAttr("selected");
                        }
                    });
                    if ($option.is(":selected")) {
                        $checkbox.attr("checked", "checked");
                    }
                    $switch.after("<label for='" + id + "'>" + $option.text() + "</label>");
                });
            $(options.targetSelect).hide();
        };
        
        init();
    
    }   
 
})(jQuery); 
