lis = $("ul.sao-list>li")
for(i=0; i< lis.length; i++){
	l = jQuery(lis[i]);
	console.log(l)

	if (l.has("span").length == 0){
		l.prepend('<span class="glyphicon glyphicon-book"></span>')
	}
}

bts = $("ul.sao-btns").find("button[icon]")
for(i=0; i< bts.length; i++){
	l = bts[i]
	console.log(l)
	icon_name = l.getAttribute("icon");
	$(l).html('<span class="glyphicon glyphicon-'+ icon_name + '"></span>')
}
