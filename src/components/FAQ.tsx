import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const FAQ = () => {
    const faqs = [
        {
            question: "O ebook é uma consultoria ou mentoria?",
            answer: "Não. O material é 100% educacional e autodidata. Você terá acesso ao e-book completo e aos guias visuais para estudar e aplicar o método por conta própria."
        },
        {
            question: "O autor analisa meu caso concreto?",
            answer: "Não. Por impedimento ético e legal, Rogério não presta consultoria, não analisa processos específicos e não atua como advogado. O objetivo é compartilhar conhecimento técnico de forma abstrata e educacional."
        },
        {
            question: "Serve para quem está começando?",
            answer: "Sim! O método foi desenhado como um mapa passo a passo, ideal tanto para quem está perdido na execução quanto para quem já tem experiência mas quer organizar seu conhecimento."
        },
        {
            question: "Como recebo o acesso ao material?",
            answer: "O acesso é digital e imediato. Assim que o pagamento for confirmado, você receberá um email com o link para download do e-book e dos materiais complementares."
        },
        {
            question: "Tenho garantia?",
            answer: "Sim. Você tem 7 dias de garantia incondicional. Se achar que o conteúdo não agregou valor ao seu conhecimento técnico, devolvemos 100% do seu investimento."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-brand-black relative">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <Reveal>
                        <div className="flex justify-center mb-4">
                            <HelpCircle className="w-10 h-10 text-brand-gold/50" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-gray-400">
                            Tire suas dúvidas sobre o formato e conteúdo do material
                        </p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <Reveal key={idx} delay={idx * 0.1} width="100%">
                            <div
                                className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.04]"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-medium text-lg ${openIndex === idx ? 'text-brand-gold' : 'text-gray-200'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full ${openIndex === idx ? 'bg-brand-gold/10 text-brand-gold' : 'bg-white/5 text-gray-400'}`}>
                                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
