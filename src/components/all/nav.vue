<template>
    <nav id="nav">
        <div class="main_nav">
            <ul class="clearfix">
                <li><router-link to="/" exact>HOME</router-link></li>
                <li><router-link v-bind:to="'/game/'+ games[0]" exact>이달의 게임</router-link></li>
                <li><router-link v-bind:to="'/game/'+ games[1]" exact>LOL</router-link></li>
                <li><router-link v-bind:to="'/game/'+ games[2]" exact>PUBG</router-link></li>
                <li><router-link v-bind:to="'/game/'+ games[3]" exact>FIFA</router-link></li>
                <li><router-link v-bind:to="'/game/'+ games[4]" exact>Hearh Stone</router-link></li>
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

<script>
export default {
    data(){
        return {
            games: ['recommendation','lol', 'pubg', 'fifa', 'hearthstone']
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../public/scss/nav";
</style>
