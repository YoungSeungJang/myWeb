
const key = 'b9fb0a707612ca100aced9353e597be3';
// let itemPerPage = 3;
// let curPage = 1;


$('#search').click(function(){
	let name = document.querySelector('input').value.trim();

	let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${name}`;
  $.ajax({
    url: url,
    type: 'GET',
    cache: false,
    success: function (data, status) {
      if (status == 'success') {
		console.log(data.movieListResult.movieList);
		parseJSON(data);
	  }
    },
  });
});


function parseJSON(data){
	
	const table = [];
    table.push("<tr><th>영화</th><th>영화개봉일</th><th>장르</th></tr>");

	for(row of data.movieListResult.movieList){
		table.push(`
			<tr class="searchMovie">
				<td>${row.movieNm}(${row.movieNmEn})</td>
				<td>${row.openDt}</td>
				<td>${row.genreAlt}</td>
			</tr>
		`);
	}
    document.getElementById('response').innerHTML = table.join('\n');
}