import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { SendMoneyProps } from "./types";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import React from "react";
import { ScreenWidth } from "../shared";
import Profile from "../Header/Profile";

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    justify-content: space-around;
    padding: 10px;
    border-radius: 15px;
    width: ${ScreenWidth * 0.27}px;
    margin: 0px 10px 10px 0px;
`
const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer underlayColor={colors.secondary} style={{backgroundColor: props.background}} onPress={() => {
            alert("Send Money!")
        }}>
            <>
                <Profile img={props.img} imgContainerStyle={{marginBottom: 10}} />
                <SmallText textStyles={{textAlign: "left", color: colors.white, fontSize: 12}}>
                    {props.name}
                </SmallText>
                <RegularText textStyles={{textAlign: "left", color: colors.white, fontSize: 13}}>
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    )
}

export default SendMoneyItem