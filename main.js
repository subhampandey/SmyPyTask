var settings = {
    "url": "http://ravigitte.pythonanywhere.com/solve/?exp=integrate(2*x%20+%20y,x)",
    "method": "GET",
    "timeout": 0,
};
$.ajax(settings).done(function (response) {

    var str = response[2].value;
  
    statement(response[0], "id1");
    simplification(response[1], "id2");
    steps(response[2], "id3");
    root(response[4], "id5");
    derivative(response[5], "id6");
    simplification(response[6], "id7");
    simplification(response[7], "id8");
   
    



});

function statement(data,id) {
    var title = document.createElement("h3");
    var input = document.createElement("h4");
    var output = document.createElement("p");
    //console.log(id)
    title.innerHTML = data.title + ":";
    input.innerHTML = data.input;
    output.innerHTML = data.output;
    document.getElementById(id).appendChild(title);
    document.getElementById(id).appendChild(input);
    document.getElementById(id).appendChild(output);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub,id]);
}
function simplification(data,id) {
    var title = document.createElement("h3");
    var output = document.createElement("p");
    //console.log(id)
    title.innerHTML =data.title + ":";
    output.innerHTML = data.output;
    document.getElementById(id).appendChild(title);
    document.getElementById(id).appendChild(output);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, id]);
}
function steps(data, id) {
    var title = document.createElement("h3");
    var output = document.createElement("p");
    title.innerHTML = data.title + ":";
    output.innerHTML = data.output;
    document.getElementById(id).appendChild(title);
    document.getElementById(id).appendChild(output);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, id]);
}
function root(data, id) {
    steps(data, id);
}
function derivative(data, id) {
    steps(data, id);
}
