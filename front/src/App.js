import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profiles from "./Components/Profiles/Profiles";
import './App.css'

import Professors from "./Components/Professors/Professors";
import Classes from "./Components/Classes/Classes";
import Faculty from "./Components/Faculty/Faculty";
function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
              <Header/>
              <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/professors' element={<Professors state={props.state.ProfessorsList}/>}></Route>
                        <Route path='/classes' element={<Classes state={props.state.ClassesList}/>}></Route>
                        <Route path='/facultys' element={<Faculty state={props.state.FacultyList}/>}></Route>

                        <Route path='/professors/:id' element={<Profiles state={props.state.ProfessorsList}/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
