import './App.css';
import UsersWrapper from "./components/UsersContainer/UsersWrapper";
import CommentsWrapper from "./components/CommentsContainer/CommentsWrapper";
import CarsWrapper from "./components/CarsContainer/CarsWrapper/CarsWrapper";

function App() {
    return (
        <div className="App">
            <CarsWrapper/>
            <hr/>
            <UsersWrapper/>
            <hr/>
            <CommentsWrapper/>
        </div>
    );
}

export default App;
