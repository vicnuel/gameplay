import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import Illustration from '../../assets/illustration.png'
import { styles } from './styles';

export function SIgnIn() {
    return (
        <View style={styles.container} >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={Illustration}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content} >
                <Text style={styles.title} >
                    Conecte-se {`\n`}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            </View>

            <ButtonIcon />
        </View>
    );
}