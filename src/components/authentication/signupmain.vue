<template>
    <section id="main">
        <section class="signupform">
            <div class="item">
                <label>아이디</label>
                <input type="text"/>
            </div>
            <div class="item">
                <label>비밀번호</label>
                <input type="password"/>
            </div>
            <div class="item">
                <label>비밀번호 확인</label>
                <input type="password"/>
            </div>
            <div class="item">
                <label>이메일 주소</label>
                <input type="text"/>
            </div>
            <div class="item">
                <label>닉네임</label>
                <input type="text"/>
            </div>
            <a>회원가입</a>
        </section>
    </section>
</template>

<script>
    export default {
        name: "signupmain"
    }
</script>