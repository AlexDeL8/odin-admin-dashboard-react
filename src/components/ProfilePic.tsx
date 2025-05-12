import './Dashboard.css'

type ProfilePicProps = {
    size: number;
    image: string;
}

const ProfilePic = (props: ProfilePicProps) => {
  return (
    <div className='profilePicContainer'>
        <img className='profilePicImg' src={props.image} alt='Profile Photo'></img>
    </div>
  )
}

export default ProfilePic