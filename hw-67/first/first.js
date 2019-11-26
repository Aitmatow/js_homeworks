const container = $('#container');
var intervalId = setInterval(function(){
    new_div = $('<div class="element">'+ Math.floor(Math.random() * Math.floor(21))+'</div>');container.append(new_div)
}, 2000);
