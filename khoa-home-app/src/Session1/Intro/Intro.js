import React from 'react'

export default function Intro() {
    const body_text = 
`Oleksandr Olehovych Kostyliev (Ukrainian)[1] or Aleksandr Olegovich Kostilev (Russian) (Ukrainian: Олександр Олегович Костилєв, Russian: Александр Олегович Костылев; born 2 October 1997), better known as s1mple, is a Ukrainian professional Counter-Strike: Global Offensive player for Natus Vincere.[2] He is considered to be one of the best players in Global Offensive history.`;

function User(firstName, lastName, nickName, avatarUrl, profile) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.avatarUrl = avatarUrl;
    this.profile = profile;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const userLeft = new User(
    'Oleksandr Olehovych',
    'Kostyliev',
    'S1mple',
    '/images/s1mple.png',
    'https://www.instagram.com/s1mpleo/',
);

const userRight = new User(
    'Oleksandr Olehovych',
    'Kostyliev',
    'S1mple',
    '/images/s1mple.png',
    'https://www.instagram.com/s1mpleo/',
);

function render(User) {
    return(
      <div className="card" style={{width: "50%",height: "auto",margin: "3% auto",}}>
      <img className="card-img-top" 
      src={User.avatarUrl} 
      alt={User.getName()} />
      <div className="card-body">
        <h5 className="card-title">{User.getName()}</h5>
        <p className="card-text">
          {body_text}
        </p>
        <a href={User.profile} className="btn">
          {User.nickName}
        </a>
      </div>
    </div>
    );
}

    return (
        <div className='row'>
        <div className='col'>{[...Array(3)].map(() =>render(userLeft))}</div>
        <div className='col'>{[...Array(3)].map(() =>render(userRight))}</div>
    </div>
  )
}
