import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from "./Header/Header";
import {Container} from "@material-ui/core";
import News from "./News/News";
import Post from "./Post/Post";

function App() {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <News/>
                    </Route>
                    <Route exact path='/:postId'>
                        <Post/>
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
