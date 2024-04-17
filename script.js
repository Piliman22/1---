// 券発行フォームの処理
document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ticketData = document.getElementById('ticketData').value;
    const serialCode = generateSerialCode(ticketData);
    
    // シリアルコードを表示する要素を作成
    const serialContainer = document.createElement('div');
    serialContainer.classList.add('serial-container');
    serialContainer.textContent = `生成されたシリアルコード: ${serialCode}`;
    
    // ページに要素を追加
    const outputContainer = document.getElementById('serialOutput');
    outputContainer.innerHTML = ''; // すでに要素があればクリア
    outputContainer.appendChild(serialContainer);

    // 確認ページにリダイレクトする
    redirectToConfirmationPage(serialCode);
});

// 確認ページにリダイレクトする関数
function redirectToConfirmationPage(serialCode) {
    // 確認ページのURL
    const confirmationPageUrl = `https://example.com/confirmation?serial=${serialCode}`;
    // リダイレクト
    window.location.href = confirmationPageUrl;
}

// シリアルコード生成関数
function generateSerialCode(data) {
    // ランダムな12桁の数字を生成
    let serialNumber = '';
    for (let i = 0; i < 12; i++) {
        serialNumber += Math.floor(Math.random() * 10); // 0 〜 9 のランダムな数字を追加
    }

    // ハイフンで区切る (例: "1234-5678-9012")
    const formattedSerialCode = serialNumber.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
    return formattedSerialCode;
}
