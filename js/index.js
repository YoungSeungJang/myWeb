const key = 'b9fb0a707612ca100aced9353e597be3';
const $table = document.querySelector('table');

// search 눌렀을때
$('#search').click(function () {
  let name = document.querySelector('input').value.trim();

  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${name}`;
  $.ajax({
    url: url,
    type: 'GET',
    cache: false,
    success: function (data, status) {
      if (status == 'success') {
        // console.log(data.movieListResult.movieList); 데이터 잘가져오나 확인
        parseJSON(data);
      }
    },
  });
});

function parseJSON(data) {
  if(data.movieListResult.totCnt == 0){
    $table.innerHTML = '해당데이터가 없습니다';
    $table.style.fontSize = '4rem';
    $table.style.height = '400px';
    $table.style.display = 'flex';
    $table.style.alignItems = 'center';
    $table.style.justifyContent = 'center';
    $table.style.color = 'black';
    $table.style.fontWeight = 'bold';
    console.log('성공');
  } else {
    $table.style.color = '';
    $table.style.height = '';
    $table.style.fontSize = '';
    $table.style.fontWeight = '';
    $table.style.display = '';
    $table.style.alignItems = '';
    $table.style.justifyContent = '';
    const table = [];
    table.push('<tr><th>영화</th><th>영화개봉일</th><th>장르</th></tr>');
  
    for (row of data.movieListResult.movieList) {
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
}

// input에 ENTER쳤을때
$('#searchInput').keyup(function (event) {
  if (event.keyCode == 13) {
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
  }
});
