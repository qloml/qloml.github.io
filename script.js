let confettiInterval;

document.getElementById('championshipForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const competition = document.getElementById('competition').value.trim();

  if (name && competition) {
    showCertificate(name, competition);
  } else {
    alert('名前と大会名を両方入力してください！');
  }
});

// ボタンクリックでも動作するように追加
document.querySelector('.submit-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const competition = document.getElementById('competition').value.trim();

  if (name && competition) {
    showCertificate(name, competition);
  } else {
    alert('名前と大会名を両方入力してください！');
  }
});

function showCertificate(name, competition) {
  // フォームを隠す
  document.getElementById('formContainer').style.display = 'none';

  // 賞状に情報を入力
  document.getElementById('certificateName').textContent = name + '殿';
  document.getElementById('certificateCompetition').textContent = competition;

  // 現在の日付を取得
  const today = new Date();
  const year = today.getFullYear() - 2018; // 令和年を計算
  const month = today.getMonth() + 1;
  const day = today.getDate();
  document.getElementById('certificateDate').textContent = `令和${year}年${month}月${day}日`;
  document.getElementById('certificateOrganizer').textContent = `${competition}実行委員会`;

  // 賞状を表示
  document.getElementById('certificateContainer').style.display = 'block';
}

function resetForm() {
  // 賞状を隠す
  document.getElementById('certificateContainer').style.display = 'none';

  // フォームを表示
  document.getElementById('formContainer').style.display = 'block';

  // フォームをリセット
  document.getElementById('championshipForm').reset();
}