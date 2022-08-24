function showComments(button){
    console.log('show comments')
    comments = document.getElementsByClassName('Instagram-Comments-Copy')
    for (var i = 0; i < comments.length; i++){
        console.log(comments)
        comments[i].classList.remove('hide')
        comments[i].classList.add('show')
    }
}
function hideComments(button){
    comments = document.getElementsByClassName('Instagram-Comments-Copy')
    for (var i = 0; i < comments.length; i++){
        comments[i].classList.remove('show')
        comments[i].classList.add('hide')
        comments[i].setAttribute('onClick', 'showComments(this)')
    }
}

function commentClicked(comment){
    console.log('copy button clicked!')
    var target = comment.getAttribute('data-target');
    var endpoint = comment.getAttribute('data-endpoint');
    var message = comment.getAttribute('data-message');
    recordOutreach(endpoint, target, message, 'anonymous', function(res){
        console.log(res)
    })
}

function recordOutreach(endpoint, target, message, email, callback) {
    console.log(`Posting "${message}" from "${email}" to "${endpoint}"`)
    data = {
        "targets": [
            { "given_name": target }
        ],
        "person": {
            "email_addresses": [{ "address": email }]
        },
        "message": message
    }
    httpPostAsync(endpoint, data, function (res) {
        callback(res)
    })
}

function httpPostAsync(theUrl, data, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.onerror = function () {
    callback('Error')
    }
    xmlHttpReq.open("POST", theUrl, true); // true for asynchronous
    // set `Content-Type` header
    xmlHttpReq.setRequestHeader('Content-Type', 'application/json');
    xmlHttpReq.send(JSON.stringify(data));
}
function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
    xmlHttpReq.send(null);
  }

function updateCounters(){
    var counters = document.getElementsByClassName('Banks-Action-Counter-Feild');
    for (var i=0; i<counters.length; i++){
        var counterId = counters[i].getAttribute('data-counter-id');
        getActionCount(counterId, counters[i], function(count, counter){
            counter.innerHTML = count.toString();
            counter.classList.remove('loading')
        })
    }
}
function getActionCount(counterId, counter, callback){
    var url = `https://django-tweet-tool.herokuapp.com/anac/${counterId}/records`
    httpGetAsync(url, function(res){
        var countData = JSON.parse(res)
        callback(countData.total_records, counter)
    })
}
window.addEventListener("load", function(){
    updateCounters()
});