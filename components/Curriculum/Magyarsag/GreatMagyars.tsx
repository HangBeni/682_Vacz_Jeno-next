import { Greats } from "../../../pages/Curriculum/Magyarsag";
import Image from "next/future/image";


function GreatMagyars({greats}: {greats: Greats[]}) {
    return ( 
        <div className="mb-16 mt-5 h-full">

            <h1 className=" text-font w-full text-3xl text-center">Nagy Magyarjaink</h1>
            
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(500px,1fr))] gap-3 mx-2 max-h-fit">
                {greats.map((great) => {
                return (
                    <div className="group text-font flex h-fit">
                        <div className="group-hover:translate-y-0 translate-y-5 duration-500 w-fit ">
                            <Image
                            src={great.Image}
                            width={300}
                            height={200}
                            className='object-fill w-max h-fit min-w-fit  rounded-xl'
                            />
                            <h2 className="text-2xl w-full text-center">{great.Name}</h2>
                        </div>
                        <div className="group-hover:translate-x-0 group-hover:opacity-100 -translate-x-16 opacity-0 duration-500 ml-3">
                            <h3 className="text-xl font-bold">{great.Promo}</h3>
                            <p className="text-justify"><em>{great.Quote}</em></p>
                            <p>Itt olvashattok róla többet: <a className="hover:text-trendy_green duration-200 font-bold" href={great.Link}>{great.Link}</a>
                            </p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
     );
}

export default GreatMagyars;