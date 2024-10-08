import {NavLink} from 'react-router-dom'

const HeaderLink = ({children,link}:{children:React.ReactNode,link:string})=>{
    const styling = ' p-2 rounded-lg text-md md:text-xl font-semibold hover:text-black transition-colors'
    return(
        <NavLink to={link} className={({isActive})=>isActive?'text-black bg-[#d3d3d3]'+styling:'text-[#808080] bg-[#dedede]'+styling}>{children}</NavLink>
    )
}

export default HeaderLink