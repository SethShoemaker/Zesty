$(document).ready((function(){function e(e){"show"==e&&($("#screen-overlay").show(),$("#mobile-search").css("display","flex")),"hide"==e&&($("#screen-overlay").hide(),$("#mobile-search").hide())}function i(e){"show"==e&&($("#screen-overlay").show(),$("#mobile-profile").css("display","flex")),"hide"==e&&($("#screen-overlay").hide(),$("#mobile-profile").hide())}$("#mobile-search-show").on("click",(function(){e("show")})),$("#mobile-search-hide").on("click",(function(){e("hide")})),$("#mobile-profile-show").on("click",(function(){i("show")})),$("#mobile-profile-hide").on("click",(function(){i("hide")})),$("#screen-overlay").on("click",(function(){e("hide"),i("hide")}))}));