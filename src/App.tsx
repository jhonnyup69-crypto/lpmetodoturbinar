import React from 'react';
import { CheckCircle2, ArrowRight, Instagram, Zap, Target, TrendingUp, Gift, ShieldCheck, User } from 'lucide-react';
import { motion } from 'motion/react';

const Button = ({ children, className = "", variant = "primary" }: { children: React.ReactNode, className?: string, variant?: "primary" | "secondary" | "outline" }) => {
  const variants = {
    primary: "bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-900/20",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20",
    outline: "border-2 border-pink-600 text-pink-600 hover:bg-pink-50"
  };

  return (
    <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-pink-100 selection:text-pink-900">
      {/* Primeira Dobra - Hero Section */}
      <section className="bg-[#000000] text-white pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-10 tracking-tight max-w-xl">
              Descubra como <span className="text-[#ff007f]">lotar</span> <br />
              <span className="text-[#ff007f]">sua loja</span> de <br />
              maquiagem <br />
              usando apenas o <br />
              botão Turbinar do <br />
              Instagram
            </h1>
            <p className="text-lg text-zinc-400 mb-10 font-light max-w-2xl">
              Mesmo que você não entenda nada de anúncios e nunca tenha feito tráfego pago.
            </p>
            
            <div className="space-y-4 mb-12">
              <p className="text-base text-pink-400 font-semibold">
                Aprenda em vídeo aulas simples como transformar R$10 ou R$20 em clientes reais todos os dias.
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 line-through text-base">De R$197</span>
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="text-xl font-bold">Plano Básico por <span className="text-pink-500">R$27</span></span>
                  <span className="text-zinc-400 text-sm">Ou</span>
                  <span className="text-xl font-bold text-pink-400">Plano VIP por R$47</span>
                </div>
              </div>
            </div>

            <Button className="w-full md:w-auto text-lg px-10 py-4">
              QUERO ACESSAR AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bullets Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que você vai desbloquear:</h2>
          <div className="w-20 h-1.5 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Como usar o botão Turbinar do Instagram da forma correta para atrair clientes da sua cidade",
            "O passo a passo para divulgar produtos de maquiagem e promoções que fazem as pessoas correrem para comprar",
            "A forma simples de aparecer para milhares de mulheres interessadas em maquiagem perto da sua loja",
            "Como investir pouco dinheiro e transformar visualizações em vendas reais",
            "O método simples que qualquer dona de loja consegue aplicar mesmo sem entender nada de anúncios"
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-pink-200 transition-colors"
            >
              <CheckCircle2 className="text-pink-500 shrink-0" size={24} />
              <p className="text-zinc-700 font-medium leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Explicação do Produto */}
      <Section className="bg-zinc-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800" 
              alt="Instagram Feed" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              A maioria das donas de loja de maquiagem posta todos os dias… <br/>
              <span className="text-pink-600">Mas quase ninguém vê.</span>
            </h2>
            <div className="space-y-4 text-lg text-zinc-600">
              <p>O problema não é o produto. Nem o preço.</p>
              <p className="font-semibold text-zinc-900">O problema é que o Instagram não entrega suas postagens para pessoas novas.</p>
              <p>E é exatamente aqui que entra o botão Turbinar.</p>
              <p>Esse recurso simples do próprio Instagram permite que você mostre seus produtos para milhares de pessoas da sua cidade.</p>
              <p className="bg-pink-100 text-pink-900 px-2 py-1 inline-block rounded">O problema é que quase ninguém sabe usar da forma certa.</p>
              <p className="text-red-600 font-medium">Resultado: dinheiro jogado fora e anúncio que não vende.</p>
              <p>Nesse curso você vai aprender o método simples para turbinar posts do jeito certo.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-4">
              {["Sem gerenciador complicado", "Sem termos técnicos", "Sem precisar virar especialista"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-800 font-semibold">
                  <Zap size={18} className="text-pink-500" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* O que você vai aprender */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">O que você vai aprender</h2>
          <p className="text-zinc-500">O caminho exato para o sucesso da sua loja</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Escolher o post certo para turbinar",
              desc: "Nem todo post vende. Você vai aprender quais tipos de posts fazem as pessoas clicar, chamar no direct e ir até sua loja.",
              icon: <Target className="text-pink-500" size={32} />
            },
            {
              step: "02",
              title: "Configurar o botão Turbinar da forma correta",
              desc: "Você vai ver na prática como configurar localização, público e orçamento para atingir pessoas da sua cidade interessadas em maquiagem.",
              icon: <Zap className="text-pink-500" size={32} />
            },
            {
              step: "03",
              title: "Transformar visualizações em clientes",
              desc: "Você vai entender como responder mensagens, organizar pedidos e transformar o tráfego em vendas reais na loja física ou pelo direct.",
              icon: <TrendingUp className="text-pink-500" size={32} />
            }
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <span className="text-pink-600 font-bold text-sm uppercase tracking-widest mb-2 block">Passo {step.step}</span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Exemplo Prático */}
      <Section className="bg-pink-600 text-white rounded-[3rem] my-12 mx-4 md:mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Exemplo Prático</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-pink-100 text-sm uppercase font-bold mb-2">Antes do anúncio</p>
                <p className="text-2xl font-medium">Uma loja pequena de maquiagem posta um kit de batons e recebe apenas 30 ou 40 curtidas.</p>
              </div>
              <ArrowRight className="mx-auto md:rotate-0 rotate-90 text-white/40" size={40} />
              <div className="p-6 rounded-2xl bg-white text-pink-900 shadow-xl">
                <p className="text-pink-600 text-sm uppercase font-bold mb-2">Depois de turbinar corretamente</p>
                <ul className="space-y-3 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-pink-500" />
                    <span>+5 mil pessoas da cidade veem o produto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-pink-500" />
                    <span>Dezenas de mensagens no direct</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-pink-500" />
                    <span>Estoque começando a girar em dias</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed italic opacity-90">
                "Não é mágica. É simplesmente mostrar seu produto para as pessoas certas. E é exatamente isso que você vai aprender."
              </p>
              <Button variant="secondary" className="w-full bg-white text-pink-600 hover:bg-pink-50">
                QUERO ESSES RESULTADOS
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Bônus VIP */}
      <Section className="bg-zinc-950 text-white">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold mb-4">
            EXCLUSIVO PARA O PLANO VIP
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Bônus VIP</h2>
          <p className="text-zinc-400">Quem escolher o Plano VIP leva 3 bônus extras</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Biblioteca de Posts que Vendem",
              desc: "Exemplos prontos de fotos, promoções e textos que funcionam para lojas de maquiagem.",
              benefits: ["Nunca mais ficar sem ideia", "Posts pensados para vendas", "Aplicação imediata"],
              value: "R$67"
            },
            {
              title: "Modelos de Textos para Anúncios",
              desc: "Modelos prontos de legendas que despertam curiosidade e fazem as pessoas clicar.",
              benefits: ["Textos prontos para produtos", "Estrutura que chama atenção", "Mais mensagens no direct"],
              value: "R$57"
            },
            {
              title: "Estratégia de Promoções que Fazem Estoque Girar",
              desc: "Tipos de promoções simples que fazem clientes voltarem a comprar.",
              benefits: ["Ideias de campanhas rápidas", "Gera movimento na loja", "Estratégias para datas especiais"],
              value: "R$57"
            }
          ].map((bonus, idx) => (
            <div key={idx} className="flex flex-col p-8 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gift size={80} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Bônus 0{idx + 1}</h3>
              <h4 className="text-lg font-bold mb-4 leading-tight">{bonus.title}</h4>
              <p className="text-zinc-400 text-sm mb-6">{bonus.desc}</p>
              <div className="space-y-3 mb-8 flex-grow">
                {bonus.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{b}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-zinc-500 text-xs uppercase font-bold">Valor original:</span>
                <span className="ml-2 text-zinc-400 line-through">{bonus.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Oferta */}
      <Section className="bg-white" id="oferta">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Escolha seu Plano</h2>
          <p className="text-zinc-500">Comece hoje mesmo a transformar seu Instagram</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-200 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-zinc-900">R$27</span>
            </div>
            <p className="text-zinc-600 mb-8 flex-grow">
              Acesso ao curso com o passo a passo para usar o botão turbinar e divulgar seus produtos.
            </p>
            <Button variant="outline" className="w-full">ESCOLHER BÁSICO</Button>
          </div>

          {/* Plano VIP */}
          <div className="p-10 rounded-[2.5rem] bg-zinc-950 text-white border-4 border-pink-500 relative flex flex-col transform md:scale-105 shadow-2xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
              MAIS VENDIDO & RECOMENDADO
            </div>
            <h3 className="text-2xl font-bold mb-2">Plano VIP</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-pink-500">R$47</span>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <p className="font-bold text-pink-400">Inclui:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-pink-500" />
                  <span>Curso completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-pink-500" />
                  <span>Todos os 3 bônus exclusivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-pink-500" />
                  <span>Estratégias avançadas de escala</span>
                </li>
              </ul>
              <p className="text-zinc-400 text-sm italic pt-4">
                "Se você realmente quer aprender e aplicar da forma completa, o VIP é a escolha mais inteligente."
              </p>
            </div>
            <Button className="w-full">QUERO ACESSAR AGORA</Button>
          </div>
        </div>
      </Section>

      {/* Resumindo */}
      <Section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-zinc-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Resumindo</h2>
          <p className="text-lg text-zinc-600 mb-8 text-center">
            Se você tem uma loja de maquiagem e quer vender mais usando o Instagram, essa pode ser a virada.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-pink-600 mb-4 uppercase tracking-wider">Você vai aprender:</h4>
              <ul className="space-y-3">
                {["Como turbinar posts corretamente", "Como alcançar pessoas da sua cidade", "Como transformar visualizações em clientes"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle2 size={18} className="text-pink-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-600 mb-4 uppercase tracking-wider">Sem precisar:</h4>
              <ul className="space-y-3">
                {["Não precisa entender de marketing", "Não precisa aprender ferramentas complicadas", "Não precisa investir grandes valores"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-700">
                    <div className="w-4 h-4 rounded-full border-2 border-red-200 flex items-center justify-center shrink-0 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-zinc-100 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <ShieldCheck size={48} className="text-pink-500" />
              <div className="text-left">
                <p className="font-bold text-xl">7 Dias de Garantia</p>
                <p className="text-zinc-500 text-sm">Risco zero para você testar</p>
              </div>
            </div>
            <p className="text-zinc-600 mb-8">
              Se achar que não valeu a pena, basta pedir reembolso. Sem perguntas.
            </p>
            <Button className="w-full md:w-auto">COMEÇAR AGORA SEM RISCO</Button>
          </div>
        </div>
      </Section>

      {/* Autor */}
      <Section className="bg-white border-t border-zinc-100">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto">
          <div className="w-48 h-48 rounded-full bg-pink-100 flex items-center justify-center shrink-0 overflow-hidden border-4 border-white shadow-xl">
            <User size={100} className="text-pink-500" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold">Quem criou o método?</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Criado por um especialista em marketing digital focado em pequenos negócios locais. 
              Nos últimos anos ajudou perfis de lojas físicas e online a atrair clientes usando estratégias simples dentro do próprio Instagram. 
              O objetivo é mostrar que qualquer empreendedor pode usar o tráfego pago de forma prática e acessível.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 px-6 text-center text-sm border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4">© 2026 Método Turbinar Maquiagem. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto opacity-50">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
