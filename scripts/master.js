function uniquifyAndSortStringArr(arr) {
  return Array.from(new Set(arr)).sort();
}

function generateSubjectsFilters() {
  let allSubjects = $(".thumblink").map(function() {
    return $(this).data("subject").split(" ");
  }).get();
  allSubjects = uniquifyAndSortStringArr(allSubjects);
  const SUBJECT_STRING_ARR = ['<a class="filter-item" data-subject="',
                          '" href="#">',
                          '</a>'];
  let htmlSubjects = allSubjects.map(function(subject) {
    return SUBJECT_STRING_ARR.join(subject);
  });
  htmlSubjects.unshift(
    '<a class="filter-item selected" data-subject="all" href="#">all categories</a>');
  return htmlSubjects;
}

function generateSourcesFilters() {
  let allSources = $(".thumblink").map(function() {
    return $(this).data("source").split(" ");
  }).get();
  allSources = uniquifyAndSortStringArr(allSources);
  const SOURCES_STRING_ARR = ['<a class="filter-item" data-source="',
                              '" href="#">',
                              '</a>'];
  let htmlSources = allSources.map(function(source) {
    return SOURCES_STRING_ARR.join(source);
  });
  htmlSources.unshift(
    '<a class="filter-item selected" data-source="all" href="#">all sources</a>');
  return htmlSources;
}

// writes filter items within filter groups based on data attributes in images
function writeFilters() {
  // generate subject filter links
  const SUBJECTSHTML = generateSubjectsFilters();
  $("#filter-subjects .filter-items").html(SUBJECTSHTML);
  // generate source filter links
  const SOURCESHTML = generateSourcesFilters();
  $("#filter-sources .filter-items").html(SOURCESHTML);
}

$(function() {
  writeFilters();

  $(".filter-item").click(function(e) {
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
