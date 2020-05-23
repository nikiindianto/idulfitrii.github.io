import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mousePos: {
            x: 0,
            y: 0
        }
    },
    mutations: {
        setMousePos (state, position) {
            state.mousePos.x = position.x
            state.mousePos.y = position.y
        }
    }
});