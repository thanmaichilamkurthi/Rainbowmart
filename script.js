function fun(){
    let v1 = document.getElementById("u1").value;
     let v2 = document.getElementById("u2").value;
    // let v3 = document.getElementById("three");
    // let v4 = document.getElementById("four");
    // if(v1.value == "" || v2.value == "" || v3.value == ""|| v4.value == ""){
            if(v1==""){
            v1.value = "Username must be filled"
            v1.style.color = "red";
            return false;
        }
        if(v2==""){
            v2.value= "Password must be filled"
            v2.style.color = "red";
            return false;
        }
        else{
            alert("Registered Successfully!");
            return true;
    }
}