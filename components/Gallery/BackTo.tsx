import Image from "next/image"; 
import ScrollToTop from "react-scroll-to-top";

function BackTo() {
    
    
    return (
    
        <div
        className="fixed bottom-2 right-2 m-1 z-30 cursor-pointer">
            <ScrollToTop 
            className="rounded-3xl p-1"
            component={ 
                <Image
                src={'https://viiudujcvsyrgxwatpxm.supabase.co/storage/v1/object/public/images/156110-removebg-preview_2-hsyCcxK.png'}
                layout={'fixed'}   
                width={'75px'}
                height={'125px'}
                />}
            />
        </div>
    
    );
}

export default BackTo;