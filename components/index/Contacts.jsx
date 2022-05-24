export default function Contacts() {
    return(
    <footer 
    className="grid grid-cols-2 grid-flow-row place-items-center 
    opacity-70 hover:opacity-100 transition-all mt-10 text-sm m-1">
        <p className="text-center p-2">Nyisztor Sarolta csph. <br/> +36 30 276 8427 nyisztorsari@gmail.com</p>
        <p className="text-center p-2">A 682 Vácz Jenő cserkészcsapat a Magyar Cserkészszövetség tagja <i> www.cserkesz.hu</i></p>
        <p className="text-center ">Nyisztor Zsolt csp. <br/>+36 30 820 5693 nyisztorzsolt77@gmail.com</p>
        <p className="text-center ">Created by: Hang Benjámin</p>
    </footer>
    );
}


/*

.contacts-container{
    align-items: center;
    text-align: center;
    display: grid;
    opacity: .7;
    gap: 1rem;
    margin-bottom: 1rem;
    grid-template-areas: 
    'sari hivatalos'
    'zsolt kreator';

}

.contacts-container:hover{
opacity: 1;
transition: all 250ms ease-in-out;
}


.contact-item{
    height: 100%;
    padding: 3px;
}

#creator{
    opacity: 0.3;
    transition: all 250ms ease;
    font-size: 16px;
    
}
#creator:hover{
    opacity: 1;
    color: var(--light-blue);
transition: all 250ms ease-in-out;
}

*/