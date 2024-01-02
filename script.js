function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-entrada").value)
    const max = Math.floor(document.querySelector(".input-saida").value)


    if (max > min) {
        const result = Math.floor(Math.random() * (max - min) + min);

        alert(result)
    }

    else {
        alert ("O valor minino tem que ser Menor que o valor maxino")
    }



}