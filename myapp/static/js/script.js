function validateForm(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;


    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const checkedStatus = document.getElementById("checked-status");


    emailError.textContent = "";
    passwordError.textContent = "";
    checkedStatus.textContent = "";

    let isValid = true

    if(email === "" || !email.include("@")){
        emailError.textContent = "โปรดใส่อีเมลให้ถูกต้อง";
        isValid = false;
    }

    if(password === "" || password.lenght < 8 ){
        passwordError.textContent = "โปรดใส่รหัสผ่าน 8 ตัวขึ้นไป";
        isValid = false;
    }
    else passwordError.textContent = "";

    if(remember ){checkedStatus.textContent = "Checked";}
    else{checkedStatus.textContent = "UnCheck";}

    return isValid
}