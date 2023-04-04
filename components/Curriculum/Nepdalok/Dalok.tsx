import { Dal } from "../../../utils/Types";




function Dalok({dalok}: {dalok: Dal[]}) {
    
    
    
    
    
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] mt-10 gap-5 mx-3">
            {dalok.map((dal) => { 
                return (
                    <div className="bg-bg_secondary dark:bg-bg_secondary_dark text-font dark:text-font_dark rounded-2xl h-min">
                        <video className="sticky md:sm:top-[5.7rem] top-[4.3rem] rounded-xl mx-auto w-full max-h-60 bg-bg_secondary dark:bg-bg_secondary_dark" width={300} controls playsInline >
                            <source src={dal.Video} type="video/mp4" />
                            <source src={dal.Video} type="video/webm" />
                        </video>
                        <h2 className="text-xl md:text-2xl">{dal.Name}</h2>
                        <div>
                            <p className=""
                            >{dal.Lyrics.split('$').map((versszak) => {
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