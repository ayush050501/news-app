import './App.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=6;
  const apikey=process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setprogress] = useState(0);

    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact strict path="/general" element={<News apikey={apikey} setProgress={setprogress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact strict path="/business" element={<News apikey={apikey} setProgress={setprogress} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact strict path="/entertainment" element={<News apikey={apikey} setProgress={setprogress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact strict path="/health" element={<News apikey={apikey} setProgress={setprogress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact strict path="/" element={<News apikey={apikey} setProgress={setprogress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact strict path="/science" element={<News apikey={apikey} setProgress={setprogress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact strict path="/sports" element={<News apikey={apikey} setProgress={setprogress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact strict path="/technology" element={<News apikey={apikey} setProgress={setprogress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        
      </Router>
        
      
      </>
    )
  
}

export default App