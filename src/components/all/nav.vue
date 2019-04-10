<template>
    <nav id="nav">
        <div class="main_nav">
            <ul class="clearfix">
                <li><a href="#">HOME</a></li>
                <li><a href="#">이달의 게임</a></li>
                <li><router-link to="game/lol">LOL</router-link></li>
                <li><a href="#">PUBG</a></li>
                <li><a href="#">FIFA</a></li>
                <li><a href="#">Hearh Stone</a></li>
            </ul>
            <div class="main_search">
                <div class="search">
                    <input type="search"/>
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
    @import "../../../public/scss/nav";
</style>
