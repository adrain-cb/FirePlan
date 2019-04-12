import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  const usrColors = ["blue", "red", "pink", "indigo", "teal", "cyan", "lime", "green", "orange", "amber"];
  let randint = Math.floor(Math.random() * usrColors.length);
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className={"btn btn-floating " + usrColors[randint]}>{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
