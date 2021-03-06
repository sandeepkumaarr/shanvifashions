import React from 'react';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import { Route, Switch } from 'react-router-dom'
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
 
import './App.css';


class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
    if(userAuth) {

      const userRef = await  createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {

        this.setState(
          {
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        })

        console.log(this.state);

      });

    } else {
      this.setState({
        currentUser: userAuth
      })
    }
    
    

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route path="/shop"  component={ShopPage} />
            <Route path="/signin"  component={SignInAndSignUpPage} />
          </Switch>
      </div>
    ); 
  }


}

export default App;
