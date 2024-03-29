import { Greats } from "../../../utils/Types";
import Image from "next/image";


function GreatMagyars({greats}: {greats: Greats[]}) {
    return ( 
        <div className="mb-16 mx-3 mt-5 h-max">

            <h1 className="w-full text-center text-3xl font-black tracking-widest uppercase mb-2">Nagy Magyarjaink</h1>
            
            <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(450px,1fr))] gap-5 mx-2 max-h-fit
                            grid-cols-1">
                {greats.map((great) => {
                return (
                    <div
                    key={great.id}
                    className="group text-font dark:text-font_dark h-full flex flex-wrap md:flex-nowrap justify-center mx-3">
                        <div className="group-hover:translate-y-0 group-focus:translate-y-0 translate-y-5 [@media(hover:none)]:translate-y-0 duration-500">
                            <Image
                            alt="Kép az illetőről"
                            src={great.Image}
                            width={300}
                            height={200}
                            className='min-w-min mx-auto rounded-xl'
                            />
                            <h2 className="text-2xl w-full text-center">{great.Name}</h2>
                        </div>
                        <div className="group-hover:translate-x-0 group-focus:translate-x-0 group-hover:opacity-100 group-focus:opacity-100 -translate-x-16 ml-3
                        [@media(hover:none)]:translate-x-0 opacity-0 [@media(hover:none)]:opacity-100 duration-500 group-hover:visible [@media(hover:none)]:visible invisible">
                            <h3 className="text-xl md:text-2xl font-bold">{great.Promo}</h3>
                            <p className="p-2 md:text-xl text-lg"><em>{great.Quote}</em></p>
                            <p className="text-lg">Itt olvashattok róla többet: <a className="block hover:text-trendy_green [@media(hover:none)]:text-trendy_green duration-200 font-bold" href={great.Link}>{great.Link}</a>
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