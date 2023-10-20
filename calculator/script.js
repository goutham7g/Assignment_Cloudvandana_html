let result = '';

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        result = eval(result).toString();
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
