var books = ['A_Feast_for_Crows', 'A_Dance_with_Dragons', 'The_Winds_of_Winter'];

$('.infobox-body').find('th:contains("Died")').parent('tr').remove();
$('.infobox-body').find('th:contains("Spouse")').parent('tr').remove();
$('.infobox-body').find('th:contains("Allegiance")').parent('tr').remove();
// $('.infobox-body').find('th:contains("Title")').parent('tr').remove();

$('.thumb.tright').remove();

books.forEach(function(book) {
    $('#' + book).parent('h3').nextUntil('h3', 'p').remove();
    $('#' + book).parent('h3').nextUntil('h3', 'table').remove();
    $('#' + book).parent('h3').remove();
});
