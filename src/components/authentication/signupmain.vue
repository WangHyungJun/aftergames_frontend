<template>
    <section id="main">
        <section class="signupform">
            <div class="item">
                <label>아이디</label>
                <input v-model="loginform.userid" type="text"/>
            </div>
            <div class="item">
                <label>비밀번호</label>
                <input v-model="loginform.password" type="password"/>
            </div>
            <div class="item">
                <label>비밀번호 확인</label>
                <input v-model="loginform.checkpassword" type="password"/>
            </div>
            <div class="item">
                <label>이메일 주소</label>
                <input v-model="loginform.email" type="text" placeholder="example@gmail.com"/>
            </div>
            <div class="item">
                <label>닉네임</label>
                <input v-model="loginform.nickname" type="text" placeholder="왕형준"/>
            </div>
            <div>{{this.message.errormessage}}</div>
            <a href="#" v-on:click="submit">회원가입</a>
        </section>
    </section>
</template>

<script>
    export default {
        name: "signupmain",
        data() {
            return {
                apiurl: "http://127.0.0.1:8000/aftergamesapi/users",
                loginform:{userid:'', email: '', nickname: '',password: '',checkpassword: ''},
                message: {errormessage:'', success:''},
            }
        },
        methods:{
            submit: function () {
                if(this.loginform.userid==''){
                    return this.message.errormessage="아이디를 입력해주세요"
                }else if(this.loginform.email==''){
                    return this.message.errormessage="이메일을 입력해주세요"
                }else if(this.loginform.nickname=='') {
                    return this.message.errormessage = "닉네임을 입력해주세요"
                }else if(this.loginform.password==''){
                    return this.message.errormessage = "비밀번호를 입력해주세요"
                }else if(this.loginform.checkpassword==''){
                    return this.message.errormessage = "비밀번호 확인을 입력해주세요"
                }else{
                    this.$http.post(this.apiurl,{
                        userid: this.loginform.userid,
                        email: this.loginform.email,
                        nickname: this.loginform.nickname,
                        password: this.loginform.password,
                        checkpassword: this.loginform.checkpassword
                    }).then(function (data) {
                        if(data.body['error']!=undefined) this.message.errormessage=data.body['error'][0];
                        if(data.body['success']!=undefined) alert(data.body['success']); this.$router.push({'name': "login"})
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../public/scss/signupmain";
</style>