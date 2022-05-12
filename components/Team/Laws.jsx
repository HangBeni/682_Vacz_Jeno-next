import { useState } from "react";

function Laws() {
   
   const [open, setOpen] = new useState('open');
   const laws = document.getElementById('laws');

    function show(){
        open==='open' ? 
        (laws?.classList.remove('translate-y-[-500px]'),setOpen('close'))
        : (laws?.classList.add('translate-y-[-500px]'),setOpen('open'));
    }


    return (
        <div className="content-center items-center mt-4"> 
        <h1 onClick={show} className="uppercase font-mono text-center my-2 text-4xl p-2 w-auto">Törvényeink</h1>
            <ol id="laws" className="grid grid-cols-1 md:grid-cols-2 place-items-center translate-y-[-500px] transition-all duration-500">  
                <li className="first-letter:text-2xl text-center p-2 text-base  ">1. A cserkész <strong>híven teljesíti kötelességeit </strong>, amelyekkel <strong> Istennek </strong>,<strong>hazájának</strong>  és <strong>embertársainak</strong>  tartozik.</li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">2. A cserkész,<strong>ahol tud</strong> ,<strong>segít.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">3. A cserkész <strong> minden cserkészt testvérének tekint.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">4. A cserkész <strong> másokkal szemben gyengéd</strong>,<strong> magával szemben szigorú.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">5. A cserkész <strong> egyeneslelkű </strong>és feltétlenül <strong> igazat </strong> mond.</li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">6. A cserkész <strong>szereti a természetet</strong>,<strong> jó az állatokhoz</strong>, és <strong>kíméli a növényeket.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">7. A cserkész feljebbvalóinak <strong>jó lélekkel</strong> és <strong>készségesen engedelmeskedik.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">8. A cserkész <strong>vidám</strong> és <strong>meggondolt.</strong></li>
                <li className="first-letter:text-2xl text-center p-2 text-base  ">9. A cserkész <strong>takarékos.</strong></li>
                <li><span className="text-2xl">10</span>. A cserkész <strong>testben</strong> és <strong>lélekben tiszta.</strong></li>
            </ol>
        </div>
    );
}

export default Laws;