//ProfileMedium.js
import React from 'react'
import ProfileImg from './ProfileImg'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'


function ProfileMedium (props)
{
    const [enabled, setDisabled] = React.useState(true);
    return (
        <span className='profile'>
            <img className='ProfileImg' src={props.src} />
            <div>{props.name}</div>
            <div><FontAwesomeIcon color='black' icon={faBirthdayCake} /> {props.birthday}</div>
            <div className='messageRow'>
                <textarea className='birthdayMessage' disabled={enabled}></textarea>
                <button className='editButton' onClick={() => setDisabled(!enabled)}><FontAwesomeIcon color='black' icon={faEdit} /></button>
            </div>
        </span>
    );
}

export default ProfileMedium