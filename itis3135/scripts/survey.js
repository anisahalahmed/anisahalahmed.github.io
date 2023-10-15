function submit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const header = data.get('name') + ' || ' + data.get('mascot')
    const personalBackground = data.get("pbackground");
    const professionalBackground = data.get("probackground");
    const academicBackground = data.get("abackground");
    const subjectBackground = data.get("devbackground");
    const platform = data.get("pplatform");
    const funnyThing = data.get("funnything");
    const alsoInfo = data.get("anyelse");

    const caption = data.get("icaption");

    document.getElementById('built-header').innerText = header;

    document.getElementById('personal-background').innerText = personalBackground;
    document.getElementById('professional-background').innerText = professionalBackground;
    document.getElementById('academic-background').innerText = academicBackground;
    document.getElementById('subject-background').innerText = subjectBackground;
    document.getElementById('platform').innerText = platform;
    document.getElementById('funny').innerText = funnyThing;
    document.getElementById('also').innerText = alsoInfo;

    document.getElementById('caption').innerText = caption;
    
    const courseList = document.getElementById('course-list');
    const courseNames = data.getAll('coursename');
    const courseDescriptions = data.getAll('coursedescription');
    for (let i = 0; i < courseNames.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = '<b>' + courseNames[i] + ':</b> ' + courseDescriptions[i];
        courseList.appendChild(item);
    }

    const picture = document.getElementById('image').files[0];

    const url = URL.createObjectURL(picture);

    const element = document.getElementById('byo-image');
    element.src = url;

    document.getElementById('byo-header').className = 'byo-hidden';
    document.getElementById('byo-subheader').className = 'byo-hidden';
    document.getElementById('byo-form').className = 'byo-hidden';

    document.getElementById('intro').className = '';
}

document.getElementById('byo-form').onsubmit = submit;

function back() {

    const courseList = document.getElementById('course-list');
    // removes the list items added so if the form is resubmitted it doesn't duplicate
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    courseList.innerHTML = '';

    document.getElementById('byo-header').className = '';
    document.getElementById('byo-subheader').className = '';
    document.getElementById('byo-form').className = 'byo-form';

    document.getElementById('intro').className = 'byo-hidden';
}

document.getElementById('back').onclick = back;

let count = 1;

function addCourse(event) {
    event.preventDefault();

    const nameInputName = 'coursename';
    const nameLabel = document.createElement('label');
    nameLabel.for = nameInputName;
    nameLabel.innerText = 'Course ' + count + ' Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = nameInputName;
    nameInput.id = nameInputName;

    const nameDiv = document.createElement('div');
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    nameDiv.className = "course";

    const descriptionInputName = 'coursedescription';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = descriptionInputName;
    descriptionLabel.innerText = 'Course ' + count + ' Description';

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = descriptionInputName;
    descriptionInput.id = descriptionInputName;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);
    descriptionDiv.className = "course";

    document.getElementById('inputContainer').appendChild(nameDiv);
    document.getElementById('inputContainer').appendChild(descriptionDiv);

    count += 1;
}

document.getElementById('addCourse').onclick = addCourse;