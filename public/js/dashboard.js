$((function(){function e(e){"show"==e&&($("#updateForm").css("display","flex"),$("#screen-overlay").show(),$("body").css("overflow","hidden")),"hide"==e&&($("#updateForm").hide(),$("#screen-overlay").hide(),$("body").css("overflow","scroll"))}$("#updateBtn").on("click",(function(){e("show")})),$("#updateFormCancel").on("click",(function(o){o.preventDefault(),e("hide")})),$("#screen-overlay").on("click",(function(){e("hide")})),$("#avatar").on("change",(function(){var e=this.files[0],o=new FileReader;o.onload=function(e){$("#avatarPreview").attr("src",e.target.result)},o.readAsDataURL(e)}))}));