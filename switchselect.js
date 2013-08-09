/**
** Switchselect 1.0
** No copyrights or licenses. Yay internet!
** @author:     @harleyjessop
** @repository: https://github.com/harleyjessop/switchselect.js
**
** Turns the horrible multiple select box into a nice list of checkboxes wrapped in a fancy CSS3 only switch.
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
                var id = baseId + i;// Gotta keep things matched up
                var $li = $("<li/>").appendTo($ul);
                var $switch = $(options.switchMarkup).attr('for', id ).appendTo($li);
                var $checkbox = $("<input type='checkbox' id='" + id + "'/>").prependTo($switch).change(function() {
                    // If hidden checkbox is checked then also select the hidden option. Switch state is controlled via CSS and based on checkbox state..
                    if ($(this).is(":checked")) { 
                        $option.attr("selected", "selected");
                    } else {
                        $option.removeAttr("selected");
                    }
                });
                // If hidden option is selected then also check the hidden checkbox. Just in case you want to pre select some stuff.
                if ($option.is(":selected")) {
                    $checkbox.attr("checked", "checked");
                }
                // Make the option text into a label and make it clickable too!
                $switch.after("<label for='" + id + "'>" + $option.text() + "</label>");
            });
            // Lets hide the old crappy multiple select box
            $(options.targetSelect).hide();
        };
        
        // Do it.
        init();
    
    }   
 
})(jQuery); 
