// This file contains core functions for interaction with MetroUI

const navBarId = "fmApp-navBar";
const tabHolderId = "fmApp-tabHolder";
const contentHolderId = "fmApp-contentHolder";
function addMenuTab(tabName,sectionId){
	$("#"+tabHolderId).append('<li><a href="#'+sectionId+'">'+tabName+'</a></li>');
	addSection(sectionId)
}
function addSection(sectionId){
	$("#"+contentHolderId).append('<div class="section" id="'+sectionId+'"></div>');
}
function addRibbonButton(sectionId,icon,caption,bid,oc){
	$('#'+sectionId).append('<button class="ribbon-button" id="'+bid+'" onclick="'+oc+'()"><span class="icon">'+icon+'</span><span class="Caption">'+caption+'</span></button>');
}
function addGroup(sectionId,groupId,groupName){
	$("#"+sectionId).append('<div class="group" id="'+groupId+'"><span class="title">'+groupName+'</span></div>');
}
function pageInit(){
	$('#'+tabHolderId+'>li:first-child a').click();
	$('#'+navBarId).hide();
	window.setTimeout(function(){
		$('#loader').hide();
		$('#'+navBarId).show().addClass('animated fadeInDown');
	},0);
}
function input(label,type,id){
        return '<input type="'+type+'" data-role="input" data-prepend="'+label+'" id="'+id+'"><br />';
}
function submit(id,text){
        return '<input type="button" id="'+id+'" value="'+text+'" class="button success" />';
}
