<template>
    <section id="main">
        <div class="container">
            <div class="loginbox clearfix">
                <div class="ID">
                    <span>ID</span><input type="text"/>
                </div>
                <div class="PW">
                    <span>PW</span><input type="password"/>
                </div>
                <div class="buttons">
                    <a>아이디 찾기</a>
                    <a>비밀번호 찾기</a>
                    <a href="#">회원가입</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "loginmain"
    }
</script>