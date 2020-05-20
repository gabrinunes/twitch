import {Alert} from  'react-native'

export default{
      alertSearchConection(){
        Alert.alert(
          "Sem internet",
          "Por favor verifique sua conexão",
          [
            {text:"OK"}
          ],
          {cancelable:true}
        )
      },
      
       alertSearch(){
        Alert.alert(
          "Não retornou streams para esta pesquisa",
          "Por favor tente outra vez",
          [
            {text:"OK"}
          ],
          {cancelable:true}
        )
      }
}