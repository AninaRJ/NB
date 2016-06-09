function setMainContainer(){
	document.getElementById("mainContainer").style.width = window.outerWidth
	document.getElementById("mainContainer").style.height = window.outerHeight;
}

function displaySearchResults(){
		if(document.getElementById("filterQuery").value != ""){
			document.getElementById("filterResult").innerHTML = "35 <b>Search Results</b> for \"" + $("#filterQuery").val() + "\"";
			document.getElementsByClassName("resultContent")[0].style.display = "block";
			
			var filterCategory = document.getElementsByClassName("filterCategories")[0];
			var filterCategoryList = filterCategory.getElementsByTagName("li");
			for(var i=0; i< filterCategoryList.length; i++){
				if(filterCategoryList[i].innerHTML.indexOf('Todos') != -1
					|| filterCategoryList[i].innerHTML.indexOf('Discussions') != -1
					|| filterCategoryList[i].innerHTML.indexOf('Files') != -1){
						filterCategoryList[i].getElementsByTagName("input")[0].checked = true;
					}
			}
		}
	};

function addActiveClass(index){
	var navigationList = document.getElementsByClassName("navMenuList")[0].getElementsByTagName("li");
	for(var listItem = 0; listItem < navigationList.length; listItem++){
		if(listItem != index){
			navigationList[listItem].className = '';
		}
		else{
			navigationList[listItem].className = "navItemActive";
		}
	}
}	
	
function displayPanel(id, index){
	if(id != ""){
		var displaySections = document.getElementsByClassName("rightMenuTop")[0].childNodes;
		for(var i=0;i <displaySections.length; i++){
			if(displaySections[i].tagName == 'DIV'){
				displaySections[i].style.display = "none";
			}
		}
		
		document.getElementById(id).style.display = 'block';
	}
	addActiveClass(index);
}

