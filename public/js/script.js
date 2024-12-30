if(window.location.pathname !== "/") {
    document.getElementById("update-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const id = formData.get("id");
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const phonenumber = formData.get("phonenumber");
    
        const data = { id, firstname, lastname, email, phonenumber };
        console.log(data);
        const url = `http://localhost:3000/api/user/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if(response.ok) {
                console.log("Update successful", response);
                // window.location.replace("/");
            }
            else {
                console.error("Update failed", response);
            }
        }
        ).catch(error => console.error("Error", error))
    });
}


document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("data-id");
        fetch(`http://localhost:3000/api/user/${id}`, {
            method: "DELETE"
        }).then(response => {
            if(response.ok) {
                console.log("Delete successful", response);
                window.location.replace("/");
            }
            else {
                console.error("Delete failed", response);
            }
        }).catch(error => console.error("Error", error))
    })
});