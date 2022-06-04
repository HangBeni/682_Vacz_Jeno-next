import Image from "next/image"; 
import ScrollToTop from "react-scroll-to-top";

function Back() {
    
    
    return (
    
        <div
        className="fixed bottom-2 right-2 m-1 z-30 cursor-pointer">
            <ScrollToTop 
            className="bg-[#76b82a] rounded-3xl p-1"
            component={ 
                <Image
                src={'https://ik.imagekit.io/HangBeni/Tabor/156110-removebg-preview_2-hsyCcxK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654337895856'}
                    layout='fixed'
                    width={'50px'}
                    height={'125px'}
                />}
            />
        </div>
    
    );
}

export default Back;