$(document).ready(function(){
	addRibbonButton('section_fm_g1','<span class="mif-tablet mif-2x fg-green"></span>','BOX','boxEditor','boxEditor');
});
function boxEditor(){
        $('#workArea').append('<div style="border:1px solid black;" data-role="window" id="-window-buttons" data-title="BOX" data-drag-area="html" data-resizable="false" data-btn-close="true" data-btn-min="true" data-btn-max="false" class="p-2">'+input("App Text","text","appText")+input("BG Color","text","bgColor")+input("Size","text","fontSize")+input("Text","text","dispText")+input("Color","text","color")+input("Height","text","boxHeight")+'<button class="button success" onClick="boxMaker()">Generate</button><br /><textarea id="end" style="width:100%;"></textarea><div id="boxe"></div></div>');
}
function boxMaker(){
        var appText=$('#appText').val();
        var backgroundColor=$('#bgColor').val();
        var fontSize=$('#fontSize').val();
        var text=$('#dispText').val();
        var color=$('#color').val();
        var height=$('#boxHeight').val();
        var boxTextVal = appText+':BOX['+backgroundColor+','+fontSize+','+text+','+color+','+height+']BOX';
        $('#end').val(boxTextVal);
        $('#boxe').html('<center><div style="color:'+color+'; background-color:'+backgroundColor+'; font-size:'+fontSize+'px;">'+text+'</div></center>');
}

