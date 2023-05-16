

sendMessage = () => {
    let name = document.getElementById("Name").value;
    let numbers = document.getElementById("numbers").value;
    let date = document.getElementById("date").value;
    let Message = document.getElementById("Message").value;
    let form = document.getElementById("form");
    let data = { name, numbers, date, Message };
    fetch(`http://localhost:3000/Reserve`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
        .then(res => {
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Thank You',
            })
        })
}