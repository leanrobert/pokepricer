import Image from "next/image";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="flex flex-col m-8">
      <div className="flex items-center gap-4">
        <Image src='/logo.png' className="bg-white rounded-full" height={25} width={25} alt='Pokepricer' />
        <h1 className='font-bold text-xl'>¿Qué es Pokepricer?</h1>
      </div>
      <p className="text-sm my-2 max-w-4xl">Pokepricer.com es un sitio web desarrollado por jugadores dedicado a brindarle a jugadores de Pokémon TCG:</p>
      <ul className="text-sm list-disc pl-6">
        <li>Precios precisos y relistas.</li>
        <li>Precios de los sitios web de ventas mas prestigiosos.</li>
        <li>Precios para cartas de cada set Pokémon TCG.</li>
      </ul>

      <h2 className="font-bold my-2 text-xl">¿Cómo se calculan los precios en Pokepricer.com?</h2>
      <p className="text-sm my-2 max-w-4xl">
        Los precios de Pokepricer.com se calculan utilizando un algoritmo que toma en cuenta los precios de las cartas de los sitios web de ventas mas prestigiosos.
        Su precio es a su vez multiplicado por el valor de Dolar Blue o Euro Blue del día, y convertido a pesos argentinos.
      </p>

      <h2 className="font-bold my-2 text-xl">¿Qué tiendas de cardas son consideradas?</h2>
      <ul className="my-2 list-disc pl-6 text-sm">
        <li>TCGPlayer</li>
        <li>Troll and Toad</li>
        <li>Cardmarket</li>
      </ul>

      <h2 className="font-bold my-2 text-xl">¿Cada cuánto son actualizados los precios?</h2>
      <p className="text-sm my-2 max-w-4xl">Todos los precios se actualizan 1 vez al día.</p>

      <h2 className="font-bold my-2 text-xl">Tengo una sugerencia!</h2>
      <p className="text-sm my-2 max-w-4xl">
        Nos encantaria escucharla! Siempre estamos buscando mejorar.
        Si tenes una sugerencia o pregunta, por favor contactanos por alguno de los siguientes medios.
      </p>

      <div className="flex gap-4 py-2 items-center">
        <Link className="transition-opacity duration-300 ease-in-out hover:opacity-70" href="https://www.linkedin.com/in/leandro-robert-sosa-166204188/" target="_blank">
          <svg className="w-10 h-10" width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill="#0077B5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"/>
          </svg>
        </Link>
        <Link className="transition-opacity duration-300 ease-in-out hover:opacity-70" href="mailto:leanrobert24@gmail.com" target="_blank">
          <svg className="w-10 h-10" width="40px" height="40px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f7f5ed" d="M6.99746829 5.206376l.0235081-.0174163 4.8423562 3.6154833H2.13158837l4.84237182-3.6154833z" className="fil0"/>
            <path fill="#f7f5ed" d="M4.56374 10.5595L9.43626 7.022l-.0265-.019h-.003l-.009-.01c-.45053-.3173-.89911-.6396-1.34661-.9653-.00005-.0001-.00008-.0001-.00012-.0001C6.88672 5.18 5.72961 4.3088 4.5638 3.4406v7.1135l.00011-.0001z" className="fil0"/><path fill="#e75a4d" d="M11.86331462 11.342143h.34182027c.43471944 0 .79038762-.35566584.79038762-.79038762V3.35103691c0-.43471944-.35567521-.79038762-.79038762-.79038762h-.34182027v8.7814859zm-9.73174422.0668536h-.34182027c-.43471007 0-.79038762-.35566584-.79038762-.79038762V3.35106034c0-.43471944.35566584-.79038762.79038762-.79038762h.34182027v8.8483395z" className="fil1"/><path fill="#f7f5ed" d="M6.99745032 6.15873972l.0235081.01742411 4.8423562-3.61551454H2.1315704l4.84237182 3.61551454z" className="fil0"/><path fill="#b7b6ad" d="M7.00268302 7.8725505l4.86067846 3.46960812V4.2977573c-.80412541.59883956-1.60412714 1.19911616-2.40519884 1.79209822-.75827446.56129689-1.51750643 1.11605681-2.28213667 1.65685245l-.00021868.0001562-.1731149.12568243z"/><path fill="#b7b6ad" fillRule="nonzero" d="M2.14986923 11.4342229l-.03659766-.0505307 4.89550325-3.5571426.0365508.0505307z"/><path fill="#e75a4d" d="M7.00268302 7.8725505C5.15723469 6.77326957 2.80294143 4.78635871.99939375 3.45886958l.53361435-.83645881.58299228-.04767177.01559853-.01407643L6.9739633 6.1761693l.02351278-.0174249.02351279.0174249 4.842364-3.61550673.01559892.01407643.5829923.04767177.53361434.83645881C11.0449094 4.89462874 9.00882679 6.55608909 7.0026799 7.8725505z" className="fil1"/>
            <path fill="none" d="M0-2034h2048V14H0z"/>
          </svg>
        </Link>
        <Link className="transition-opacity duration-300 ease-in-out hover:opacity-70" href="https://github.com/leanrobert" target="_blank">
          <svg className="w-10 h-10" width="40px" height="40px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__regular-github" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3"/></svg>
        </Link>
      </div>
    </div>
  )
}
