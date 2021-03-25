export const state = () => ({ 
    counter: 0 
})

export const mutations = { 
    increment(state) { 
        state.counter++ 
    },

}

export const actions = { 
    queryString(context, param){
        return Object.keys(param)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(param[k]))
        .join('&');
    }
}

