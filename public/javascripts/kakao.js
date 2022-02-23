window.Kakao.init('4ad5ed9b9ca87042e035e3e6336928a1');

function kakaoLogin() {
    window.Kakao.Auth.login({
        scope: 'profile, account_email, gender, age_range, birthday', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function (response) {
            console.log(response) // 로그인 성공하면 받아오는 데이터
            window.Kakao.API.request({ // 사용자 정보 가져오기
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account)
                }
            });
            window.location.href = '/coala/dashboard' //리다이렉트 되는 코드
        },
        fail: function (error) {
            console.log(error);
        }
    });
}