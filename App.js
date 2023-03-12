import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import StackNavigator from "./navigators/StackNavigator";
import { store } from "./redux/store";
import {
    Provider as PaperProvider,
    MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4CAF50",
        secondary: "yellow",
    },
};

export default function App() {
    const persistor = persistStore(store);
    return (
        <PaperProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <StatusBar style="dark" />
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
