import {StyleSheet,Dimensions} from 'react-native'
const{width}= Dimensions.get('window')
export default StyleSheet.create({
    header:{
        marginVertical:10,
        flexDirection:'row',
        width:width.window,
        margin:10,
        padding: 0, 
        alignItems:'center', 
        justifyContent:'center',
        borderWidth:1, 
        borderColor:'#888',
        borderRadius:10, 
        backgroundColor:'#fff'
    },
    button:{
        flex:1,
        backgroundColor:'#6441a5',
        borderRadius:9,
        paddingTop:10
    },
    buttonText:{
        fontSize:16,
        color:'white',
        justifyContent:'flex-end',
        fontWeight:'500'
    }
})