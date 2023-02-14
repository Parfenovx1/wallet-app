import { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { SendMoneySectionProps } from "./types";
import BottomSheet from "reanimated-bottom-sheet";
import RegularText from "../Texts/RegularText";
import { TouchableOpacity } from "react-native";
import SmallText from "../Texts/SmallText";
import React from "react";
import SendMoneyItem from "./SendMoneyItem";

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;
const SendMoneyRow = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const SendMoneyList = styled.FlatList`
  width: 100%;
  padding-horizontal: 25px;
  min-height: 80%;
  flex: auto;
`;

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
            Send money to
          </RegularText>
          <TouchableOpacity onPress={() => alert("Add")}>
            <SmallText
              textStyles={{ fontWeight: "bold", color: colors.teritary }}
            >
              +Add
            </SmallText>
          </TouchableOpacity>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({item} : any) => <SendMoneyItem {...item}/>}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;
