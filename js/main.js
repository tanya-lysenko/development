document.addEventListener('click', function (e) {
    const condition1 = e.target.href === '#';
    const condition2 = e.target.closest(`[href="#"]`);

    if (condition1 || condition2) {
        e.preventDefault();
    }
});

//----------------------------------------------------------------------------------------------------------------------
const menuButton = document.querySelector('#header .menu');
const menuList = document.querySelector('#header nav');

menuButton.addEventListener('click', function () {
    menuList.classList.toggle('open');
});

//----------------------------------------------------------------------------------------------------------------------
const arrow = document.querySelector('#development .arrow');

arrow.addEventListener('click', function () {
    const aboutUs = document.querySelector('#about-us');

    aboutUs.scrollIntoView({behavior: 'smooth'});
});

//----------------------------------------------------------------------------------------------------------------------
const latestWorksButton = document.querySelector('#latest-works .img-box');
const latestWorksImg = document.querySelector('#latest-works img');

latestWorksButton.addEventListener('click', function () {
    latestWorksImg.classList.toggle('mirror');
});

//----------------------------------------------------------------------------------------------------------------------
const form = document.querySelector(`[name="feedback"]`);
const name = form.querySelector(`[name="name"]`);
const email = form.querySelector(`[name="email"]`);
const message = form.querySelector(`[name="message"]`);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let condition;

    function validate(condition, field) {
        if (condition) {
            field.style.boxShadow = 'inset 0px 0px 0px 5px #0f0';
        }
        else {
            field.style.boxShadow = 'inset 0px 0px 0px 5px #f00';
        }
    }


    const messageValue = message.value.trim();
    const messageCondition1 = messageValue.length > 9;

    condition = messageCondition1;
    validate(condition, message);


    const emailValue = email.value.trim();
    const emailCondition1 = emailValue.indexOf('@') > 0;
    const emailCondition2 = emailValue.indexOf('.') > 0;
    const emailCondition3 = emailValue.length > 4;

    condition = emailCondition1 && emailCondition2 && emailCondition3;
    validate(condition, email);


    const nameValue = name.value.trim();
    const nameCondition1 = nameValue.length > 2;

    condition = nameCondition1;
    validate(condition, name);
});

const fields = [name, email, message];

for (let field of fields) {
    field.addEventListener('focus', resetShadow);
    field.addEventListener('input', resetShadow);
    field.addEventListener('paste', resetShadow);
}

function resetShadow(e) {
    e.target.style.boxShadow = 'none';
}