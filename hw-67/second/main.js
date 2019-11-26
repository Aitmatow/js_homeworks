const indexLink = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';


function renderData(data) {
    const tbody = $('tbody');
    for(let i = 1; i<=data.length;i++){
        new_el = `<tr>
                      <th scope="row">${i}</th>
                      <td class="land">${data[i-1].name}</td>
                      <td class="action"> <a href="country.html?alpha=${data[i-1].alpha3Code}" class="btn btn-info">Переход</a></td>
                  </tr>`;
        tbody.append(new_el);
    }
}

// function xhrParseData(event) {
//     let xhr = event.target;
//     if(xhr.status === 200)
//     {
//         data = JSON.parse(xhr.response);
//         renderData(data);
//     }
//     else{
//         console.log('Error')
//     }
// }

// function xhrLoadIndex(){
//     let xhr = new XMLHttpRequest();
//     xhr.onload = parseData;
//     xhr.open('GET', indexLink);
//     xhr.send();
// }

function jqueryParseData(response) {
    renderData(response);
}

function jqueryAjaxError() {
    console.log('error');
}

function jqueryLoadIndex(){
    $.ajax({
        url:indexLink,
        method:'GET',
        success: jqueryParseData ,
        error: jqueryAjaxError
    })
}

$(document).ready(function () {
    jqueryLoadIndex();
});