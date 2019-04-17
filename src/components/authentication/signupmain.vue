<template>
  <section id="main">
    <section class="signupform">
      <div class="item">
        <label>아이디</label>
        <input ref="id_input" v-model="loginform.userid" type="text" />
        <div class="errormessage">{{ this.iderror }}</div>
      </div>
      <div class="item">
        <label>비밀번호</label>
        <input ref="pw_input" v-model="loginform.password" type="password" />
        <div class="errormessage">{{ this.passworderror }}</div>
      </div>
      <div class="item">
        <label>비밀번호 확인</label>
        <input
          ref="pwc_input"
          v-model="loginform.checkpassword"
          type="password"
        />
        <div class="errormessage">{{ this.passwordcheckerror }}</div>
      </div>
      <div class="item">
        <label>이메일 주소</label>
        <input
          ref="email_input"
          v-model="loginform.email"
          type="text"
          placeholder="example@gmail.com"
        />
        <div class="errormessage">{{ this.emailerror }}</div>
      </div>
      <div class="item">
        <label>닉네임</label>
        <input
          ref="nickname_input"
          v-model="loginform.nickname"
          type="text"
          placeholder="왕형준"
        />
        <div class="errormessage">{{ this.nicknameerror }}</div>
      </div>
      <a href="#" v-on:click="submit">회원가입</a>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signupmain",
  data() {
    return {
      apiurl: "http://127.0.0.1:8000/aftergamesapi/users",
      loginform: {
        userid: "",
        email: "",
        nickname: "",
        password: "",
        checkpassword: ""
      },
      successmessage: "",
      iderror: "",
      passworderror: "",
      emailerror: "",
      nicknameerror: "",
      passwordcheckerror: "",
      signupprocess: false
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      if (this.loginform.userid === "") {
        this.iderror = "아이디를 입력해주세요";
        return this.iderror;
      }
      if (this.loginform.password === "") {
        return (this.passworderror = "비밀번호를 입력해주세요");
      }
      if (this.loginform.checkpassword === "") {
        return (this.passwordcheckerror = "비밀번호 확인을 입력해주세요");
      }
      if (this.loginform.email === "") {
        return (this.emailerror = "이메일을 입력해주세요");
      }
      if (this.loginform.nickname === "") {
        return (this.nicknameerror = "닉네임을 입력해주세요");
      }
      if (this.loginform.checkpassword !== this.loginform.password) {
        return (this.passworderror =
          "비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      }
      if (this.signupprocess) {
        return alert("회원가입이 진행 중입니다. 잠시만 기다려주세요.");
      }
      if (
        this.iderror === "" &&
        this.passworderror === "" &&
        this.passwordcheckerror === "" &&
        this.emailerror === "" &&
        this.nicknameerror === ""
      ) {
        this.signupprocess = true;
        this.$http
          .post(this.apiurl, {
            userid: this.loginform.userid,
            email: this.loginform.email,
            nickname: this.loginform.nickname,
            password: this.loginform.password,
            checkpassword: this.loginform.checkpassword
          })
          .then(function(data) {
            if (data.body["error"] !== undefined) {
              this.signupprocess = false;
              return alert(data.body["error"]);
            } else {
              alert(data.body["success"]);
              this.$router.push({ name: "login" });
            }
          });
      } else {
        return alert("오류를 수정해주시고 회원가입을 시도해주세요!");
      }
    },
    ...mapActions(["validateEmail"])
  },
  beforeUpdate() {
    if (
      this.loginform.userid.length < 3 &&
      this.loginform.userid.length !== 0
    ) {
      this.iderror = "아이디는 3글자 이상으로 정해주세요.";
    } else if (this.iderror === "아이디는 3글자 이상으로 정해주세요.") {
      this.iderror = "";
    } else {
     ;
    }

    if (
      this.loginform.password.length < 4 &&
      this.loginform.password.length !== 0
    ) {
      this.passworderror = "비밀번호는 4글자 이상으로 정해주세요.";
    } else if (this.passworderror === "비밀번호는 4글자 이상으로 정해주세요.") {
      this.passworderror = "";
    } else {
     ;
    }

    if (this.loginform.nickname !== "") {
      this.nicknameerror = "";
    }

    if (this.loginform.email !== "") {
      this.validateEmail(this.loginform.email).then(res => {
        this.emailerror = res;
      });
    } else if (this.emailerror === "이메일을 입력해주세요") {
      ;
    } else {
      this.emailerror = "";
    }
  },
  updated() {
    const id_input = this.$refs.id_input;
    const pw_input = this.$refs.pw_input;
    const pwc_input = this.$refs.pwc_input;
    const email_input = this.$refs.email_input;
    const nickname_input = this.$refs.nickname_input;

    if (this.iderror !== "") {
      id_input.style.borderBottomColor = "#FF6E6E";
    } else {
      id_input.style.borderBottomColor = "#FF981F";
    }

    if (this.passworderror !== "") {
      pw_input.style.borderBottomColor = "#FF6E6E";
    } else {
      pw_input.style.borderBottomColor = "#FF981F";
    }

    if (this.passwordcheckerror !== "") {
      pwc_input.style.borderBottomColor = "#FF6E6E";
    } else {
      pwc_input.style.borderBottomColor = "#FF981F";
    }

    if (this.emailerror !== "") {
      email_input.style.borderBottomColor = "#FF6E6E";
    } else {
      email_input.style.borderBottomColor = "#FF981F";
    }

    if (this.nicknameerror !== "") {
      nickname_input.style.borderBottomColor = "#FF6E6E";
    } else {
      nickname_input.style.borderBottomColor = "#FF981F";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/signupmain";
</style>
