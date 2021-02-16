import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#008eff',
        },
        secondary: {
            main: '#fafafc',
        },
    },
});

export default theme;

// Blue color: 008eff (opacity 30% if lighter)
// Light grey background: fafafc
// Dark grey background for Upload: eeeeef
// White: ffffff
// Top line border: a1a4b1
// Bottom line border: dadada
// Dark text color: 2c2c2c
// Less dark text color: 505565
