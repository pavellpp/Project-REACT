import './Answer.css'
import { useState } from 'react'

const Answer = () => {
  const [toggle, setToggle] = useState(1)
  
  const updateToggle = (id) => {
    return  setToggle(id)
  }

  return <section>
  <div div className='toggle'>
            
            <button className='flex-fill' onClick={() => {updateToggle(1)}}>HTML</button>
            <button className='flex-fill' onClick={() => {updateToggle(2)}} >CSS</button>
            <button className='flex-fill' onClick={() => {updateToggle(3)}}>JS</button>
            <button className='flex-fill' onClick={() => {updateToggle(4)}}>REACT</button>
          
        
          <div className={toggle === 1? 'show-content' : 'content'}>
                 <h3 className='answer'>HTML 
                 není programovací jazyk, protože neumožňuje
provádět žádné logické operace, slouží pouze k sestavování dokumentů.
Programovací jazyky pak často HTML generují nebo upravují, což si ukážeme
v navazujících kurzech. Dříve se HTML používalo i na designování
stránek, ale protože vzniklý kód byl pak nepřehledný, oddělil se design
do samostatného souboru a v HTML řešíme pouze obsah stránky.
</h3>
           </div>      
           <div className={toggle === 2? 'show-content' : 'content'}>
            <h3 className='answer' >CSS (Cascading Style Sheets)
             je jazyk speciálně vyvinutý pro stylování
HTML. Kaskádový proto, že ve stylech funguje
dědičnost. Když tedy např. dáme buňce tabulky červenou
barvu písma, tuto barvu písma automaticky dostanou i všechny odstavce textu v
této buňce. Samozřejmě stále můžeme nějakému odstavci dodatečně barvu
změnit, vždy platí ten konkrétnější styl.
</h3>
            </div>
            <div className={toggle === 3? 'show-content' : 'content'}>
              <h3 className='answer'>O JAVASCRIPTu
               se traduje, že jde o "nepochopený programovací jazyk".
Většina lidí totiž vůbec neví, co to JavaScript je, nebo si to myslí
špatně. Tento jazyk nachází své uplatnění na webu a stává se stále
více a více populární. Je nedílnou součástí moderních webů a
aplikací. Udělejme si rychlou odbočku do minulosti a řekněme si více o
vzniku tohoto jazyka. Jen tak pochopíme, za jakým účelem byl vytvořen a k
čemu by měl sloužit.
</h3>
           </div>   
           <div className={toggle === 4? 'show-content' : 'content'}>
              <h3 className='answer'>REACT
              Na rozdíl od různých kompletních frameworků (např. Angular) se React soustředí na jednu
specifickou oblast - UI. Pokud jste seznámeni s konceptem MVC architektury, React tvoří
právě a pouze view, tedy pohledovou vrstvu aplikace,
která prezentuje data uživateli. React se z tohoto důvodu s oblibou
používá s dalšími knihovnami a existuje kolem něj celý
ekosystém. Ten je potom předmětem navazujících kurzů. Pro
účely tohoto kurzu si nicméně vystačíme s téměř čistým Reactem
</h3>
            </div>
         </div>   
        
    </section>
}     


export default Answer
