import React from 'react'

import Layout from './components/layout'
import PasswordPage from './pages/PasswordPage'
import UserNamePage from './pages/UserNamePage'
import ReactDOM from "react-dom";


const CORRECT_PASSWORD = "368543"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordGuessed: false
    }
  }

  checkPassword(password) {
    this.setState({ isPasswordGuessed: password === CORRECT_PASSWORD })
  }

  render() {
    return (
      <Layout>
        {
          this.state.isPasswordGuessed
            ? <UserNamePage />
            : <PasswordPage onPasswordChange={this.checkPassword.bind(this)} />
        }
      </Layout>
    )
  }
}

ReactDOM.render(<IndexPage/>, document.getElementById("app"))