import { ReactNode } from "react";
import { TextStyle , StyleProp} from "react-native";

export interface TextProps {
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
}