$(document).ready(function(){
	addRibbonButton('section_tables_g1','<span class="mif-palette mif-2x fg-orange"></span>','Colors','tableColors','tableColors');
});
function tableColors(){
        $('#workArea').append('<div id="tableColors" style="border:1px solid black;" data-role="window" data-title="Colors" data-drag-area="html" data-resizable="false" data-btn-max="false"><input type="text" id="tableColors_tableSource" placeholder="Table Source" /><button onclick="tableColors_renderTable()" class="menuButton"><span class="mif-pencil mif-2x fg-black"></span></button><input type="text" id="tableColors_bg" placeholder="Background" /><input type="text" id="tableColors_color" placeholder="Text Color" /><br /><br /><center><div id="tableColors_tableRender" style="width:650px; height:650px;"></div></center><textarea id="tableColors_tableOut"></textarea></div>');
				$("#tableColors_color").spectrum({
					color: "white",
					chooseText: "Text Color",
					showInput : true,
					preferredFormat : "hex"
				});
				$("#tableColors_bg").spectrum({
					color: "black",
					chooseText: "Background Color",
					showInput : true,
					preferredFormat : "hex"
				});
}
function tableColors_renderTable(){
        $('#tableColors_tableRender').html($('#tableColors_tableSource').val());
}
function tableColors_updateOut(){
        $('#tableColors_tableOut').text($('#tableColors_tableRender').html());
}
$(document).on('mousedown','#tableColors #tableColors_tableRender table td',function(){
        $(this).css('background-color',$('#tableColors_bg').val());
        $(this).css('color',$('#tableColors_color').val());
        tableColors_updateOut();
});
