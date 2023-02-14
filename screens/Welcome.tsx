import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularButton from "../components/Buttons/RegularButton";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import { RootStackParamList } from "../navigators/RootStack";
import background from "./../assets/bgs/background_v1.png";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  flex: 1;
  width: 100%;
  max-height: 55%;
`;

const BottomSection = styled.View`
  flex: 1;
  width: 100%;
  padding: 25px;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  resize-mode: stretch;
  width: 100%;
  height: 100%;
`;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your money to ypur friends, family
          </SmallText>
          <RegularButton onPress={() => {navigation.navigate("Home")}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
