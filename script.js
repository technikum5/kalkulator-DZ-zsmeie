function calculate(operation) {
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;

    console.log(n1,n2)


    let result
    switch (operation) {

        case 'Dodaj':
            result = n1 + n2;
            break;
        case 'Odejmij':
            result = n1 - n2;
            break;
        case 'Pomnoz':
            result = n1 * n2;
            break;
        case 'Podziel':
            if (n2 === 0){
                alert("Nie można dzielić przez 0.");
                return;
            }
            result = n1 / n2;
            break;
       
        default:
            alert('Nieznana operacja.');
            return;
    }

    document.getElementById('result').textContent = result;
}
