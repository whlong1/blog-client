import { useState, useEffect } from 'react'
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

// Components
import UserCard from '../../components/UserCard/UserCard'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) return <p>No Profiles</p>

  return (
    <main className={styles.container}>
      {profiles.map(profile => (
        <UserCard key={profile._id} user={profile} />
      ))}
    </main>
  )
}

export default Profiles