

type InputType = {
    placeholder:string,
    label:string,
    handleChange:(e:any)=>void,
    name:string,
    value?:string,
    type?:string,
    checked?:boolean,
    onKeyUp?:(e:React.KeyboardEvent<HTMLInputElement>)=>void
}

const Input = ({placeholder,label,handleChange,name,value,type='text',onKeyUp}:InputType)=>{
    return(
        <div className={`flex flex-col gap-y-1 w-full ${type==='checkbox'?'items-start':''}`}>
            <label>{label}</label>
            <input onKeyUp={onKeyUp} value={value} name = {name} type={type} className="border-[1px] border-black rounded-md p-2" placeholder={placeholder} onChange={handleChange}></input>
        </div>

    )
}

export default Input