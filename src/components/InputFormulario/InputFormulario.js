export function InputFormulario({label, type, name, placeholder}){
    return(
        <> 
        <label>{label}</label>
        <input type={type} name={name} className="u-full-width" placeholder={placeholder} value=""/>
        </>
    );
}