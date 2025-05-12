import './Dashboard.css'

type ProfilePicProps = {
    size: number;
    image: string;
}

const ProfilePic = (props: ProfilePicProps) => {
    let pictureSizeClass = 'pictureSizeSm'
    switch (props.size) {
        case 1:
            pictureSizeClass = 'pictureSizeSm'
            break;
        case 2:
            pictureSizeClass = 'pictureSizeMd'
            break;
        case 3:
            pictureSizeClass = 'pictureSizeLg'
            break;
        default:
            pictureSizeClass = 'pictureSizeSm'
            break;
    }
    return (
        <div className={'profilePicContainer ' + (pictureSizeClass)}>
            <img className='profilePicImg' src={props.image} alt='Profile Photo'></img>
        </div>
    )
}

export default ProfilePic