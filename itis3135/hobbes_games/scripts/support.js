const bar = document.getElementById('current');

function request_data() {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const amount = Number(JSON.parse(this.responseText).amount);
            bar.style = "width: calc(" + amount + " / 1000 * 100%); transition: width 2s;"
        }
    };
    // note, the client hasn't set this up yet, so using a fake file
    req.open('GET', './scripts/amount');
    req.send();
}


request_data();