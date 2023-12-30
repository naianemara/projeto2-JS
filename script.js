function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-entrada").value)
    const max = Math.floor(document.querySelector(".input-saida").value)

    const result = Math.floor(Math.random() * (max - min) + min);

    alert(result)

}