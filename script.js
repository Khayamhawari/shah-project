// form validation 
const errorMessageforName = document.getElementById('errorName');
const errorMessageforFatherName = document.getElementById('errorFatherName');
const errorMessageforDob = document.getElementById('errorDob');
const errorMessageforGender = document.getElementById('errorGender');
const errorMessageforVillage = document.getElementById('errorVillage');
const errorMessageforQualification = document.getElementById('errorQualification');
const errorMessageforPhone = document.getElementById('errorPhone');
// const errorMessageforTrans = document.getElementById('errorTransication');
// const errorAmount = document.getElementById('errorAmount');
// const errorSubmitFirst = document.getElementById('errorSubmit1');
const errorSubmitFinal = document.getElementById('errorSubmitFinal');

const submitButton = document.getElementById('submitBtn');
// const nextBtn = document.getElementById('nextBtn'); 
// const doneBtn = document.getElementById('doneBtn');

function validateName() {
    var nameInput = document.getElementById('nameInput').value;
    if (nameInput.length == 0) {
        errorMessageforName.innerHTML = 'Name is required';
        // nameInput.style.borderColor = '#ff0000';
        console.log("Enter the name");
        return false;
    }
    if (!nameInput.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && !nameInput.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        errorMessageforName.innerHTML = 'Write full name';
        // nameInput.style.borderColor = '#ff0000';
        console.log('Write full name');
        return false;
    }

    errorMessageforName.innerHTML = '';
    // errorMessageforName.style.display = 'none';
    // nameInput.style.borderColor = '#183153';
    return true;
}

function validateFatherName() {
    var fatherName = document.getElementById('fathernameInput').value;

    if (fatherName.length == 0) {
        errorMessageforFatherName.innerHTML = "Father's name is required";
        return false;
    }
    if (!fatherName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && !fatherName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        errorMessageforFatherName.innerHTML = 'Write full name';
        // nameInput.style.borderColor = '#ff0000';
        // console.log('Write full name');
        return false;
    }

    errorMessageforFatherName.innerHTML = '';
    return true;
}

function validateDob() {
    var dobInput = document.getElementById('dobInput').value;

    if (dobInput.length == 0) {
        errorMessageforDob.innerHTML = 'DOB is required';
        return false;
    }

    errorMessageforDob.innerHTML = '';
    return true;
}

function validateGender() {
    var genderInput = document.getElementById('genderInput').value;

    if (genderInput.length == 0) {
        errorMessageforGender.innerHTML = 'Gender is required';
        return false;
    }

    if (!genderInput.match(/^[A-Za-z]*$/)) {
        errorMessageforGender.innerHTML = 'Gender should be in alphabets only';
        return false;
    }

    errorMessageforGender.innerHTML = '';
    return true;
}

// function validateVillage() {
//     var villageInput = document.getElementById('villageInput').value;

//     if (villageInput.value == '') {
//         errorMessageforVillage.innerHTML = 'Village is required';
//         alert('Please pick up the village');
//         document.myform.village.focus();
//         return false;
//     }

//     errorMessageforVillage.innerHTML = '';
//     alert('validate okay')
//     return true;
// }

