import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";
import React from "react";
import CardSection from "../components/Cards/CardsSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNumber: "345734573457",
      balance: 2000.13,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNumber: "753275327532",
      balance: 100.30,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNumber: "912391239123",
      balance: 45000.45,
      alias: "School Prepaid",
      logo: logo1,
    },
    {
      id: 4,
      accountNumber: "345612439755",
      balance: 10780.35,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 5,
      accountNumber: "013523498456",
      balance: 24100.34,
      alias: "Personal Prepaid",
      logo: logo2,
    },
  ]

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car"
      }
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Tom Tailor",
      art: {
        background: colors.teritary,
        icon: "cart"
      }
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "14 Oct 2021",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "airplane"
      }
    }
  ]

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "Coby Andoh",
      background: colors.teritary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "4450.56",
      name: "Harlen Scot",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "6450.56",
      name: "James Corbyn",
      background: colors.accent,
      img: portrait3,
    }
  ]

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData}/>
    </HomeContainer>
  );
};

export default Home;
