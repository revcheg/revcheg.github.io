$('<img class=flagicon src="img/'+$("select#languageSelector").val()+'.svg">').insertAfter("#languageSelector");
$("select#languageSelector").change(function(){
	$(".flagicon").attr("src", 'img/'+$("select#languageSelector").val()+'.svg');
	});