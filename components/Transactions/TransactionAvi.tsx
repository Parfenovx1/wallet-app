import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionAviProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import React from "react";


const StyledView = styled.View`
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 10px;
`
const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{backgroundColor: props.background}}>
            <Ionicons name={props.icon} size={25} color={colors.white}/>
        </StyledView>
    )
}

export default TransactionAvi