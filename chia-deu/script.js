document.getElementById('divide-btn').addEventListener('click', () => {
  const totalApplesA = parseInt(document.getElementById('apples-a').value);
  const applesB = parseInt(document.getElementById('apples-b').value);
  const applesC = parseInt(document.getElementById('apples-c').value);
  const resultDiv = document.getElementById('result');

  // Kiểm tra nhập liệu
  if (isNaN(totalApplesA) || isNaN(applesB) || isNaN(applesC) || totalApplesA < 0 || applesB < 0 || applesC < 0) {
    resultDiv.textContent = 'Vui lòng nhập số táo hợp lệ.';
    return;
  }

  const totalToDistribute = totalApplesA + applesB + applesC;
  const targetPerPerson = Math.floor(totalToDistribute / 2);

  const requiredForB = Math.max(0, targetPerPerson - applesB);
  const requiredForC = Math.max(0, targetPerPerson - applesC);

  let resultText;

  if (requiredForB + requiredForC <= totalApplesA) {
    // Chia đều
    const remainingA = totalApplesA - (requiredForB + requiredForC);
    resultText = `A chia cho B ${requiredForB} quả, C ${requiredForC} quả. A còn lại ${remainingA} quả.`;
  } else {
    // Không thể chia đều
    resultText = 'Không thể chia đều táo để đạt yêu cầu.';
  }

  resultDiv.textContent = resultText;
});
