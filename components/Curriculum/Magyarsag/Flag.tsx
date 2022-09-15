import Image from 'next/future/image'

function Flag() {
  return (
    <div className="py-5 px-2 rounded-b-3xl h-full bg-gradient-to-b from-red-600 via-white to-green-600">
      <div className='flex items-center'>
        <h1 className="text-2xl text-black text-center w-1/2 mx-2">
          Magyarország zászlaja
        </h1>
        <p className="mx-auto md:ml-auto md:mr-3  w-1/2 text-justify text-lg text-black ">
          <em>
            "Magyarország zászlaja három, egyenlő szélességű, sorrendben felülről
            piros, fehér és zöld színű, vízszintes sávból áll, amelyben a piros
            szín az <strong>erő</strong>, a fehér szín a <strong>hűség</strong>, a zöld szín a <strong>remény</strong> jelképe."{' '}
            <br />
          </em>
          <p className="text-right"> –Magyarország alaptörvénye I) cikk (2)</p>
        </p>
      </div>

      <div className="mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 w-11/12">
        <div className='grid place-items-center'>
          <h1 className="text-2xl text-black ">
            Magyarország címere
          </h1>
          <Image
          alt='Magyarország címere'
            src={
              'https://viiudujcvsyrgxwatpxm.supabase.co/storage/v1/object/public/images/Curriculum/Coat_of_arms_of_Hungary.svg.png?t=2022-08-13T12%3A20%3A44.059Z'
            }
            width={200}
            height={300}
            
          />
        </div>
        <ol className=" mr-3 w-fit text-justify text-lg text-black">
          <li className="list-decimal">
            <em>"Magyarország címere hegyes talpú, hasított pajzs.</em>
          </li>
          <ul></ul>
          <li className="list-decimal">
            <em>Első mezeje vörössel és ezüsttel hétszer vágott."</em>
          </li>
          <ul>
            <li className="list-disc">
              A hét törzs egyesülését jelképezi. Sok helyen olvasható hétszer
              tagolt Árpád Sávok. Akkor miért van nyolc sáv? A válasz egyszerű.
              A tagolást a piros és az ezüst mezők közötti vágások jelentik. Azt
              a hét vágást, amit a hét vezér tett a vérszerződéskor.
            </li>
            <li className="list-disc">
            Az ézüst sávok a Dunát, Tiszát, Drávát és a Szávát jelképezik.
            </li>
          </ul>
          <li className="list-decimal">
            <em>
              "Második, vörös mezejében zöld hármas halomnak arany koronás
              kiemelkedő középső részén ezüst kettős kereszt."
            </em>
          </li>
          <ul>
            <li className="list-disc">
              A magyar katolikus hagyomány szerint a címerben ábrázolt kettős
              kereszt (<em>crux gemina</em>) Szent István király apostoli
              királyságának jele, mert István az apostolokhoz hasonlóan,
              előzmények nélkül és az Apostoli Szentszékkel együttműködve
              teremtette meg Magyarország egyházszervezetét.
            </li>
            <li className="list-disc">
            A három halom Tátra, Mátra, Fátra.
            </li>
          </ul>

          <li className="list-decimal">
            <em>"A pajzson a magyar Szent Korona nyugszik."</em>
          </li>
          <ul>
            <li className="list-disc">
              Szent Korona a magyar alkotmányosság és államiság, a magyar
              függetlenség jelképe. Magyarországon a királyok nem készítettek
              trónra lépésükkor új koronát, minden királyunkat ugyanazzal a
              koronával koronázták meg.{' '}
            </li>
          </ul>
          <br />

          <p className="text-right">
            – Az Magyarország alaptörvénye (I) cikk (1)
          </p>
        </ol>
      </div>
    </div>
  )
}

export default Flag
