import logo from './logo.svg';
import './App.css';
import theme from './utilities/materialTheme';
import {ThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import StepsForm from './components/StepsForm'

function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <ThemeProvider theme={theme}>
                    <StepsForm/>
                </ThemeProvider>
            </Container>
        </div>
    );
}

export default App;
