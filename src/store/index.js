import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    level: '第1周',
    itemNum: 1,
    allTime: 0,
    timer: '',
    answerid: [],  //用户提交的答案
    rightAnswerId:[3,1,0,2,1],  //每题的正确答案下标
    itemDetail: [{
        id: 1,
        name: '题目一',
        options: [{
            id: 1,
            value: 'A是错误的',
            flag: 0
        }, {
            id: 2,
            value: 'B是错误的',
            flag: 0
        }, {
            id: 3,
            value: 'C是错误的',
            flag: 0
        },{
            id: 4,
            value: 'D是正确的',
            flag: 1
        }]
    }, {
        id: 2,
        name: '题目二',
        options: [{
            id: 1,
            value: 'A是错误的',
            flag: 0
        }, {
            id: 2,
            value: 'B是正确的',
            flag: 0
        }, {
            id: 3,
            value: 'C是错误的',
            flag: 0
        },{
            id: 4,
            value: 'D是错误的',
            flag: 1
        }]
    }, {
        id: 3,
        name: '题目三',
        options: [{
            id: 1,
            value: 'A是正确的',
            flag: 0
        }, {
            id: 2,
            value: 'B是错误的',
            flag: 0
        }, {
            id: 3,
            value: 'C是错误的',
            flag: 0
        },{
            id: 4,
            value: 'D是错误的',
            flag: 1
        }]
    }, {
        id: 4,
        name: '题目四',
        options: [{
            id: 1,
            value: 'A是错误的',
            flag: 0
        }, {
            id: 2,
            value: 'B是错误的',
            flag: 0
        }, {
            id: 3,
            value: 'C是正确的',
            flag: 0
        },{
            id: 4,
            value: 'D是错误的',
            flag: 1
        }]
    }, {
        id: 5,
        name: '题目五',
        options: [{
            id: 1,
            value: 'A是错误的',
            flag: 0
        }, {
            id: 2,
            value: 'B是正确的',
            flag: 0
        }, {
            id: 3,
            value: 'C是错误的',
            flag: 0
        },{
            id: 4,
            value: 'D是错误的',
            flag: 1
        }]
    }]
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})