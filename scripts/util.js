function setMainContainer(){	
	// Setting the mainContainer's width and height
	document.getElementById("mainContainer").style.width = window.outerWidth
	document.getElementById("mainContainer").style.height = window.outerHeight;
}

function toggleActive(checkBoxIndex, overrideFlag){
	var filterCategory = document.getElementsByClassName("filterCategories")[0];
	var filterCategoryList = filterCategory.getElementsByTagName("li");
	
	if(filterCategoryList[checkBoxIndex].getElementsByClassName("customCheckBox")[0] != undefined){
		filterCategoryList[checkBoxIndex].getElementsByClassName("customCheckBox")[0].className = "customCheckBoxChecked";
	}
	else if(filterCategoryList[checkBoxIndex].getElementsByClassName("customCheckBoxChecked")[0] != undefined){
		filterCategoryList[checkBoxIndex].getElementsByClassName("customCheckBoxChecked")[0].className = "customCheckBox";
	}
}

function displaySearchResults(){
	var filterQuery = document.getElementById("filterQuery").value;
	if(filterQuery != ""){
		// Display count
		document.getElementById("filterResult").innerHTML = "35 <b>Search Results</b> for \"" + filterQuery + "\"";
		document.getElementsByClassName("resultContent")[0].style.display = "block";
		
		// Checkboxes
		var filterCategory = document.getElementsByClassName("filterCategories")[0];
		var filterCategoryList = filterCategory.getElementsByTagName("li");
		
		for(var i=0; i< filterCategoryList.length; i++){
			if(filterCategoryList[i].innerHTML.indexOf('Todos') != -1
				|| filterCategoryList[i].innerHTML.indexOf('Discussions') != -1
				|| filterCategoryList[i].innerHTML.indexOf('Files') != -1){
					filterCategoryList[i].getElementsByClassName("customCheckBox")[0].className = "customCheckBoxChecked";
				}
		} 
		
		// Highlight filterQuery value in the entire of result
		var resultContent = document.getElementsByClassName("resultContent")[0].innerHTML;
		if(resultContent.indexOf(filterQuery) != -1){
			// code to highlight filtered text
			var resultText = resultContent.split("\n");
			var changedContent = "";
			for(var j=0;j <resultText.length; j++){
				if(resultText[j].indexOf(filterQuery) != -1){
					var startString = resultText[j].split(filterQuery)[0];
					var endString = resultText[j].split(filterQuery)[1];
					if(!endString.startsWith('\\') && !startString.endsWith('"')){
						resultText[j] = resultText[j].replace(filterQuery, "<span class='highlightText'>" + filterQuery + "</span>");
					}
				}
				changedContent = changedContent + resultText[j];
			}
			document.getElementsByClassName("resultContent")[0].innerHTML = changedContent;
		}
	}
}


function addActiveClass(index){
	// navigation menu item gets its highlight class
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

function resetValues(id){
	// Clear out values and forms when navigating between menu items
	if(id!="searchPanel") document.getElementById("searchPanel"). style.display = "none";
	document.getElementsByClassName("resultContent")[0].style.display = "none";
	document.getElementById("filterQuery").value= "";
	
	var filterCategory = document.getElementsByClassName("filterCategories")[0];
	var filterCategoryList = filterCategory.getElementsByTagName("li");
	for(var i=0; i< filterCategoryList.length; i++){
		if(filterCategoryList[i].getElementsByClassName("customCheckBoxChecked")[0] != undefined){
			filterCategoryList[i].getElementsByClassName("customCheckBoxChecked")[0].className = "customCheckBox";
		}
	}
}
	
function displayPanel(id, index){
	// Display the new panel for a new menu item
	resetValues(id);
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

