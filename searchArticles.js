const articles= [
{articleFileName:'article50.html', tags:'introducing printmatrix label maker for mac',articleTitle:'Introducing PrintMatrix Label Maker for Mac',articleDescription:'PrintMatrix is an advanced label designer with support for mail merge, data import, automation tags...'},
{articleFileName:'article51.html', tags:'how to change to a different sized label',articleTitle:'How to change to a different sized label',articleDescription:'To change to a different sized label, go to  Toolbar > Label Size...'},
{articleFileName:'article52.html', tags:'how to add a picture into a label design',articleTitle:'How to add a picture into a label design',articleDescription:'To add photos:  Using your favorite image editor, resize your photo so it fits...'},
{articleFileName:'article53.html', tags:'how to quickly create a full sheet of the same labels using "fill all"',articleTitle:'How to quickly create a full sheet of the same labels using "Fill All"',articleDescription:'Enter address into the first label (row 1, column 1)  Go to Toolbar and...'},
{articleFileName:'article54.html', tags:'how to delete an unwanted label page',articleTitle:'How to delete an unwanted label page',articleDescription:'Go to Toolbar > Settings  Choose "Delete current page" (this button is only visible...'},
{articleFileName:'article55.html', tags:'how to import label data from a csv file',articleTitle:'How to import label data from a CSV file',articleDescription:'Step 1. Prepare import data and save it in CSV format  One row per...'},
{articleFileName:'article56.html', tags:'how to use automation tags in labels',articleTitle:'How to use automation tags in labels',articleDescription:'Automation tags can be used in labels to generate sequential numbers, random numbers, unique identifiers,...'},
{articleFileName:'article57.html', tags:'how to print labels in "landscape" mode (rotated 90 degrees)?',articleTitle:'How to print labels in "landscape" mode (rotated 90 degrees)?',articleDescription:'To rotate print canvas:  Go to Toolbar > Label Size  Select the label...'},
{articleFileName:'article58.html', tags:'how to add an auto generated number counter into a label',articleTitle:'How to add an auto generated number counter into a label',articleDescription:'Generate sequential numbers using the [#] automation tag.    Customize number tag generation:...'},
{articleFileName:'article59.html', tags:'how to include a random number tag into a label design',articleTitle:'How to include a random number tag into a label design',articleDescription:'Generate random numbers using the [#R] automation tag.    Customize random number generation...'},
{articleFileName:'article60.html', tags:'how to add a new label page',articleTitle:'How to add a new label page',articleDescription:'To add a new label page:  Toolbar > Add Page    To...'},
{articleFileName:'article61.html', tags:'how to quickly generate a page of sequential number counters using automation tags',articleTitle:'How to quickly generate a page of sequential number counters using Automation Tags',articleDescription:'Start a new blank document  Enter [#] into the first label  Go to...'},
{articleFileName:'article62.html', tags:'how to save and reopen saved labels',articleTitle:'How to save and reopen saved labels',articleDescription:'Save labels:  Go to File Menu and select "Save"    Open saved...'},
{articleFileName:'article63.html', tags:'how to change label paper size',articleTitle:'How to change label paper size',articleDescription:'Go to Toolbar and select "Label Size"  Update paper size drop down list, select...'},
]


const searchResult=document.querySelector('.searchResult');
const searchValue=document.querySelector('.input');

function performSearch(){
	let value = searchValue.value
	if (value && value.trim().length > 0) {

		value = value.trim().toLowerCase()


		let results = articles.filter(article => {
			return article.tags.includes(value)
		})


		if (results.length > 0) {
			searchResult.innerHTML = "This is the search result for \"" + value + "\":";
		}
		else {
			searchResult.innerHTML = "No search results returned for \"" + value + "\".";
		}

		setList(results)
	}
	else {
		searchResult.innerHTML = "";
	}
}

function search(element) {
	if (event.keyCode == 13) {
		performSearch();
	}
}

function setList(results){
	
	searchResult.innerHTML += "<ul>";
		
	for (const article of results){
		searchResult.innerHTML += "<li><a href='"+article.articleFileName+"'>"+article.articleTitle+"</a>";	
	}

	searchResult.innerHTML += "</ul>";
}
