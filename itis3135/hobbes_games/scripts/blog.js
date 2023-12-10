let data = [];
let blog = 0;

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

function request_data() {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            document.getElementById('blog').className = "";
            document.getElementById('loading').className = "hidden";
            update_content();
        }
    };
    req.open('GET', './scripts/blog.json');
    req.send();
}


request_data();

function update_content() {
    document.getElementById('title').innerText = data[blog].title;
    document.getElementById('date').innerText = data[blog].date;
    document.getElementById('text').innerHTML = data[blog].content;

    if (blog == 0) {
        nextButton.className = "navdisabled";
        nextButton.onclick = null;
    } else {
        nextButton.className = "paging";
        nextButton.onclick = next;
    }

    if (blog == data.length - 1) {
        previousButton.className = "navdisabled";
        previousButton.onclick = null;

    } else {
        previousButton.className = "paging";
        previousButton.onclick = previous;
    }
}

function next() {
    blog -= 1;
    update_content();
}

function previous() {
    blog += 1;
    update_content();
}

nextButton.onclick = next;

previousButton.onclick = previous;