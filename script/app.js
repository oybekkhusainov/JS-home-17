let show = document.querySelector("#show-btn");

function showUser() {
    let id = prompt("Id raqamini kiriting");
    const time = new Date().toLocaleTimeString();
    const date = new Date ().toLocaleDateString();
    let users=[];
   
user = {
    id : id,
    time : time,
    date : date,
};

users.push(user);
localStorage.setItem("users", JSON.stringify(users));
console.log(users);

}
show.addEventListener("click", showUser );






    


    










