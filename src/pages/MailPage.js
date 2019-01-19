import React from "react"
import MailTemplate from '../components/MailTemplate'
import AranMail from "../components/AranMail"
import ReynoldsMail from "../components/ReynoldsMail"
import GigerMail from "../components/GigerMail"

export default ({ userName, userNames, resetGuessedUserName }) => {
  let mailTemplate

  if (userName === userNames.GIGER) {
    mailTemplate = (
      <MailTemplate userName={userName} recipients={`${userNames.REYNOLDS}, ${userNames.ARAN}`} resetGuessedUserName={resetGuessedUserName}>
        <GigerMail/>
      </MailTemplate>
    )
  }
  if (userName === userNames.ARAN) {
   mailTemplate = (
     <MailTemplate userName={userName} recipients={userNames.REYNOLDS} resetGuessedUserName={resetGuessedUserName}>
       <AranMail/>
     </MailTemplate>
   )
  }
  if (userName === userNames.REYNOLDS) {
   mailTemplate = (
     <MailTemplate userName={userName} recipients={userNames.ARAN} resetGuessedUserName={resetGuessedUserName}>
       <ReynoldsMail/>
     </MailTemplate>
   )
  }

  return mailTemplate
}