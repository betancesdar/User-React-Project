import './App.css'
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import { UsersContainer } from './components/UserCardStyled';
import useFetchData from './hooks/useFetchData';


function App() {
  const URL = 'https://randomuser.me/api/?results=15'
  const users = useFetchData(URL);

  return (
    <div className="App">
    <Navbar />
    <UsersContainer>
    {users?.map((user)=> {
      return(
        <UserCard user={user}/>
      )
    })}
    </UsersContainer>

   
    </div>
  )
}

export default App
