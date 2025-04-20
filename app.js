function simulateUpload() {
  const questions = [
    { role: '政府律师', question: '你为什么现在才申请庇护？' },
    { role: '法官', question: '你能证明你在中国受到了迫害吗？' },
    { role: '律师', question: '请讲述你是如何来到美国的。' }
  ];

  const qaSection = document.getElementById('qaSection');
  qaSection.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'qa-block';
    div.innerHTML = `<strong>${q.role}:</strong> ${q.question}<br><textarea rows="3" placeholder="你的回答..."></textarea>`;
    qaSection.appendChild(div);
  });
}