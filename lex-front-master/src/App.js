import { Router, Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Dash from './components/Dash';
import LeftSideBar from './components/LeftSideBar';
import SendMoney from './components/SendMoney';
import RightSideBar from './components/RightSideBar';
import SecureChannel from './components/SecureChannelComponents/SecureChannel';
import './styles/App.css'
import TransferComponent from './components/SecureChannelComponents/TransferComponent';
import history from './components/history';
import UserList from './components/userAdmin/UserList';
import UserCreate from './components/userAdmin/UserCreate';
import UserEdit from './components/userAdmin/UserEdit';
import UserDelete from './components/userAdmin/UserDelete';
import UserShow from './components/userAdmin/UserShow';
import AdminLogin from './components/userAdmin/AdminLogin';
import AdminSignUp from './components/userAdmin/AdminSignUp';



function App() {
  return (
    <div className="App">
        
        {/* route setup */}

        <Router history = {history} >
          <Switch>
            <Route exact path='/'> <Login></Login> </Route>
            <Route path='/signup'> <SignUp></SignUp> </Route>
            <Route path='/dash'> <Dash><LeftSideBar></LeftSideBar><SendMoney></SendMoney><RightSideBar></RightSideBar></Dash> </Route>
            <Route path='/secureChannel'> <Dash><LeftSideBar></LeftSideBar> <SecureChannel></SecureChannel> <RightSideBar></RightSideBar></Dash> </Route>
            <Route path='/security/transfer'> <Dash><LeftSideBar></LeftSideBar> <SecureChannel></SecureChannel><TransferComponent></TransferComponent> <RightSideBar></RightSideBar></Dash> </Route>
            <Route path='/admin' exact > <Dash><LeftSideBar></LeftSideBar> <UserList></UserList> <RightSideBar></RightSideBar></Dash> </Route>
            <Route path='/admin/login' exact > <AdminLogin></AdminLogin> </Route>
            <Route path='/admin/signup' exact > <AdminSignUp></AdminSignUp> </Route>
            <Route path='/admin/new' exact ><UserCreate></UserCreate></Route>
            <Route path='/admin/edit/:id' exact > <UserEdit></UserEdit></Route>
            <Route path='/admin/delete/:id' exact > <UserDelete></UserDelete></Route>
            <Route path='/admin/user/:id' exact > <Dash><LeftSideBar></LeftSideBar> <UserShow></UserShow> <RightSideBar></RightSideBar></Dash> </Route>
            {/* <Route path='/virtualcard'> <Dash> <LeftSideBar></LeftSideBar> virtual card <RightSideBar></RightSideBar> </Dash> </Route> */}
          </Switch>
        </Router>


    </div>
  );
}

export default App;
