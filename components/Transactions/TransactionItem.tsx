import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionProps } from "./types";
import TransactionAvi from "./TransactionAvi";
import RegularText from "../Texts/RegularText";
import { View } from "react-native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import React from "react";

const LeftView = styled.View`
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex: 2;
    flex-direction: row;
`
const RightView = styled.View`
    flex: 1;
`

const TransactionRow = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 25px;
`
const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi background={props.art.background} icon={props.art.icon} />
                <View style={{ marginLeft: 10 }}>
                    <RegularText textStyles={{ color: colors.secondary, textAlign: 'left', marginBottom: 5 }}>
                        {props.title}
                    </RegularText>
                    <SmallText textStyles={{ textAlign: "left", color: colors.grayDark }}>
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText textStyles={{ color: colors.secondary, textAlign: 'right', marginBottom: 5 }}>
                    {props.amount}
                </RegularText>
                <SmallText textStyles={{ textAlign: "right", color: colors.grayDark }}>
                    {props.date}
                </SmallText>
            </RightView>
        </TransactionRow>
    )
}

export default TransactionItem