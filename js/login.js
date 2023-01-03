function loginValidation() {
  $email = document.querySelector('input[type="text"]');
  console.log($email);
  const emailPat = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; // email 패턴에 대한 정규표현식
  // 이메일 유효성 검사
  if (!emailPat.test($email.value.trim())) {
    alert('이메일을 정확하게 입력하세요.');
    $email.focus();

    return false;
  }

  let $input = document.forms.login_form.idPw;
  for (e of $input) {
    if (e.value.trim() == '') {
      alert('이메일 혹은 비밀번호를 입력하지않았습니다');
      e.focus();
      return false;
    }
  }
}
