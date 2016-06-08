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
			$(".resultContent").css("display", "block")
			$(".filterCategories li").each(function(){
				if($(this).html().indexOf('Todos') != -1
					|| $(this).html().indexOf('Discussions') != -1
					|| $(this).html().indexOf('Files') != -1)
					{
						$(this).find("input[type='checkbox']").prop("checked", true)
					}
			});
		}
	});
	
	$("#mainContainer").css("width", $(window).width())
	$("#mainContainer").css("height", $(window).height())
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
	document.getElementById(id).style.display = 'block';
}

