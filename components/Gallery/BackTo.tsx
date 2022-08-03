import Image from "next/image"; 
import { useEffect, useState } from "react";

function BackTo() {
    const [showGo, setShowGo] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400)
            setShowGo(true);
            else
            setShowGo(false);
        })
    }, [])

    const goTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }


    return (
    
        <div className="fixed bottom-2 right-2 m-1 z-30 cursor-pointer">
            {' '}
            {showGo && (
            <Image
            src={'https://viiudujcvsyrgxwatpxm.supabase.co/storage/v1/object/public/images/156110-removebg-preview_2-hsyCcxK.png'}
            onClick={goTop}
            width={200}
            height={200}
            />
            )}
             {' '}
        </div>
    
    );
}

export default BackTo;