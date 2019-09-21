import * as React from 'react'
import { AppState } from '../store'
import { connect } from 'react-redux'

import { getProfile } from '../store/github/actions'

const Profile = () => {
  return (
    <div>
      Profile!
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
})

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile)