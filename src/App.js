import React from 'react';
import {
    View,
    Image,
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Text,
    Pressable,
    Linking,
} from 'react-native';

import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlGithub = 'https://github.com/jhcanuto/'
const imageProfile = 'https://media-exp1.licdn.com/dms/image/C4D03AQG9V1kGNqFkeg/profile-displayphoto-shrink_800_800/0/1646333238668?e=1658966400&v=beta&t=277RQOw4SjfiZ_U4ZXFpssNS-NNpVtvrWcI5ThXGCXM';
const App = () => {

    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL (urlGithub);
        if (res){
           await Linking.openURL(urlGithub);
        };
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />  
            <View style={style.content}>
                <Image accessibilityLabel="Fundo Padrão do Github" style={style.avatar} source={{uri: imageProfile}} />

            <Text> </Text>
            <Text accessibilityLabel ="Julio Canuto" style={[style.defaultText, style.name]}> Julio Canuto</Text>
            <Text accessibilityLabel ="Nickname @jhcanuto"style={[style.defaultText, style.nickname]}> @jhcanuto</Text>
            <Text accessibilityLabel ="Estudante de Analise e Desenvolvimento de Sistemas" style={[style.defaultText, style.description]}> Estudante - Analise e Desenvolvimento de Sistemas </Text>

            <Pressable onPress={handlePressGoToGithub}>    
            <View style={style.button}> 
                <Text style={[style.defaultText, style.textButton ]}> Open in Github</Text>
            </View>
            </Pressable>

            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { 
        //coluna
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a Tela Inteira
        // flexDirection: 'row' - Altera o formato de Exibição para Linha
    
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 180,
        width: 180,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        fontSize: 23,
        fontWeight: 'bold',
        
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    
});