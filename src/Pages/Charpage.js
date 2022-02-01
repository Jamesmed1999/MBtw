import './CharPage.css'
function Charpage()
{
    let j = 12;
    console.log(j)
    
    console.log(process.env.REACT_APP_API_KEY)
    return(
        <div className="ST">
        <h2>Shiki Tono</h2>
        <p>Twitter go here</p>
        </div>
        
    );
}
export default Charpage;