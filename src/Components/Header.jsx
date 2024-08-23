import React, { useState } from 'react'
import Logo from './../assets/Images/logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical, HiMenu} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle,setToggle] = useState(false);
  const list = [
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },{
      name:'WATCHLIST',
      icon:HiPlus
    },{
      name:'MOVIES',
      icon:HiPlayCircle
    },{
      name:'ORGINALS',
      icon:HiStar
    },{
      name:'SERIES',
      icon:HiTv
    },{
      name:'Menu',
      icon:HiMenu
    }

  ]
  console.log(toggle)

  return (
    <div className='flex  items-center justify-between  bg-black'>
      <div className=' hidden md:flex gap-[60px] py-5'>
      <img  className='w-[120px] mr-2'src={Logo} alt="" />
      {list.map((items)=>(
        <HeaderItem name={items.name} Icon={items.icon}/>
        
      ))}
       </div>
      <div className=' flex gap-[20px] md:hidden'>
      <img  className='w-[120px] 'src={Logo} alt="" />
      {list.map((items,index)=>index<3&&(
        <HeaderItem Icon={items.icon}/>
        
      ))}
      </div>
      <div className='md:hidden mr-[240px] items-center ' onClick={()=>{
        setToggle(!toggle)
      }}>
      <HeaderItem name ='' Icon={HiDotsVertical}/>
      {toggle?
      <div className=' px-5 py-4  border-gray-700  absolute mt-4 border-2 md:hidden bg-[#121212] '>

      {list.map((items,index)=>index>=3&& index<6 &&(
        <HeaderItem  name ={items.name} Icon={items.icon}/>
        
      ))}
      </div>:null}
      </div>
      
      <div>
        <img className='w-10 rounded-full mr-6 cursor-pointer sm:ml-4' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png" alt="" />
      </div>
    </div>
  )
}

export default Header