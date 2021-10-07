$(function() {

    var category = $('#gnb > li > a');
    category.click(function(e){
        e.preventDefault();
        /*$(this): 클릭한 a 태그 */
        var isVisible = $(this).next().is(':visible');
        
        if(isVisible){
            //서브메뉴가 보여짐 -> 닫기
            $(this).next().slideUp(200);
        }else{
            //서브메뉴가 안 보임 -> 열기
            $(this).next().slideDown(200);
        }
    });
 });