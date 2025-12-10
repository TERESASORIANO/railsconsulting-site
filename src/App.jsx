import React from 'react'
import Logo from '../assets/logo.png'

const translations = {
  es: {
    slogan: "On the right track in Life Sciences",
    intro: "En RAILS acompañamos a empresas e instituciones del sector salud para navegar los complejos requisitos regulatorios con rigor técnico, legal y ética profesional.",
    contact: "Contáctanos",
    services: "Ver servicios",
    servicesTitle: "Nuestros servicios",
    servicesDesc: "Brindamos soporte técnico y legal en cuatro áreas estratégicas para garantizar el cumplimiento y la operación segura de tu empresa en México y mercados internacionales.",
    marketsTitle: "Nuevos mercados",
    sectorsTitle: "Sectores que atendemos",
    contactTitle: "Contacto",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Ubicación",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Mensaje",
    sendButton: "Enviar",
    clearButton: "Limpiar"
  },
  en: {
    slogan: "On the right track in Life Sciences",
    intro: "At RAILS we help companies and institutions in the health sector navigate complex regulatory requirements with technical, legal rigor and professional ethics.",
    contact: "Contact us",
    services: "View services",
    servicesTitle: "Our services",
    servicesDesc: "We provide legal and technical support in four strategic areas to ensure compliance and safe operation of your company in Mexico and international markets.",
    marketsTitle: "New markets",
    sectorsTitle: "Sectors we serve",
    contactTitle: "Contact",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Location",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendButton: "Send",
    clearButton: "Clear"
  }
}

