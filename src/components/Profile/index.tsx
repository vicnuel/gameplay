import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {



  return (
    <View style={styles.container}>
    
      <RectButton>
        <Avatar urlImage='https://github.com/VictorEmanuelLima.png' />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          
          <Text style={styles.username}>
            Victor
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  )

}