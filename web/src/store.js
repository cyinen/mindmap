import Vue from 'vue'
import Vuex from 'vuex'
import exampleData from 'simple-mind-map/example/exampleData';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        mindMapData: null, // 思维导图数据
        isHandleLocalFile: false// 是否操作的是本地文件
    },
    mutations: {
        /** 
         * @Author: 王林 
         * @Date: 2021-04-10 14:50:01 
         * @Desc: 设置思维导图数据 
         */
        setMindMapData(state, data) {
            state.mindMapData = data
        },

        /** 
         * javascript comment 
         * @Author: 王林 
         * @Date: 2022-09-24 13:55:38 
         * @Desc: 设置操作本地文件标志位 
         */
        setIsHandleLocalFile(state, data) {
            state.isHandleLocalFile = data
        }
    },
    actions: {
        /** 
         * @Author: 王林 
         * @Date: 2021-04-10 14:50:40 
         * @Desc: 设置初始思维导图数据 
         */
        getUserMindMapData(ctx) {
            try {
                let {
                    data
                } = {
                    data: {
                        data: {
                            mindMapData: exampleData
                        }
                    }
                }
                ctx.commit('setMindMapData', data.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default store