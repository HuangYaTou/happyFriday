<template>
    <div class="home">
        <div class="rightTop"><span>{{level}}</span></div>
        <div class="img"></div>
        <div class="button-style" @click="doBegin"></div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: mapState([
        'level'
    ]),
    methods: {
        doBegin() {
            this.$router.push({path: '/list'});
        }
    }
}
</script>

<style scoped>
.home img{
    width: 100%;
    height: 100%;
}
.rightTop {
    height: 10.35rem;
    width: 6.25rem;
    position: absolute;
    top: 0;
    right: 2rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../images/WechatIMG2.png);
}
.rightTop span {
    display: block;
    margin-top: 7.65rem;
    color: #a57c50;
    font-size: 1rem;
}
.img {
    height: 15.1rem;
    width: 17.35rem;
    margin: 10rem auto 0 auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../images/1-2.png);
}
.button-style {
    height: 2.1rem;
    width: 4.35rem;
    position: absolute;
    top: 24.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../images/1-4.png);
}
</style>
