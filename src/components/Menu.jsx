import React, { useState } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faNewspaper, faList, faUser, faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    const txt = 'bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-md';

    return (
        <div className='w-full  md:h-full flex md:flex-col md:w-20 md:justify-between px-2 py-5 items-center sticky justify-center'>
            <div className='flex flex-col gap-6 items-center w-[20%] md:w-full'>
                <NavLink to='/' >
                    <FontAwesomeIcon icon={faSearch} style={{ color: 'slategrey' }} />
                </NavLink>
            </div>
            <div className='flex md:flex-col gap-6 items-center w-[80%] md:w-full justify-evenly md:justify-normal'>
                <NavLink to='/' className={txt}>
                    <FontAwesomeIcon icon={faHouse} style={{ color: 'white', fontSize:'20px' }}/>
                </NavLink>
                <NavLink to='/' >
                    <FontAwesomeIcon icon={faNewspaper} style={{ color: 'slategrey' }}/>
                </NavLink>
                <NavLink to='/'>
                <FontAwesomeIcon icon={faList} style={{ color: 'slategrey' }}/>
                </NavLink>
                <NavLink to='/'>
                <FontAwesomeIcon icon={faUser} style={{ color: 'slategrey' }}/>
                </NavLink>
            </div>
            <div className='md:flex md:flex-col gap-6 items-center hidden'>
                <NavLink to='/'>
                <FontAwesomeIcon icon={faBell} style={{ color: 'slategrey' }}/>
                </NavLink>
                <NavLink to='/'>
                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: 'slategrey' }}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu