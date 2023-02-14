import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularButton from "../Buttons/RegularButton";
import { colors } from "../colors";
import { useNavigation } from "@react-navigation/native";
import { Props as BalanceProps} from "../../screens/Balance";

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`

const ButtonSection: FunctionComponent = () => {
    const navigation = useNavigation<BalanceProps["navigation"]>();

    const handlePress = () => { 
        navigation.navigate("Home")
    };
    return (
        <ButtonSectionBackground>
            <RegularButton btnStyles={{width: "50%"}} onPress={handlePress}>
                Cancel <Ionicons size={17} name='card' color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    )
}

export default ButtonSection;