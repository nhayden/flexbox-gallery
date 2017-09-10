$(function() {
  $(":button").click(function() {
    const ELT = $('.gallery a:nth-child(3)');
    //console.log(ELT);
    ELT.toggleClass("hideThumb");
  });
  $(".minimizerButton").click(function() {
    const _this = $(this);
    // console.log(_this);
    if (_this.hasClass("fa-minus-square-o")) {
      _this.removeClass("fa-minus-square-o");
      _this.addClass("fa-plus-square-o");
    } else {
      _this.removeClass("fa-plus-square-o");
      _this.addClass("fa-minus-square-o");
    }
  });
  $("#minimize-filters").click(function() {
    const filterDiv = $(".filtering");
    filterDiv.toggleClass("hideFiltering");
  });
});
