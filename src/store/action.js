export default {
    setStream(stream){
        return {type:'SET_STREAM',payload:stream}
    },
    setLoading(loading){
       return {type:'SET_LOADING',payload:loading}
    }
}