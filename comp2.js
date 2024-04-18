document.addEventListener("DOMContentLoaded", function() {
    const profile = document.querySelector(".profile-pic");
    const inputData = document.querySelector("#choose-image");
    const location=document.querySelector(".location");
    const submit=document.querySelector(".submit");
    const pressReturn=document.querySelector(".press-return");

    submit.disabled=true;
    pressReturn.style.display="none";

    inputData.addEventListener("change", function() {
        profile.src = URL.createObjectURL(inputData.files[0]);
        profile.style.border="none";
        localStorage.setItem("profile-pic",profile.src);
    });

    location.addEventListener("keyup",()=>{
        submit.disabled=false;
        submit.style.opacity=1;
        pressReturn.style.display="block";

    })
});


