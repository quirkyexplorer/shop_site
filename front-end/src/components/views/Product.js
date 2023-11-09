
export default function Products({object}) {
    const {title, image, price} = object;

    return (
        <div>
            <h3>{title}</h3>
            <img src={image}/>
            <p>{price}</p>
        </div>
    );   
}