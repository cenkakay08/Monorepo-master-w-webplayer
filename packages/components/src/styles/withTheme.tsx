import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { connect } from "react-redux";
import themes from "./themes";

const defaultTheme = "purple";

const ThemeProvider = ({ theme = defaultTheme, children }) => {
    return (
        <StyledThemeProvider theme={themes[theme]}>
            {children}
        </StyledThemeProvider>
    );
};

const ConnectedThemeProvider = connect(
    (state) => ({
        theme: state.app.theme,
    }),
    null
)(ThemeProvider);

const withTheme = (Component) => (props) => (
    <ConnectedThemeProvider>
        <Component {...props} />
    </ConnectedThemeProvider>
);

export default withTheme;
