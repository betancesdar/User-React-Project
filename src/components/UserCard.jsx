import { motion } from 'framer-motion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '.././App.css'


const UserCard = () => {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const baseUrl = 'https://randomuser.me/api/?results=15'
  
    useEffect(()=> {
      axios.get(baseUrl)
        .then(response => setUsers(response.data.results))
        .catch(error => console.log(error))
    }, []); 
  
  return (
    <div className='user-container'>
      {users.map(user=> (
        <motion.div layout key={user.login.uuid} className='card' onClick={() => setIsOpen(!isOpen)}>
        <article className='user'>
          <motion.img layout="preserve-aspect" src={user.picture.large} alt={user.name.first} className='user-image' />
          <container className='container'>
          <motion.p layout="position" className='user-greet'>Hello my name is: </motion.p>
          <span layout className='user-name'>{`${user.name.first} ${user.name.last}`}</span>
          
          <motion.button layout className='user-button'onClick={() => setIsOpen(!isOpen)}>Show more details</motion.button>         
            {isOpen &&(
            <motion.div layout className='user-details'>
              <p><strong>Gender:</strong></p>
              <p>{user.gender}</p>
              <p><strong>Email:</strong></p>
              <p> {user.email}</p>
              <p><strong>Phone:</strong></p>
              <p>{user.phone}</p>
            </motion.div>
            )}         
          </container>
        </article>
        </motion.div>
       
      ))}
      </div>
  )
}

export default UserCard
