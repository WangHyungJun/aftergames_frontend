import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: ["recommendation", "lol", "pubg", "fifa", "hearthstone"],
    nickname: localStorage.getItem("nickname"),
    token: localStorage.getItem("token"),
    base_url: "http://127.0.0.1:8000"
  },
  mutations: {

  },
  actions:{
    validateEmail: (context, payload)=>{
      var email_re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      if(!email_re.test(payload)){
        return "유효하지 않은 이메일 형식입니다";
      } else {
        return '';
      };
    }
  }
});
