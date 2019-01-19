import React, { Component } from 'react'

import MailPage from './MailPage'
const USERNAMES = {
  ARAN: "S.Aran",
  GIGER: "H.R.Giger",
  REYNOLDS: "M.Reynolds"
};
const VALID_USERNAMES = [USERNAMES.REYNOLDS, USERNAMES.GIGER, USERNAMES.ARAN]

export default class UserNamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUserName: "",
      guessedUserName: ""
    }
  }

  onUsernameValidation(event) {
    event.preventDefault();
    this.setState((state) => {
      return {
        guessedUserName: VALID_USERNAMES.includes(state.inputUserName)
          ? state.inputUserName
          : "",
        inputUserName: ""
      }
    })
  }

  resetGuessedUserName() {
    this.setState({guessedUserName: ""})
  }

  render() {
    if (!this.state.guessedUserName) {
      return (
        <>
          <p>Mot de passe valide, bienvenue chez Escape Travel !</p>
          <h1>Identifiant</h1>
          <form>
            <input
              autoFocus
              autoComplete="off"
              type="text"
              value={this.state.inputUserName}
              onChange={(e) => this.setState({ inputUserName: e.target.value })} />
            <button
              type="submit"
              onClick={(e) => this.onUsernameValidation(e)}>
                Valider
            </button>
          </form>
          <p className="input-help">L'identifiant doit respecter la casse</p>
        </>
      )
    } else {
      return (
        <MailPage userNames={USERNAMES}  userName={this.state.guessedUserName} resetGuessedUserName={this.resetGuessedUserName.bind(this)}/>
      )
    }
  }

}