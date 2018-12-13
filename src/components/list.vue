<<template>
    <div class="list">
        <div class="rightTop"><span>第{{itemNum}}题</span></div>
        <div class="img"></div>
        <div class="content">
            <p>{{itemDetail[itemNum-1].name}}</p>
            <ul>
                <li v-for="(item, index) in itemDetail[itemNum-1].options" :class='{"selected":choosedPos===index}' @click="doSelect(index)"><span>{{index+1}}</span>. {{item.value}}</li>
            </ul>
        </div>
        <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    	<span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            choosedPos: null,  //所选答案的下标
        };
    },
    computed: mapState([
        'itemNum',
        'itemDetail'
    ]),
    methods: {
        doSelect(id) {
            this.choosedPos = id;
        },
        nextItem() {
            if(this.choosedPos === null) {
                alert('您还没有选择答案哦~');
            }
            else {
                this.$store.state.itemNum++;
                this.$store.state.answerid.push( this.choosedPos );
                this.choosedPos = null;
            }
        },
        submitAnswer() {
            if( this.choosedPos === null ) {
                alert('您还没有选择答案哦~');
            }
            else {
                this.$store.state.itemNum++;
                this.$store.state.answerid.push( this.choosedPos );
                this.$router.push({path: '/score'});
            }
        }
    }
};
</script>
<style scoped>
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
    background-image: url(../images/2-1.png);
}
.content {
    position: absolute;
    height: 14.0rem;
    width: 15.0rem;
    top: 10rem;
    left: 6rem;
    text-align: left;
}
.content li {
    line-height: 2rem;
}
.selected {
    color: #f00;
}
.button_style {
    height: 2.1rem;
    width: 4.35rem;
    position: absolute;
    top: 24.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.next_item {
    background-image: url(../images/2-2.png);
}
.submit_item {
    background-image: url(../images/3-1.png);
}
</style>