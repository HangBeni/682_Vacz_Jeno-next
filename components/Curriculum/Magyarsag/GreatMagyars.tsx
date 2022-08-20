import { Greats } from "../../../pages/Curriculum/Magyarsag";
import Image from "next/future/image";


function GreatMagyars({greats}: {greats: Greats[]}) {
    return ( 
        <div className="mb-16 mx-3 mt-5 h-full">

            <h1 className="text-font w-full text-3xl text-center">Nagy Magyarjaink</h1>
            
            <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] md:grid-flow-col gap-4 mx-2 max-h-fit
                            grid-cols-1">
                {greats.map((great) => {
                return (
                    <div className="group text-font h-fit flex flex-wrap md:flex-nowrap justify-center">
                        <div className="group-hover:translate-y-0 group-focus:translate-y-0 translate-y-5 [@media(hover:none)]:translate-y-0 duration-500 w-2/3 ">
                            <Image
                            src={great.Image}
                            width={300}
                            height={200}
                            className='w-3/4 min-w-min h-auto min-h-min mx-auto rounded-xl'
                            />
                            <h2 className="text-2xl w-full text-center">{great.Name}</h2>
                        </div>
                        <div className="group-hover:translate-x-0 group-focus:translate-x-0 group-hover:opacity-100 group-focus:opacity-100 -translate-x-16 
                        [@media(hover:none)]:translate-x-0 opacity-0 [@media(hover:none)]:opacity-100 duration-500 ml-3 group-hover:visible [@media(hover:none)]:visible invisible">
                            <h3 className="text-xl font-bold">{great.Promo}</h3>
                            <p className="text-justify p-2"><em>{great.Quote}</em></p>
                            <p>Itt olvashattok róla többet: <a className="block hover:text-trendy_green [@media(hover:none)]:text-trendy_green duration-200 font-bold" href={great.Link}>{great.Link}</a>
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