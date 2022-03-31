import React from "react";
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from "./components/navigation/navigation.component";
import Homepage from "./routes/homepage/homepage.component";
import Meditation from "./routes/meditation/meditation.component";
import Pomodoro from "./routes/pomodoro/pomodoro.component";
import Affirmations from "./routes/affirmations/affirmations.component";
import Journaling from "./routes/journaling/journaling.component";
import Auth from "./routes/auth/auth.component";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage/>}/>
        <Route path='meditation' element={<Meditation/>} />
        <Route path='auth' element={<Auth/>}/>
        <Route path={'pomodoro'} element={<Pomodoro/>}/>
        <Route path='affirmations' element={<Affirmations/>} />
        <Route path='journaling' element={<Journaling/>} />
      </Route>
    </Routes>
  );
};

export default App;
