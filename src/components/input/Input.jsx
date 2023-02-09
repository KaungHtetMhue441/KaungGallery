export default  function Input({type="text",name,containerClass="",placeholder="",label}){
    return (
        <div className={"form-floating mb-3 "+containerClass}>
            <input type={type} className="form-control" name={name} id={name} placeholder={placeholder}/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}