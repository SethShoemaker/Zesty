$((function(){function e(e){"show"==e&&($("#editContainer").css("display","flex"),$("#screen-overlay").show(),$("body").css("overflow","hidden")),"hide"==e&&($("#editContainer").hide(),$("#screen-overlay").hide(),$("body").css("overflow","scroll"))}$("#updateBtn").on("click",(function(){e("show")})),$("#updateFormCancel").on("click",(function(n){n.preventDefault(),e("hide")})),$("#avatar").on("change",(function(){var e=this.files[0],n=new FileReader;n.onload=function(e){$("#avatarPreview").attr("src",e.target.result)},n.readAsDataURL(e)}))}));