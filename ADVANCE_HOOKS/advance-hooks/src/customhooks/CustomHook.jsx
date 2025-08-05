import { useFetch } from "./UserFetch";

function CustomHook(){
    const {data, loading, error} = useFetch("https://dummyjson.com/products");
    if(loading) return <p> Loading...</p>;
    if(error) return <p> Error: {error.message} </p>

    return (
        <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "10px", padding:'10px'}}>
            {data.products.map(item => (
                <div key={item.id} className="item" style={{border:"1px solid #ccc", margin:"10px", padding:"10px", textAlign:"center"}}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h2>{item.title} <span>$ {item.price}</span></h2>
                    </div>
            ))}
        </div>
    )
}

export default CustomHook;