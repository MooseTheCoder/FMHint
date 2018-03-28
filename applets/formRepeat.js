$(document).ready(function(){
        addRibbonButton('section_fm_g1','<span class="mif-forward mif-2x fg-blue"></span>','Repeat','formRepeat','formRepeat');
});
var formRepeat_AIVal = 1;
function formRepeat(){
	$('#workArea').append('<div style="border:1px solid black;" data-role="window" id="formRepeat_Window" data-title="Repeat" data-btn-max="false" data-resizable="false" data-drag-area="html"><textarea id="formRepeat_source" placeholder="Section Source" style="width:500px;"></textarea><button onclick="formRepeat_render()">Render</button><div id="formRepeat_render"></div><textarea id="formRepeat_out" style="width:500px;"></textarea></div>');
	formRepeat_AIVal = 1;
}
function formRepeat_render(){
	$('#formRepeat_render').html($('#formRepeat_source').val());
	formRepeat_AIVal = 1;
}
$(document).on('mousedown','#formRepeat_Window #formRepeat_render *',function(){
	var elementId = $(this)[0].id;
	$('#formRepeat_Window #'+elementId).html('{{FIELD '+formRepeat_AIVal+' }}');
	formRepeat_AIVal++;
	formRepeat_out();
});
function formRepeat_out(){
	$('#formRepeat_out').text($('#formRepeat_render').html());
}
