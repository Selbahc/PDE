import React from "react";

import '../stylesheets/MailTemplate.css'

export default ({ userName, recipients, children, resetGuessedUserName }) => (
  <div className="mail-template">
      <div className="vh-reset">
        <p>De: { userName }</p>
        <p>À: { recipients }</p>
      </div>
    { children }
    <button onClick={resetGuessedUserName}>Retour à l'identifiant</button>
  </div>
)