

const Section = ({header,children}:{header:string,children:React.ReactNode})=>{
    return(
        <div className="p-6 border-black border-4 rounded-xl flex flex-col gap-y-4">
            <span className="text-3xl font-semibold">{header}</span>
            {children}
        </div>
    )
}

export default Section