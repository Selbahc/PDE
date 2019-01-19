import React, { Component } from 'react'

export default class PasswordPage extends Component {
  constructor(props) {
    super(props)
    this.state = { inputPassword: "" }
  }

  onPasswordValidation(event) {
    event.preventDefault();
    this.props.onPasswordChange(this.state.inputPassword)
    this.setState({ inputPassword: "" })
  }

  render() {
    return (
      <>
        <h1>Mot de passe</h1>
        <form>
          <input
            autoComplete="off"
            type="text"
            autoFocus
            maxLength="6"
            value={ this.state.inputPassword }
            onChange={(e) => this.setState({ inputPassword: e.target.value })} />
          <button onClick={(e) => this.onPasswordValidation(e)} type="submit">Valider</button>
        </form>
        <p className="input-help">Le mot de passe doit comporter 6 chiffres</p>
      </>
    )
  }
}