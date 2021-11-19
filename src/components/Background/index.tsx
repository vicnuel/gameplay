import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { theme } from "../../global/styles/theme";
import {styles} from "./styles";

type Props = {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    const {secondary100, secondary80} = theme.colors

    return (
        <LinearGradient
            style={styles.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}