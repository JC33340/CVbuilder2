type InputType = {
    placeholder:string,
    label:string,
    handleChange:(e:any)=>void,
    name:string,
    value:string
}

const Input = ({placeholder,label,handleChange,name,value}:InputType)=>{
    return(
        <div className="flex flex-col gap-y-1">
            <label>{label}</label>
            <input value={value} name = {name} className="border-[1px] border-black rounded-md p-2" placeholder={placeholder} onChange={handleChange}></input>
        </div>

    )
}

export default Input