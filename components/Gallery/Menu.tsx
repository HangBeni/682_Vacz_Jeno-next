import Link  from "next/link";

function EventHandler() {
    return ( 
        <div>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'camp' },
          }}
        >
            Táborunk
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'farsang' },
          }}
        >
                <a>Farsang</a>
            </Link>
        </div>
     );
}

export default EventHandler;