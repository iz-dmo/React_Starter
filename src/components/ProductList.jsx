export function ProductList(props){
    return(
        <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
            {props.children}
        </div>
    );
}