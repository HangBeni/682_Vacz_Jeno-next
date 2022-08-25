import { Dal } from "../../../pages/Curriculum/Nepdal";

function Dalok({dalok}: {dalok: Dal[]}) {
    return ( 
        <div className="grid place-items-center grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] mt-10">
            {dalok.map((dal) => {
                return (
                    <div>
                        <video className="rounded-xl mx-auto" width={300} controls playsInline >
                            <source src={dal.Video} type="video/mp4"/>
                        </video>
                        <h2 className="text-xl md:text-2xl">{dal.Name}</h2>
                        <p>{dal.Lyrics.split('$').map((versszak) => {
                            return <div className="m-2 my-4 text-lg md:text-xl">{versszak.split('|').map((sor) => {
                                return<span className="block">{sor}</span>
                            })}</div>
                        })}</p>
                    </div>
                )
            })}
        </div>
     );
}

export default Dalok;