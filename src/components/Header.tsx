import HeaderLink from "./HeaderLink"

const Header = ()=>{
    return(
        <header className="flex justify-between p-4 sticky top-0 backdrop-blur-3xl">
            <span className="text-3xl font-bold">CV-Builder</span>
            <div className="flex gap-x-4">
                <HeaderLink link="/">Information</HeaderLink>
                <HeaderLink link='/preview'>Preview</HeaderLink>
            </div>
        </header>
    )
}

export default Header