import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avgSeason")!;

renderSeriesInTable(data);
avgSeasonsElm.innerHTML = `${getAvgSeasons(data)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
                           seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
  let avgSeasons: number = 0;
  series.forEach((serie) => avgSeasons += serie.seasons);
  return (avgSeasons/series.length);
}