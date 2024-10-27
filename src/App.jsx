import Profile from "./components/Profile/Profile";
import profileData from './assets/userData.json';
import friends from './assets/friends.json';
import FriendList from "./components/FriendList/FriendList";
import transactions from "./assets/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


const App = () => {
  return (
    <div>
      <Profile user={profileData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App