function validatePhone() {
    var phoneInput = document.getElementById('phoneInput').value;

    if (phoneInput.length == 0) {
        errorMessageforPhone.innerHTML = 'Phone no is required';
        return false;
    }

    if (phoneInput.length !== 10) {
        errorMessageforPhone.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    if (!phoneInput.match(/^[0-9]{10}$/)) {
        errorMessageforPhone.innerHTML = 'Only digits';
        return false;
    }

    errorMessageforPhone.innerHTML = '';
    return true;
}


// function validateAmount() {
//     var amountInput = document.getElementById('amountPayed').value;

//     if (amountInput.length == 0) {
//         errorAmount.innerHTML = 'Enter amount which you have to pay';
//         return false;
//     }

//     if (amountInput.length < 2) {
//         errorAmount.innerHTML = 'Minimum Amount 10 rupees';
//         return false;
//     }

//     if (!amountInput.match(/^[0-9]{2}$/) && !amountInput.match(/^[0-9]{3}$/) && !amountInput.match(/^[0-9]{4}$/)) {
//         errorAmount.innerHTML = 'Amount in only digits';
//         return false;
//     }

//     errorAmount.innerHTML = '';
//     return true;
// }

// function validateTrans() {
//     var transInput = document.getElementById('transciationId').value;

//     if (transInput.length == 0) {
//         errorMessageforTrans.innerHTML = 'Transaction Id is required';
//         return false;
//     }

//     if (transInput.length !== 12) {
//         errorMessageforTrans.innerHTML = 'Transaction Id/Refrence No or Id/UTR should be 12 digits';
//         return false;
//     }

//     if (!transInput.match(/^[0-9]{12}$/)) {
//         errorMessageforTrans.innerHTML = 'Only digits';
//         return false;
//     }

//     errorMessageforTrans.innerHTML = '';
//     return true;
// }

// alert('Name is required');

// window.addEventListener('click', (e) => {
//     e.preventDefault()
//     // e.returnValue = '';
// })


// tabs changed
// const formDetailsTab = document.getElementById('main-form-tab');
// const paymentDisplayTab = document.getElementById('payment-details-tab');

// doneBtn.addEventListener('click', () => {
    // console.log('Done is working');
  
    // else {
    //     nextBtn.classList.add('active');
    //     nextBtn.classList.add('animation');
    //     console.log('show next btn');
    //     return true;
    // }
    // nextBtn.classList.remove('animation');
// })

// nextBtn.addEventListener('click', () => {
//     formDetailsTab.classList.add('active');
//     paymentDisplayTab.classList.add('active');
//     console.log('tab changed');
// });


// back to details tab 
// const backText = document.getElementById('back-btn');

// backText.addEventListener('click', () => {
//     paymentDisplayTab.classList.remove('active');
//     formDetailsTab.classList.remove('active');
//     // console.log('Working');
//     backText.classList.add('active')
//     console.log('successfuly back into details');

// });

const confirmMess = document.getElementById('confirmation-message');

// save data in google sheet 
const form = document.querySelector('#form');
const url = 'https://script.google.com/macros/s/AKfycbxjHD2umZaQQtFS8REcyKFFH0enarzK1gnE8lv9ZJ--P3MA_kmwvHaBqgU0oP_sgJMgeQ/exec';

submitButton.addEventListener('click', (e) => {
    if (!validateName() || !validateFatherName() || !validateDob() || !validateGender() || !validatePhone()) {
        errorSubmitFinal.style.display = 'block';
        errorSubmitFinal.innerHTML = 'Please fill required feilds';
        setTimeout(() => {
            errorSubmitFinal.style.display = 'none';
        }, 8000);
        console.log('Something worng!');
        // nextBtn.style.display = 'none';
        return false;
    }

    // if (!validateAmount() || !validateTrans()) {
    //     errorSubmitFinal.style.display = 'block';
    //     errorSubmitFinal.innerHTML = 'Please fill required feilds';
    //     setTimeout(() => {
    //         errorSubmitFinal.style.display = 'none';
    //     }, 5000);
    //     console.log('Wrong!');
    //     return false;
    // }

    console.log('working submit btn');
    let d = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: d
    }).then((res) => res.text()).then((finalres) => console.log(finalres));

    // show pop up after final submitting
    swal({
        title: "Success!",
        text: "Message sent sucessfully!",
        icon: "success",
        button: "OK",
    });


    // confirm message show 
    confirmMess.classList.add('showmess');
    console.log('show message');
    setTimeout(() => {
        confirmMess.classList.remove('showmess');
    }, 8000);

    console.log('Data submitted');

    e.preventDefault();
    console.log('successfully');

    form.reset();
    // return false;
});

