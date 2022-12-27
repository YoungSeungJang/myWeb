
let key = 'b9fb0a707612ca100aced9353e597be3';
let $date = document.querySelector('input').value.trim();
	$date = $date.split('-').join('');

	let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${$date}`;
  $.ajax({
    url: url,
    type: 'GET',
    cache: false,
    success: function (data, status) {
      if (status == 'success') {
		console.log(data.boxOfficeResult.dailyBoxOfficeList);
		parseJSON(data);
	  }
    },
  });
$('button').click(function(){
	$date = document.querySelector('input').value.trim();
	$date = $date.split('-').join('');

	url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${$date}`;
  $.ajax({
    url: url,
    type: 'GET',
    cache: false,
    success: function (data, status) {
      if (status == 'success') {
		console.log(data.boxOfficeResult.dailyBoxOfficeList);
		parseJSON(data);
	  }
    },
  });
});


function parseJSON(data){

	const table = [];
    table.push("<tr><th>순위</th><th>영화명</th><th>영화개봉일</th><th>누적관객수</th></tr>");

	for(row of data.boxOfficeResult.dailyBoxOfficeList){
		table.push(`
			<tr>
				<td>${row.rank}</td>
				<td>${row.movieNm}</td>
				<td>${row.openDt}</td>
				<td>${row.audiAcc}</td>
			</tr>
		`);
	}
 
    document.getElementById('response').innerHTML = table.join('\n');
	
	
}