$(document).ready(function(){
	$(".navMenuList li").find("a").each(function(){
		$(this).click(function(){
			$(".navMenuList li").each(function(){
				$(this).removeClass("navItemActive");	
			});
			$(this).parent().addClass("navItemActive");			
		});
	});
		
	$("#filterQuery").onEnter(function(){
		if($("#filterQuery").val() != ""){
			$("#filterResult").html("35 <b>Search Results</b> for \"" + $("#filterQuery").val() + "\"");
		}
	});
});

(function($) {
    $.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
            if (e.keyCode == 13) func.apply(this, [e]);    
        });               
        return this; 
     };
})(jQuery);

function displayPanel(id){
	$(".rightMenuTop").children().each(function(){if($(this).attr("id") != id) $(this).css("display", "none");});
	$("#"+id).css("display","block");
}

