document.getElementById('submit').onclick = function (e) {
    e.preventDefault();
    document.getElementById('acknowledge').style = 'display: block;';
    document.getElementById('form').style = 'display: none;';

    // name
    // number
    // email
    // textInput

    const name = document.getElementById('name').value;
    const number = Number(document.getElementById('number').value);
    const email = document.getElementById('email').value;
    const text = document.getElementById('textInput').value;

    const req = new XMLHttpRequest();
    
    // note, the client hasn't set this up yet, so pretending there is an API here
    req.open('POST', 'api/contact');
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        name,
        number,
        email,
        text,
    }));

}