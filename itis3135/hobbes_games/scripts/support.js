const bar = document.getElementById('current');

function request_data() {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const amount = Number(JSON.parse(this.responseText).amount);
            bar.style = "width: calc(" + amount + " / 1000 * 100%); transition: width 2s;"
        }
    };
    req.open('GET', 'api/amount');
    req.send();
}


request_data();