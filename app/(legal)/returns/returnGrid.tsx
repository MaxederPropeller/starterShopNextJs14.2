

import { FirmenInformationen } from '@/lib/links';


export default function ReturnGrid() {
  return (
    <>
    
            <div className="mx-auto max-w-3xl grid gap-8  min-[450px]:grid-cols-2 RT pt-12 px-4">
              <div className="grid gap-1">
                <h2 className="text-xl font-bold">Kontakt</h2>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                    Adresse
                  </p>
                  <p className="mr-2 w-2/3">
                  {FirmenInformationen.firmenStrasse} {FirmenInformationen.firmenStrasseNr}
                  <br />
                  {FirmenInformationen.firmenPLZ} {FirmenInformationen.firmenOrt}
                  <br />
                  {FirmenInformationen.firmenLand}
                  </p>
                </div>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                  Telefon
                  </p>
                  <p className="mr-2 w-2/3">
                  {FirmenInformationen.Tel}                
                  </p>
                </div>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                  E-Mail
                  </p>
                  <p className="mr-2 w-2/3">
                  {FirmenInformationen.Email}
                  </p>
                </div>
          
              
              </div>
              <div className="grid gap-1">
                <h2 className="text-xl font-bold">Webdesign</h2>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                  Astroboy Media
                  </p>
                  <p className="mr-2 w-2/3">
                  Könizstrasse 4
                  <br />
                  3008 Bern
                  <br />
                    Schweiz
                  </p>
                </div>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                    Telefon
                  </p>
                  <p className="mr-2 w-2/3">
                    +41 79 123 93 25 
                  </p>
                </div>
                <div className="text-sm flex text-start">
                  <p className="mr-2 w-1/3">
                    E-Mail
                  </p>
                  <p className="mr-2 w-2/3">
                  max.schweller@gmail.com
                  </p>
                </div>
          
              
              </div>
              <div className="grid gap-1">
                <h2 className="text-xl font-bold">Vertreten durch</h2>
                <p className="text-sm">
                    {FirmenInformationen.Inhaber}
                </p>
                <p className="text-sm">
                    {FirmenInformationen.InhaberTel}
                </p>
                <p className="text-sm">
                    {FirmenInformationen.InhaberMail}
                </p>
            
           
              </div>
              
          
                    <div className="grid gap-1">
                      <h2 className="text-xl font-bold">Haftungsausschluss</h2>
                      <p className="text-sm">
                        Haftung für Inhalte: Als Diensteanbieter sind wir gemäß Artikel 10 des Bundesgesetzes über das Urheberrecht und verwandte Schutzrechte (URG) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen aktiv zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                    </div>

                    <div className="grid gap-1">
                      <h2 className="text-xl font-bold">Urheberrechtsinformationen</h2>
                      <p className="text-sm">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>

                    <div className="grid gap-1">
                      <h2 className="text-xl font-bold">Zusätzliche Rechtliche Hinweise</h2>
                      <p className="text-sm">
                        Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe Links&quot;). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Seitenbetreiber hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich.
                      </p>
                    </div>
        
             
            </div>
         
    </>
  )
}