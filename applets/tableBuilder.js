$(document).ready(function(){
	addRibbonButton('section_tables_g1','<span class="mif-table mif-2x fg-green"></span>','Builder','tableBuilder','tableBuilder');
});
var tableBuilder_tableSelectionArray=[];
var tableBuilder_tableCanDraw = false;
function tableBuilder(){
        $('#workArea').append('<div style="border:1px solid black;" id="tableBuilder" data-role="window" data-title="Table Builder" data-drag-area="html" data-resizable="false" data-btn-max="false">'
		+'<input type="text" id="tableBuilder_tableRows" placeholder="Rows" />'
		+'<input type="text" id="tableBuilder_tableCols" placeholder="Cols" />'
		+'<button onclick="tableBuilder_build()" class="menuButton"><span class="mif-pencil mif-2x fg-black"></span></button>'
		+'<button onclick="tableBuilder_tableMerge(\'colspan\')" class="menuButton"><span class="mif-arrow-left mif-2x fg-black"></span><span class="mif-arrow-right mif-2x fg-black"></span></button>'
		+'<button onclick="tableBuilder_tableMerge(\'rowspan\')" class="menuButton"><span class="mif-arrow-down mif-2x fg-black"></span></button>'
		+'<button onclick="tableBuilder_reset()" class="menuButton"><span class="mif-cancel mif-2x fg-black"></span></button>'
		+'<button class="menuButton" onclick="tableBuilder_cellTextAlign(\'left\')"><span class="mif-paragraph-left mif-2x gf-black"></span></button>'
		+'<button class="menuButton" onclick="tableBuilder_cellTextAlign(\'center\')"><span class="mif-paragraph-center mif-2x gf-black"></span></button>'
		+'<button class="menuButton" onclick="tableBuilder_cellTextAlign(\'right\')"><span class="mif-paragraph-right mif-2x gf-black"></span></button>'
		+'<br /><br /><center><div id="tableBuilder_table" style="width:650px; height:650px;"></div></center>'
		+'<textarea id="tableBuilder_tableFinalSource"></textarea></div>');
}
function tableBuilder_updateFinalSource(){
        $('#tableBuilder_tableFinalSource').text($('#tableBuilder_table').html());
}
function tableBuilder_build(){
        tableBuilder_tableSelectionArray=[];
        $('#tableBuilder_table').html(renderGrid($('#tableBuilder_tableRows').val(),$('#tableBuilder_tableCols').val()));
        tableBuilder_updateFinalSource();
}
function tableBuilder_reset(){
        tableBuilder_tableSelectionArray=[];
}
function renderGrid(r,c){
        var currentRow = 0;
        var currentCol = 0;
        var tableString = '<table border="1" style="width:500px;" cellspacing="0">';
        while(currentRow < r){
                tableString+='<tr>';
                        while(currentCol < c){
                                tableString+='<td id="r'+currentRow+'-c'+currentCol+'"></td>';
                                currentCol++;
                        }
                        currentCol=0;
                        tableString+='</tr>'
                        currentRow++;
        }
        tableString+='</table>';
        return tableString;
}
function tableBuilder_tableMerge(type){
        var mainEl = tableBuilder_tableSelectionArray[0];
        var spanSize = tableBuilder_tableSelectionArray.length;
        tableBuilder_tableSelectionArray.splice(0,1);
        $.each(tableBuilder_tableSelectionArray,function(key){
                $('#tableBuilder #'+tableBuilder_tableSelectionArray[key]).remove();
        });
        $('#tableBuilder #'+mainEl).attr(type,spanSize);
        $('#tableBuilder #'+mainEl).css('background-color','rgba(0,0,0,0)');
        tableBuilder_tableSelectionArray=[];
        tableBuilder_updateFinalSource();
}
function tableBuilder_cellTextAlign(align){
	$.each(tableBuilder_tableSelectionArray,function(key){
		$('#tableBuilder #'+tableBuilder_tableSelectionArray[key]).css('text-align',align);
	});
	tableBuilder_tableSelectionArray=[];
	tableBuilder_updateFinalSource();
}
$(document).on('mousedown','#tableBuilder',function(){
        tableBuilder_tableCanDraw = true;
});
$(document).on('mouseup','*',function(){
        tableBuilder_tableCanDraw = false;
});
$(document).on('mousedown','#tableBuilder #tableBuilder_table table td',function(){
        tableBuilder_tableSelectionArray.push($(this).attr('id'));
});
$(document).on('mouseenter','#tableBuilder #tableBuilder_table table td',function(){
        if(tableBuilder_tableCanDraw === true){
                tableBuilder_tableSelectionArray.push($(this).attr('id'));
        }
        $(this).css('background-color','rgba(255,234,167,1)');
});
$(document).on('mouseleave','#tableBuilder #tableBuilder_table table td',function(){
        if(tableBuilder_tableCanDraw === false){
                $(this).css('background-color','rgba(0,0,0,0)');
        }
});
$(document).on('dblclick','#tableBuilder #tableBuilder_table table td',function(){
	var elId = $(this).attr('id');
	vex.dialog.prompt({
		message: 'Cell Value',
		placeholder: 'Enter Here',
		callback: function (value) {
			$('#'+elId).html(value);
			tableBuilder_updateFinalSource();
		}
	});
        tableBuilder_tableSelectionArray=[];
});
