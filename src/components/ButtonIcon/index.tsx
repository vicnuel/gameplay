import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import DiscordImd from '../../assets/discord.png'
import { styles } from './styles'

export function ButtonIcon() {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.iconWhapper}>
                <Image source={DiscordImd} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                Entrar com Discord
            </Text>
        </TouchableOpacity>
    );
}