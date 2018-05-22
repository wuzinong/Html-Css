$(function(){

	//左侧子菜单效果

	//初始化显示第一个的子菜单
	$("#min-nav").find("dl").find("dd").hide();
	$("#min-nav").find("dl").eq(0).find("dd").slideDown().end().find("dt").find(".icon").addClass("minus");
	$("#min-nav").find("dl").eq(0).siblings().find("dt").find(".icon").addClass("plus");
	$("#min-nav").find("dl").eq(0).find("dt").find(".icon").addClass("minus")
	//设置click事件
	$("#min-nav").find("dl").each(function( index ){
		var _this = $(this);
		_this.find("dt").click(function(){
			//_this.find("dd").slideToggle();	
			//判断子菜单是显示还是隐藏
			var that = $(this);
			var dd = _this.find("dd");
			if( dd.css("display") == "none" ){
				dd.slideDown();	
				that.find(".icon").removeClass("plus").addClass("minus");
			}else if( dd.css("display") == "block" ){
				dd.slideUp();
				that.find(".icon").removeClass("minus").addClass("plus");
			}
		});

	});

});