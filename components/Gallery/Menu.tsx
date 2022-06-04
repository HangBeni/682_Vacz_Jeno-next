import Link  from "next/link";

function EventHandler() {
    return ( 
        <div>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Camp' },
          }}
        >
            Táborunk
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Farsang' },
          }}
        >
                <a>Farsang</a>
            </Link>
        </div>
     );
}

export default EventHandler;