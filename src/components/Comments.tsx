import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MessageSquare, Send, User, CheckCircle2, Lock } from 'lucide-react';

interface Comment {
    id: string;
    name: string;
    content: string;
    created_at: string;
}

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState({ name: '', content: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchComments();

        // Subscribe to new approved comments
        const channel = supabase
            .channel('comments')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments', filter: 'is_approved=eq.true' }, (payload) => {
                setComments((prev) => [payload.new as Comment, ...prev]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    async function fetchComments() {
        try {
            const { data, error } = await supabase
                .from('comments')
                .select('*')
                .eq('is_approved', true)
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data) setComments(data);
        } catch (err) {
            console.error('Error fetching comments:', err);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!newComment.name.trim() || !newComment.content.trim()) return;

        setLoading(true);
        setError('');

        try {
            const { error } = await supabase
                .from('comments')
                .insert([{
                    name: newComment.name,
                    content: newComment.content,
                    is_approved: false // Always pending moderation
                }]);

            if (error) throw error;

            setSubmitted(true);
            setNewComment({ name: '', content: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('Error submitting comment:', err);
            setError('Erro ao enviar comentário. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="py-20 bg-brand-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
                        <MessageSquare className="w-4 h-4 text-brand-gold" />
                        <span className="text-sm text-brand-gold font-medium uppercase tracking-wider">Comunidade Vereda</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        O que dizem sobre o <span className="text-brand-gold">Método</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Junte-se a advogados e servidores que já estão transformando sua execução trabalhista.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form Side */}
                    <div className="bg-brand-surface/50 backdrop-blur-sm border border-brand-gold/10 p-8 rounded-2xl h-fit sticky top-8">
                        <h3 className="text-xl font-serif text-white mb-6">Deixe seu feedback</h3>

                        {submitted ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center animate-fade-in">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                </div>
                                <h4 className="text-white font-medium mb-2">Comentário Enviado!</h4>
                                <p className="text-sm text-gray-400">Seu feedback está em análise e aparecerá em breve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Seu Nome</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="text"
                                            id="name"
                                            value={newComment.name}
                                            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                                            className="w-full bg-brand-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                                            placeholder="Dr. Rogério Amaral"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="content" className="block text-sm text-gray-400 mb-2">Sua Mensagem</label>
                                    <textarea
                                        id="content"
                                        value={newComment.content}
                                        onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                                        rows={4}
                                        className="w-full bg-brand-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                                        placeholder="Compartilhe sua experiência..."
                                        required
                                    />
                                </div>

                                {error && <p className="text-red-400 text-xs">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-brand-gold-dark to-brand-gold text-brand-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                                >
                                    {loading ? 'Enviando...' : (
                                        <>
                                            Enviar Comentário
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-600 flex items-center justify-center gap-1.5 mt-4">
                                    <Lock className="w-3 h-3" />
                                    Comentários moderados para manter a qualidade.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* List Side */}
                    <div className="space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                        {comments.length === 0 ? (
                            <div className="text-center py-12 px-6 border border-dashed border-white/10 rounded-2xl">
                                <p className="text-gray-500 italic">Seja o primeiro a comentar!</p>
                            </div>
                        ) : (
                            comments.map((comment) => (
                                <div key={comment.id} className="bg-brand-surface/30 border border-white/5 p-6 rounded-xl hover:bg-brand-surface/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center text-brand-black font-bold text-sm">
                                            {comment.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">{comment.name}</h4>
                                            <span className="text-xs text-gray-500">
                                                {new Date(comment.created_at).toLocaleDateString('pt-BR', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">"{comment.content}"</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 168, 124, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 168, 124, 0.4);
        }
      `}</style>
        </section>
    );
}
