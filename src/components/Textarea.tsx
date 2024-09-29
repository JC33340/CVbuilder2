const Textarea = ({label,placeholder,handleChange,value,name,maxLength}:{
    label:string,
    placeholder:string,
    handleChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value:string,
    name:string,
    maxLength:number
})=>{
    return(
        <div className="flex flex-col gap-y-2">
            <label>{label}</label>
            <textarea maxLength={maxLength} name={name} value = {value} placeholder={placeholder} onChange={handleChange}className="border-[1px] border-black rounded-md p-2" rows={4} cols={50}></textarea>
        </div>
    )
}

export default Textarea