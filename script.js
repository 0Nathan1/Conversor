document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Por favor, introduce una cantidad válida.');
        return;
    }

    const apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de API
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.rates[toCurrency]) {
                const rate = data.rates[toCurrency];
                const result = amount * rate;
                document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
            } else {
                alert('Moneda no soportada.');
            }
        })
        .catch(error => {
            alert('Error al obtener los datos. Por favor, intenta de nuevo más tarde.');
            console.error('Error:', error);
        });
});
