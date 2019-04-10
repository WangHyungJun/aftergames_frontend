<template>
    <section class="main">
        <section class="Game">
            <div class="Game_logo LOL clearfix">
                <img src="../../../public/img/LOL.jpg" alt="리그오브레전드">
                <h3>리그오브레전드</h3>
            </div>
            <div class="filter">
                <select>
                    <option>필터</option>
                    <option>실력향상</option>
                    <option>핫이슈</option>
                    <option>기타</option>
                </select>
            </div>
            <div class="container">
                <div class="row clearfix">
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL1.jpg" alt="Lol1"></div>
                        <div class="title">조이뉴스24</div>
                        <div class="sub_title">눈길가는 이색종목</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL2.jpg" alt="Lol2"></div>
                        <div class="title">유튜브</div>
                        <div class="sub_title">패치노트 총 강의!</div>
                        <div class="sub_title">세밀하게 알아보자</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL3.jpg" alt="Lol3"></div>
                        <div class="title">블로그</div>
                        <div class="sub_title">라이엇게임즈, 롤을 잇는 후속작은 MMO?</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL1.jpg" alt="Lol1"></div>
                        <div class="title">조이뉴스24</div>
                        <div class="sub_title">눈길가는 이색종목</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL2.jpg" alt="Lol2"></div>
                        <div class="title">유튜브</div>
                        <div class="sub_title">패치노트 총 강의!</div>
                        <div class="sub_title">세밀하게 알아보자</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL3.jpg" alt="Lol3"></div>
                        <div class="title">블로그</div>
                        <div class="sub_title">라이엇게임즈, 롤을 잇는 후속작은 MMO?</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL1.jpg" alt="Lol1"></div>
                        <div class="title">조이뉴스24</div>
                        <div class="sub_title">눈길가는 이색종목</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL2.jpg" alt="Lol2"></div>
                        <div class="title">유튜브</div>
                        <div class="sub_title">패치노트 총 강의!</div>
                        <div class="sub_title">세밀하게 알아보자</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL3.jpg" alt="Lol3"></div>
                        <div class="title">블로그</div>
                        <div class="sub_title">라이엇게임즈, 롤을 잇는 후속작은 MMO?</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL1.jpg" alt="Lol1"></div>
                        <div class="title">조이뉴스24</div>
                        <div class="sub_title">눈길가는 이색종목</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL2.jpg" alt="Lol2"></div>
                        <div class="title">유튜브</div>
                        <div class="sub_title">패치노트 총 강의!</div>
                        <div class="sub_title">세밀하게 알아보자</div>
                    </article>
                    <article>
                        <div class="thumbnail"><img src="../../../public/img/LOL3.jpg" alt="Lol3"></div>
                        <div class="title">블로그</div>
                        <div class="sub_title">라이엇게임즈, 롤을 잇는 후속작은 MMO?</div>
                    </article>
                </div>
            </div>
        </section>
        <pages></pages>
    </section>
</template>

<script>
    import pages from "../all/pages"

    export default {
        name: "gamemain.vue",
        components:{
            "pages": pages
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../../public/scss/lolmain";
    /*@import "../../../public/scss/pages";*/
</style>