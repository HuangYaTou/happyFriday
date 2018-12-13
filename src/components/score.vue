<<template>
    <div class="list">
        <div class="content">
            <div class="score">{{score*20}}分！<br>{{scoreTip}}</div>
        </div>
        <div class="share_button" @click="doShare"></div>
        <div class="foot">
            <header>关注葡萄之家，获取答案。</header>
            <img src="../images/4-4.png" height="212" width="212" class="code_img">
        </div>
        <div class="cover" v-if="showCover" @click="doShare">
            <img class="share_img" src="../images/5-2.png">
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            score: 0,
            showCover: false,
            scoreTip: '',
            scoreTipArr: ['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']
        };
    },
    computed: mapState(['answerid','rightAnswerId']),
    created() {
        this.computedScore();
        this.getScoreTip();
    },
    methods: {
        computedScore() {
            this.answerid.forEach((item,index) => {
                if( item == this.rightAnswerId[index] ) {
                    this.score++;
                }
            });
        },
        getScoreTip() {
            this.scoreTip = this.scoreTipArr[this.score-1]
        },
        doShare() {
            this.showCover = !this.showCover;
        }
    }
}
</script>

<style scoped>
body{
    background-image: url(../images/4-1.jpg);
    padding-top: 1.2rem;
}
.content {
    width: 17.35rem;
    height: 15.1rem;
    text-align: center;
    color: orangered;
    margin: 3rem auto 0 auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../images/4-2.png);
}
.score {
    position: absolute;
    top: 11rem;
    left: 4rem;
    width: 16.35rem;
}
.share_button {
    height: 3.1rem;
    width: 7.35rem;
    position: absolute;
    top: 19.5rem;
    left: 50%;
    margin-left: -3.4rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../images/4-3.png);
}
.foot {
    margin-top: 5rem;
}
.foot header {
    color: #664718;
    font-size: .475rem;
    margin-bottom: 1rem;
}
.cover {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background: url(../images/5-1.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.92;
}
.share_img{
    height: 16.975rem;
    width: 19.95rem;
    position: fixed;
    top: 1.5rem;
    left: 50%;
    margin-left: -9.975rem;
}
</style>