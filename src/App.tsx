import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  BarChart3, 
  Calculator, 
  Briefcase, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';

const navLinks = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Como Funciona', href: '#processo' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Depoimentos', href: '#depoimentos' },
];

const team = [
  {
    name: "Roberto Almeida",
    role: "Sócio Diretor",
    image: "https://picsum.photos/seed/roberto/400/400?grayscale"
  },
  {
    name: "Juliana Costa",
    role: "Head de Tributário",
    image: "https://picsum.photos/seed/juliana/400/400?grayscale"
  },
  {
    name: "Marcelo Silva",
    role: "Head de Auditoria",
    image: "https://picsum.photos/seed/marcelo/400/400?grayscale"
  },
  {
    name: "Fernanda Lima",
    role: "Consultora Societária",
    image: "https://picsum.photos/seed/fernanda/400/400?grayscale"
  }
];

const services = [
  {
    title: 'Planejamento Tributário',
    description: 'Estratégias avançadas para otimizar sua carga tributária com total segurança jurídica e conformidade.',
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    title: 'BPO Financeiro',
    description: 'Terceirização completa da sua gestão financeira, permitindo que você foque no core business.',
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: 'Consultoria Societária',
    description: 'Abertura, alteração e encerramento de empresas, além de reestruturações societárias complexas.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Auditoria e Compliance',
    description: 'Revisão rigorosa de processos e demonstrações contábeis para garantir transparência e mitigação de riscos.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico Inicial',
    description: 'Análise profunda da sua estrutura atual para entender objetivos e necessidades regulatórias.',
  },
  {
    number: '02',
    title: 'Estratégia Personalizada',
    description: 'Desenvolvimento de um roadmap contábil e tributário alinhado ao seu modelo de negócio.',
  },
  {
    number: '03',
    title: 'Execução e Conformidade',
    description: 'Implementação meticulosa da estratégia, garantindo que cada obrigação seja cumprida no prazo.',
  },
  {
    number: '04',
    title: 'Suporte Contínuo',
    description: 'Acompanhamento proativo e adaptação a novas legislações para sustentar seu crescimento.',
  },
];

