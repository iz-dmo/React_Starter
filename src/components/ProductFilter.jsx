
export function ProductFilter({filters,onFilter}){
    return(
        <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
            Price $
            <input defaultValue={filters.minPrice}
                type="number"
                min={0}
                max={999}
                onChange={(event)=>onFilter("minPrice",event.target.value)}
            /> -$
            <input 
                defaultValue={filters.maxPrice}
                type="number"
                min={0} 
                max={999}
                onChange={(event)=>onFilter("maxPrice",event.target.value)}
            />
        </div>
    );

    
}