### 데이터 베이스 초기설정
1. npm run resetdb
2. dbFinal.sql 파일로 등록
</br>
</br>

### dbFinal.sql 파일 활용 방법 (데이터베이스내 테이블 및 컬럼생성 & 값 추가)
</br>

  - mysql WorkBench 활용
    - https://defacto-standard.tistory.com/127
</br>
</br>
- mysql 터미널 활용
  - mysql 터미널 접속
    - ex ) mysql -u root -p
</br>
  - 데이터베이스 선택
    - use camper_db;
</br>
  - source <본인의 dbFinal.sql 파일 경로> 입력
    - ex ) source C:\JavaProJect\CamperJS\server\dbFinal.sql
</br>
</br>

### https 인증서 설치 방법 (mkcert)

- mkcert 설치 (섹션2~3 내용이므로 이미 설치되어 있다면 인증서 설치로 건너뛰어도 됨)
  - https://velog.io/@frostscent/%EB%A1%9C%EC%BB%AC-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-HTTPS-%EC%9D%B8%EC%A6%9D
</br>
</br>

- 인증서 설치
  - mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1
</br>
</br>
- (다른 경로에 생성 됬다면) server 폴더로 key.pem & cert.pem 파일 이동

※. mkcert 공식문서
https://github.com/FiloSottile/mkcert