export default function App(){
  const [lang, setLang] = React.useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans antialiased bg-white text-gray-800">
      <header className="shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="RAILS logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-lg font-semibold">RAILS</h1>
              <p className="text-xs text-gray-500">Regulatory Affairs in Life Sciences</p>
            </div>
          </div>

          <nav>
            <ul className="flex gap-6 items-center text-sm">
              <li><a href="#home" className="hover:underline">{lang==='es'?'Inicio':'Home'}</a></li>
              <li><a href="#services" className="hover:underline">{lang==='es'?'Servicios':'Services'}</a></li>
              <li><a href="#markets" className="hover:underline">{lang==='es'?'Nuevos mercados':'Markets'}</a></li>
              <li><a href="#sectors" className="hover:underline">{lang==='es'?'Sectores':'Sectors'}</a></li>
              <li><a href="#contact" className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50">{t.contact}</a></li>
              <li><button className="text-sm px-3 py-1 border rounded-md" onClick={()=>setLang(lang==='es'?'en':'es')}>{lang==='es'?'EN':'ES'}</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="container mx-auto px-6 py-14 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-7/12">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">{t.slogan}</h2>
          <p className="text-lg text-gray-600 mb-6">{t.intro}</p>

          <div className="flex gap-4">
            <a href="#contact" className="bg-[#3c8600] text-white px-5 py-3 rounded-md shadow-sm">{t.contact}</a>
            <a href="#services" className="px-5 py-3 rounded-md border border-gray-200">{t.services}</a>
          </div>
        </div>

        <div className="lg:w-5/12">
          <div className="rounded-xl overflow-hidden border border-gray-100 p-6 shadow-sm">
            <div className="h-56 bg-gray-50 rounded-md flex items-center justify-center text-gray-300">Banner / Imagen</div>
            <p className="text-xs text-gray-500 mt-3">Podemos incorporar una foto corporativa o ilustración científica.</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-14">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6">{t.servicesTitle}</h3>
          <p className="text-gray-600 mb-8">{t.servicesDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title={lang==='es'?'Derecho Corporativo & Propiedad Intelectual':'Corporate Law & IP'} desc={lang==='es'?'Constitución de empresas, contratos, registro de marcas y protección de patentes.':'Company formation, contracts, trademark registration and patent protection.'} />
            <ServiceCard title={lang==='es'?'Regulación Sanitaria (COFEPRIS)':'Sanitary Regulation (COFEPRIS)'} desc={lang==='es'?'Registros sanitarios, avisos de funcionamiento, permisos de importación, etiquetas y claims.':'Sanitary registrations, operation notices, import permits, labeling and claims.'} />
            <ServiceCard title={lang==='es'?'Asuntos Públicos':'Public Affairs'} desc={lang==='es'?'Relación con autoridades, comunicación técnica y gestión regulatoria.':'Relations with authorities, technical communication and regulatory management.'} />
            <ServiceCard title={lang==='es'?'Ética & Compliance':'Ethics & Compliance'} desc={lang==='es'?'Diagnóstico de cumplimiento, políticas de integridad y capacitación.':'Compliance diagnostics, integrity policies and training.'} />
          </div>
        </div>
      </section>

      <section id="markets" className="container mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-4">{t.marketsTitle}</h3>
        <p className="text-gray-600 mb-6">Acompañamos a empresas mexicanas a expandirse internacionalmente y a empresas extranjeras a ingresar al mercado mexicano. Alianzas estratégicas en Brasil y Dubái.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketCard country="Brasil" notes="Asesoría regulatoria local y sinergias para importación." />
          <MarketCard country="Dubái" notes="Soporte para establecimiento y trámites regulatorios." />
          <MarketCard country="México" notes="Entrada al mercado nacional y trámites ante COFEPRIS." />
        </div>
      </section>

      <section id="sectors" className="bg-white py-14">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">{t.sectorsTitle}</h3>
          <p className="text-gray-600 mb-6">Medicamentos, dispositivos médicos, suplementos alimenticios, plaguicidas y cosméticos.</p>

          <div className="flex flex-wrap gap-3">
            {['Medicamentos','Dispositivos médicos','Suplementos','Plaguicidas','Cosméticos'].map(s => (
              <span key={s} className="px-3 py-2 bg-gray-100 rounded-full text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t.contactTitle}</h3>
            <p className="text-gray-600 mb-6">Escríbenos para diseñar un servicio a la medida de tu empresa. Respuesta en 48 hrs hábiles.</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3"><strong>{t.emailLabel}:</strong> <span>tsi@rails-consulting.com</span></div>
              <div className="flex items-center gap-3"><strong>{t.whatsappLabel}:</strong> <span>+52 55 0000 0000</span></div>
              <div className="flex items-center gap-3"><strong>{t.locationLabel}:</strong> <span>Ciudad de México</span></div>
            </div>
          </div>

          <div>
            <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Mensaje enviado (simulado)')}}>
              <input className="border border-gray-200 rounded-md p-3" placeholder={t.namePlaceholder} />
              <input className="border border-gray-200 rounded-md p-3" placeholder={t.emailPlaceholder} />
              <textarea className="border border-gray-200 rounded-md p-3" rows={5} placeholder={t.messagePlaceholder} />
              <div className="flex gap-3">
                <button type="submit" className="bg-[#3c8600] text-white px-4 py-2 rounded-md">{t.sendButton}</button>
                <button type="reset" className="px-4 py-2 rounded-md border">{t.clearButton}</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <img src={Logo} alt="RAILS" className="h-10 mb-2" />
            <p className="text-sm text-gray-300 max-w-md">RAILS - Regulatory Affairs in Life Sciences. Brindamos asesoría jurídica, técnica y regulatoria para el sector salud.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Servicios</h4>
              <ul className="mt-2 text-sm text-gray-300">
                <li>Regulación Sanitaria</li>
                <li>Asuntos Públicos</li>
                <li>Compliance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-2 text-sm text-gray-300">
                <li>Aviso de Privacidad</li>
                <li>Términos y condiciones</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-2 text-sm text-gray-300">
                <li>tsi@rails-consulting.com</li>
                <li>WhatsApp Business</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">© {new Date().getFullYear()} RAILS. Todos los derechos reservados.</div>
      </footer>
    </div>
  )
}

function ServiceCard({title, desc}){ return (
  <div className="p-6 bg-white rounded-xl border shadow-sm">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
)}

function MarketCard({country, notes}){ return (
  <div className="p-6 border rounded-lg shadow-sm">
    <h5 className="font-semibold">{country}</h5>
    <p className="text-sm text-gray-600 mt-2">{notes}</p>
  </div>
)}
