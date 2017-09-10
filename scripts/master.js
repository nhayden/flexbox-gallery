$(function() {
  $(".filter-items").click(function(e) {
    e.preventDefault(); // don't let clicking filters trigger jumping
  })
  $(":button").click(function() {
    const ELT = $('.gallery a:nth-child(3)');
    //console.log(ELT);
    ELT.toggleClass("hideThumb");
  });
  let filtersCollapsed = false;
  $("#minimize-filters").click(function(e) {
    e.preventDefault();
    // toggle button and text
    const theButton = $("#minimize-filters-button");
    if (!filtersCollapsed) {
      theButton.removeClass("fa-minus-square-o");
      theButton.addClass("fa-plus-square-o");
      $("#minimize-filters-text").text("show filtering options")
    } else {
      theButton.removeClass("fa-plus-square-o");
      theButton.addClass("fa-minus-square-o");
      $("#minimize-filters-text").text("hide filtering options")
    }

    // hide filtering div
    const filterDiv = $(".filtering");
    filterDiv.toggleClass("hideFiltering");

    filtersCollapsed = !filtersCollapsed;

  });
});