const testimonials = [
  {
    quote: "A equipe da Apex transformou nossa visão sobre contabilidade. Eles não apenas entregam guias, mas fornecem insights estratégicos que impulsionaram nosso crescimento em 40% no último ano.",
    author: "Carlos Mendes",
    role: "CEO, TechNova Solutions"
  },
  {
    quote: "Profissionalismo impecável e profundo conhecimento da legislação tributária. A transição do nosso BPO financeiro para eles foi a melhor decisão que tomamos.",
    author: "Mariana Costa",
    role: "Diretora Financeira, Grupo Varejo+"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Animations Setup
  const { scrollYProgress, scrollY } = useScroll();
  
  // Parallax for Hero
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E2E8F0] selection:bg-white selection:text-black font-sans">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white font-display flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm" />
            APEX
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-[#A3A3A3] hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contato" className="text-sm font-medium text-white hover:text-[#A3A3A3] transition-colors">
              Login Cliente
            </a>
            <a href="#contato" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              Fale Conosco <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display text-white border-b border-[#262626] pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contato" className="bg-white text-black px-6 py-4 rounded-full text-center font-medium mt-4">
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#121212] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">Contabilidade Estratégica</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight text-white mb-8"
            >
              Onde a precisão <br className="hidden md:block" />
              <span className="text-[#A3A3A3]">encontra a confiança.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mb-10 leading-relaxed"
            >
              Capacitamos empresas com serviços contábeis, tributários e financeiros abrangentes. Guiamos inovadores através de desafios complexos para construir e escalar negócios sólidos.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contato" className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                Agende uma Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="px-8 py-4 rounded-full text-base font-medium border border-[#262626] hover:bg-[#121212] transition-colors flex items-center justify-center">
                Nossos Serviços
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-[#262626] bg-[#0A0A0A] py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-8 items-center text-sm font-mono text-[#A3A3A3] uppercase tracking-widest"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Planejamento Tributário</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
              <span>BPO Financeiro</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
              <span>Auditoria</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
              <span>Consultoria Societária</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
              <span>Gestão Contábil</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Process Section */}
      <section id="processo" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">
                Como nós <br />trabalhamos
              </h2>
              <p className="text-[#A3A3A3] text-lg max-w-md">
                Uma abordagem estruturada e transparente para garantir que sua empresa esteja sempre um passo à frente das obrigações e oportunidades.
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              className="flex flex-col gap-8"
            >
              {processSteps.map((step) => (
                <motion.div 
                  key={step.number}
                  variants={scaleUpVariants}
                  className="p-8 rounded-3xl bg-[#121212] border border-[#262626] card-hover"
                >
                  <span className="text-sm font-mono text-[#A3A3A3] mb-4 block">{step.number}</span>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-[#A3A3A3] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 md:py-32 px-6 bg-[#0A0A0A] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight max-w-2xl">
              Mantenha sua empresa em conformidade com as regulamentações
            </h2>
            <p className="text-[#A3A3A3] text-lg max-w-2xl">
              Oferecemos um portfólio completo de soluções para mitigar riscos e maximizar a eficiência financeira do seu negócio.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div 
                key={service.title}
                variants={scaleUpVariants}
                className="p-8 md:p-10 rounded-3xl bg-[#121212] border border-[#262626] group card-hover flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-4">{service.title}</h3>
                <p className="text-[#A3A3A3] leading-relaxed mb-8 flex-grow">{service.description}</p>
                <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#A3A3A3] transition-colors mt-auto">
                  Saber mais <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              Pessoas reais, <span className="text-emerald-500 italic">resultados reais.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            <motion.div variants={scaleUpVariants} className="md:col-span-1 bg-[#121212] rounded-3xl p-8 relative overflow-hidden border border-[#262626] min-h-[300px] flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10">
                <p className="text-[#A3A3A3] text-sm font-medium mb-2">Patrimônio Administrado</p>
              </div>
              <div className="relative z-10">
                <h3 className="text-6xl md:text-7xl font-display font-bold text-white tracking-tighter">R$ 1B+</h3>
              </div>
            </motion.div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[140px] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-600 text-sm font-medium mb-8">Clientes Atendidos no último ano</p>
                <h3 className="text-5xl font-display font-bold text-black tracking-tighter">500+</h3>
              </motion.div>
              <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[140px] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-600 text-sm font-medium mb-8">Economia Tributária Gerada</p>
                <h3 className="text-5xl font-display font-bold text-black tracking-tighter">R$ 50M+</h3>
              </motion.div>
              <motion.div variants={scaleUpVariants} className="sm:col-span-2 bg-[#121212] rounded-3xl p-8 relative overflow-hidden border border-[#262626] min-h-[140px] flex flex-col justify-between group">
                 <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                 <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <p className="text-[#A3A3A3] text-sm font-medium">Presença Nacional</p>
                    <h3 className="text-5xl font-display font-bold text-white tracking-tighter">27 Estados</h3>
                 </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
             <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-600 text-sm font-medium mb-8">Faturamento de Clientes</p>
                <h3 className="text-5xl font-display font-bold text-black tracking-tighter">R$ 2B+</h3>
              </motion.div>
              <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-600 text-sm font-medium mb-8">Anos de Experiência</p>
                <h3 className="text-5xl font-display font-bold text-black tracking-tighter">15+</h3>
              </motion.div>
              <motion.div variants={scaleUpVariants} className="bg-[#121212] rounded-3xl p-8 relative overflow-hidden border border-[#262626] min-h-[200px] flex flex-col justify-between group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="relative z-10">
                  <p className="text-[#A3A3A3] text-sm font-medium mb-8">Ativos Sob Gestão</p>
                </div>
                <div className="relative z-10">
                  <h3 className="text-5xl font-display font-bold text-white tracking-tighter">R$ 5B+</h3>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clients & Testimonial Highlight */}
      <section className="py-24 px-6 overflow-hidden border-t border-[#262626] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Grid of logos */}
              <div className="grid grid-cols-4 gap-4 opacity-80">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center ${i % 3 === 0 ? 'bg-white text-black' : i % 2 === 0 ? 'bg-emerald-500 text-white' : 'bg-[#121212] border border-[#262626] text-white'}`}>
                    <Briefcase className="w-8 h-8 opacity-50" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
            </motion.div>

            <div className="w-full lg:w-1/2 relative z-10">
              <motion.div 
                variants={scaleUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10%" }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-white">
                      <span className="text-xs font-bold">A</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <span className="text-xs font-bold">C</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                  "A equipe da Apex é extremamente versada em planejamento tributário e auditoria, fornecendo consistentemente orientações perspicazes e suporte sempre que necessário. O profissionalismo e a compreensão do setor os tornam um parceiro valioso para qualquer questão contábil."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Isaac Zarb</p>
                    <p className="text-sm text-gray-500">Co-founder da SimplyStaking</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 md:py-32 px-6 border-t border-[#262626]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <motion.div 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                Conheça a <span className="text-emerald-500 italic">equipe</span>
              </h2>
            </motion.div>
            <div className="hidden md:flex gap-2">
              <button className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center text-white hover:bg-[#121212] transition-colors">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div 
                key={member.name}
                variants={scaleUpVariants}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#121212] aspect-square">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-white">{member.name}</h4>
                    <p className="text-sm text-[#A3A3A3]">{member.role}</p>
                  </div>
                  <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 md:py-32 px-6 border-t border-[#262626]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
              O que os clientes <br />dizem sobre a Apex
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={scaleUpVariants}
                className="p-8 md:p-10 rounded-3xl bg-[#121212] border border-[#262626]"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-white font-display font-medium leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-[#A3A3A3] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={scaleUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className="bg-white rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-medium text-black mb-6 tracking-tight">
                Pronto para elevar <br />sua gestão contábil?
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
                Agende uma conversa com nossos especialistas e descubra como podemos otimizar seus resultados e garantir total conformidade.
              </p>
              <a href="#contato" className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group">
                Iniciar Projeto Hoje
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#262626] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="#" className="text-2xl font-bold tracking-tighter text-white font-display flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded-sm" />
                APEX
              </a>
              <p className="text-[#A3A3A3] max-w-sm">
                Soluções contábeis e financeiras de alto nível para empresas que buscam excelência, segurança e crescimento sustentável.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Empresa</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-[#A3A3A3] hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#processo" className="text-[#A3A3A3] hover:text-white transition-colors">Como Trabalhamos</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Legal</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#262626] text-sm text-[#A3A3A3]">
            <p>© {new Date().getFullYear()} Apex Contabilidade. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
