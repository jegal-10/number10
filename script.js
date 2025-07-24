document.getElementById('drawBtn').addEventListener('click', function() {
    const max = parseInt(document.getElementById('maxNumber').value, 10);
    if (isNaN(max) || max < 1) {
        document.getElementById('result').textContent = '1 이상의 숫자를 입력하세요.';
        return;
    }
    const picked = Math.floor(Math.random() * max) + 1;
    document.getElementById('result').textContent = `뽑힌 번호: ${picked}`;
});
