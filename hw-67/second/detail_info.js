let indexLink  = 'https://restcountries.eu/rest/v2/name/';

function renderData(data) {
    const card_footer = $('.card-footer');
    const card_body = $('.card-body');
    data = [data];
    for(let i = 0; i <data.length;i++){
        let new_el = `<h5 class="card-title text-center" style="font-size: 24px">${data[i].name}</h5>
                      <p class="card-text">
                      <p>Столица : ${data[i].capital}.</p>
                      <p>Регион : ${data[i].region}.</p>
                      <p>Численность населения : ${data[i].population} человек.</p>
                      <p>Площадь : ${data[i].area} кв.м.</p>
                      </p>`;
        card_body.append(new_el);
        for (let temp=0; temp < data[i].borders.length; temp++)
        {
            border_new = `<a href="country.html?alpha=${data[i].borders[temp]}" class="btn btn-info mr-2"> ${data[i].borders[temp]}</a>`;
            card_footer.append(border_new)
        }
        card_footer.append('<p class="text-center"><a href="index.html" class="btn btn-success">Cписок стран</a> </p>')
    }
}

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

function generatePage(param) {
    indexLink  = 'https://restcountries.eu/rest/v2/alpha/' + param;
    return indexLink;
}

$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var param = urlParams.get('alpha');
    generatePage(param);
    jqueryLoadIndex();
});