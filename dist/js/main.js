$(function(){$(".carousel").carousel({interval:5500}),$("#carouselButton").click(function(){$("#carouselButton").children("i").hasClass("fa-pause")?($(".carousel").carousel("pause"),$("#carouselButton").children("i").removeClass("fa-pause"),$("#carouselButton").children("i").addClass("fa-play")):($(".carousel").carousel("cycle"),$("#carouselButton").children("i").removeClass("fa-play"),$("#carouselButton").children("i").addClass("fa-pause"))}),$("#reserveButton").click(function(){$("#reserveModal").modal("show")}),$("#logicButton").click(function(){$("#loginModal").modal("show")})});