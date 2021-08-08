import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/AuthPage/Auth';
import Notes from './components/NotesPage/Notes';
import { NotesStore } from './store/NotesStore';
import { UserStore } from './store/UserStore';
import './styles/index.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))

  useEffect(() => {
    const data = localStorage.getItem('user')
    setUser(data)
  }, [user])

  return (
    <BrowserRouter>
      <>
        {user ? 
          (
            <Switch>
              <Route path="/notes" exact>
                <Notes notesStore={NotesStore} />
              </Route>
              <Redirect to="/notes" />
            </Switch>
          )
          :
          (
            <Switch>
              <Route path="/auth" exact>
                <Auth userStore={UserStore} />
              </Route>
              <Redirect to="/auth" />
            </Switch>
          )
        }
      </>
    </BrowserRouter>
    
  );
}

export default App;
