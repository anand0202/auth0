
import LogoutButton from './logout';
import LoginButton from './login';
import Profile from './profile';
function App() {
  return (
    <div className="App"style={{margin:20, display:'flex', flexDirection:'column', maxWidth:200,alignItems:'center' }} >

     <LoginButton />
     <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
