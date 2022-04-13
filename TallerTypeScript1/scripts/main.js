import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avgSeason");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) { return avgSeasons += serie.seasons; });
    return (avgSeasons / series.length);
}
