import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import { CardProps } from "./types";

import card_bg from './../../assets/bgs/background_transparent.png'
import RegularText from "../Texts/RegularText";
import React from "react";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps} from "../../screens/Home";

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`

const CardRow = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`

const CardItem: FunctionComponent<CardProps> = (props) => {
    const navigation = useNavigation<HomeProps["navigation"]>();

    const handlePress = () => { 
        navigation.navigate("Balance", {...props})
    };

    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{color: colors.white, bottom: 12}}>
                            ****** {props.accountNumber.slice(6,10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{flex: 3}}> 
                            <SmallText textStyles={{marginBottom: 5, color: colors.grayLight}}>
                                Total balance
                            </SmallText>
                            <RegularText textStyles={{fontSize: 19}}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo}/>
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    )
}

export default CardItem