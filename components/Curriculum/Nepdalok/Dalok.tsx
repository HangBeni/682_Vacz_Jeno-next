import { Dal } from "../../../utils/Types";




function Dalok({dalok}: {dalok: Dal[]}) {
    
    
    
    
    
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] mt-10 gap-5">
            {dalok.map((dal) => { 
                return (
                    <div className="bg-bg_secondary text-font rounded-2xl h-min">
                        <video className="rounded-xl mx-auto w-full max-h-60" width={300} controls playsInline >
                            <source src={dal.Video} type="video/mp4" />
                            <source src={dal.Video} type="video/webm" />
                        </video>
                        <h2 className="text-xl md:text-2xl">{dal.Name}</h2>
                        <div>
                            <p>{dal.Lyrics.split('$').map((versszak) => {
                                return <div className="m-2 my-4 text-lg md:text-xl">
                                    {
                                        versszak.split('|').map((sor) => {
                                        return<span className="block">{sor}</span>
                                })}</div>
                            })}</p>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}

export default Dalok;