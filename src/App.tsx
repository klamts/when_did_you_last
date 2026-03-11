import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Shuffle, Info, ChevronRight } from 'lucide-react';
import { categories, verbDict, AUDIO_BASE_URL, type Verb, type Category } from './data';

const VerbTable = ({ core }: { core: string }) => {
  const forms = verbDict[core];
  if (!forms) return null;

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-navy/10 bg-white/50 text-xs">
      <div className="grid grid-cols-3 bg-navy/5 font-bold">
        <div className="p-2 border-r border-navy/10">V1 (Base)</div>
        <div className="p-2 border-r border-navy/10">V2 (Past)</div>
        <div className="p-2">V3 (Participle)</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="p-2 border-r border-navy/10">
          <div className="font-bold text-navy">{forms.v1}</div>
          <div className="text-gray-soft italic">{forms.i1}</div>
        </div>
        <div className="p-2 border-r border-navy/10">
          <div className="font-bold text-navy">{forms.v2}</div>
          <div className="text-gray-soft italic">{forms.i2}</div>
        </div>
        <div className="p-2">
          <div className="font-bold text-navy">{forms.v3}</div>
          <div className="text-gray-soft italic">{forms.i3}</div>
        </div>
      </div>
    </div>
  );
};

interface VerbCardProps {
  key?: React.Key;
  verb: Verb;
  category: Category;
  onSeen: (id: string) => void;
}

const VerbCard = ({ verb, category, onSeen }: VerbCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = (type: keyof Verb['audio'], e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${AUDIO_BASE_URL}${category.meta.folder}/${verb.audio[type]}`;
    const audio = new Audio(url);
    audio.play();
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onSeen(`${category.meta.id}-${verb.id}`);
  };

  return (
    <motion.div
      layout
      onClick={handleFlip}
      className="relative cursor-pointer group"
    >
      <div 
        className="bg-white rounded-2xl p-5 shadow-md border-l-4 transition-all hover:shadow-lg min-h-[220px] flex flex-col"
        style={{ borderLeftColor: category.meta.color }}
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: category.meta.color }}>
                  {verb.emoji} {verb.vi}
                </span>
                <button 
                  onClick={(e) => playAudio('q', e)} 
                  className="p-2 bg-navy/5 hover:bg-navy/10 rounded-full transition-colors group/play"
                  title="Nghe câu hỏi"
                >
                  <Play size={16} className="text-navy group-hover/play:scale-110 transition-transform" />
                </button>
              </div>
              <h3 className="font-display text-lg text-navy leading-tight mb-4">
                When did you last <span className="font-bold underline decoration-2" style={{ textDecorationColor: category.meta.color }}>{verb.phrase}</span>?
              </h3>
              <div className="mt-auto flex items-center justify-between text-gray-soft text-[10px] italic">
                <span>Bấm để xem câu trả lời mẫu</span>
                <ChevronRight size={14} className="opacity-50" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 flex flex-col space-y-3"
            >
              <div className="flex items-center justify-between mb-1">
                 <span className="text-[10px] font-bold uppercase tracking-wider text-gray-soft">Câu trả lời mẫu</span>
                 <button onClick={(e) => playAudio('q', e)} className="p-1 hover:bg-navy/5 rounded-full transition-colors">
                    <Play size={14} className="text-navy" />
                 </button>
              </div>

              <div className="space-y-2">
                <div className="bg-emerald-50 border-l-2 border-emerald-400 p-2 rounded-r-lg relative group/audio">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase">Có</div>
                      <p className="text-xs text-navy leading-relaxed">{verb.scripts.yes}</p>
                      <p className="text-[10px] text-gray-soft italic">{verb.vi_scripts.yes}</p>
                    </div>
                    <button onClick={(e) => playAudio('yes', e)} className="p-1 hover:bg-emerald-100 rounded-full">
                      <Play size={12} className="text-emerald-600" />
                    </button>
                  </div>
                </div>

                <div className="bg-rose-50 border-l-2 border-rose-400 p-2 rounded-r-lg relative group/audio">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-rose-600 uppercase">Không</div>
                      <p className="text-xs text-navy leading-relaxed">{verb.scripts.no}</p>
                      <p className="text-[10px] text-gray-soft italic">{verb.vi_scripts.no}</p>
                    </div>
                    <button onClick={(e) => playAudio('no', e)} className="p-1 hover:bg-rose-100 rounded-full">
                      <Play size={12} className="text-rose-600" />
                    </button>
                  </div>
                </div>

                <div className="bg-sky-50 border-l-2 border-sky-400 p-2 rounded-r-lg relative group/audio">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-sky-600 uppercase">Hỏi thêm</div>
                      <p className="text-xs text-navy leading-relaxed">{verb.scripts.follow}</p>
                      <p className="text-[10px] text-gray-soft italic">{verb.vi_scripts.follow}</p>
                    </div>
                    <button onClick={(e) => playAudio('follow', e)} className="p-1 hover:bg-sky-100 rounded-full">
                      <Play size={12} className="text-sky-600" />
                    </button>
                  </div>
                </div>
              </div>

              <VerbTable core={verb.core} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'random' | string>('all');
  const [seenVerbs, setSeenVerbs] = useState<Set<string>>(new Set());
  const [randomVerb, setRandomVerb] = useState<{ verb: Verb; category: Category } | null>(null);
  const [showRandomAnswer, setShowRandomAnswer] = useState(false);

  const allVerbs = useMemo(() => {
    return categories.flatMap(cat => cat.verbs.map(v => ({ verb: v, category: cat })));
  }, []);

  const handleSeen = (id: string) => {
    setSeenVerbs(prev => new Set(prev).add(id));
  };

  const generateRandom = () => {
    const random = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    setRandomVerb(random);
    setShowRandomAnswer(false);
  };

  const progress = useMemo(() => {
    if (activeTab === 'all' || activeTab === 'random') return null;
    const cat = categories.find(c => c.meta.id === activeTab);
    if (!cat) return null;
    const total = cat.verbs.length;
    const seen = cat.verbs.filter(v => seenVerbs.has(`${cat.meta.id}-${v.id}`)).length;
    return { total, seen, pct: Math.round((seen / total) * 100) };
  }, [activeTab, seenVerbs]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-gradient-to-br from-navy to-[#2E4080] pt-10 pb-8 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl text-white relative z-10"
        >
          ⏰ When did you <span className="text-[#FDCB6E]">last</span>…?
        </motion.h1>
        <p className="text-white/70 text-sm mt-2 relative z-10">Thực hành A2 · Chia theo chủ đề · Bấm vào thẻ để xem câu trả lời!</p>
        
        <div className="flex justify-center gap-2 mt-4 relative z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: ['#FF6B6B', '#FF9F43', '#26de81', '#4A90D9', '#A55EEA'][i] }}
            />
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-8">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm transition-all shadow-sm border-2 ${
              activeTab === 'all' ? 'bg-navy text-white border-navy scale-105' : 'bg-white text-navy border-transparent hover:translate-y-[-2px]'
            }`}
          >
            🌟 Tất cả
          </button>
          <button
            onClick={() => { setActiveTab('random'); if (!randomVerb) generateRandom(); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm transition-all shadow-sm border-2 ${
              activeTab === 'random' ? 'bg-[#6C5CE7] text-white border-[#6C5CE7] scale-105' : 'bg-white text-navy border-transparent hover:translate-y-[-2px]'
            }`}
          >
            🎲 Ngẫu nhiên
          </button>
          {categories.map(cat => (
            <button
              key={cat.meta.id}
              onClick={() => setActiveTab(cat.meta.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm transition-all shadow-sm border-2 ${
                activeTab === cat.meta.id 
                  ? 'text-white scale-105' 
                  : 'bg-white text-navy border-transparent hover:translate-y-[-2px]'
              }`}
              style={{ 
                backgroundColor: activeTab === cat.meta.id ? cat.meta.color : undefined,
                borderColor: activeTab === cat.meta.id ? cat.meta.color : undefined
              }}
            >
              {cat.meta.label.split(' ')[0]} {cat.meta.label.split(' ').slice(1).join(' ')}
            </button>
          ))}
        </nav>

        {/* Progress Bar */}
        <AnimatePresence>
          {progress && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl p-4 mb-8 shadow-sm flex items-center gap-4 border border-navy/5"
            >
              <span className="font-display text-sm text-navy whitespace-nowrap">{progress.seen} / {progress.total} đã xem</span>
              <div className="flex-1 h-3 bg-navy/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.pct}%` }}
                  className="h-full bg-gradient-to-r from-[#26de81] to-[#4A90D9]" 
                />
              </div>
              <span className="font-display text-sm font-bold text-navy">{progress.pct}%</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="animate-fade-up">
          {activeTab === 'all' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map(cat => (
                <motion.div
                  key={cat.meta.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setActiveTab(cat.meta.id)}
                  className="cursor-pointer rounded-2xl p-6 text-center text-white shadow-md transition-all"
                  style={{ background: `linear-gradient(135deg, ${cat.meta.color}, ${cat.meta.color}CC)` }}
                >
                  <div className="text-4xl mb-3">{cat.meta.label.split(' ')[0]}</div>
                  <div className="font-display text-lg font-bold">{cat.meta.label.split(' ').slice(1).join(' ')}</div>
                  <div className="text-xs opacity-80 mt-1">{cat.verbs.length} câu hỏi</div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'random' && randomVerb && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-navy to-[#2E4080] rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Câu hỏi ngẫu nhiên</div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <h2 className="font-display text-2xl md:text-3xl text-[#FDCB6E] leading-tight">
                    When did you last {randomVerb.verb.phrase}?
                  </h2>
                  <button 
                    onClick={() => {
                      const url = `${AUDIO_BASE_URL}${randomVerb.category.meta.folder}/${randomVerb.verb.audio.q}`;
                      new Audio(url).play();
                    }} 
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    title="Nghe câu hỏi"
                  >
                    <Play size={20} className="text-[#FDCB6E]" />
                  </button>
                </div>
                <div 
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-8"
                  style={{ backgroundColor: randomVerb.category.meta.color }}
                >
                  {randomVerb.category.meta.label}
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={generateRandom}
                    className="bg-gradient-to-r from-[#FDCB6E] to-[#FF9F43] text-navy font-display font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Shuffle size={18} /> Câu hỏi mới!
                  </button>
                  <button 
                    onClick={() => setShowRandomAnswer(!showRandomAnswer)}
                    className="bg-gradient-to-r from-[#26de81] to-[#4A90D9] text-white font-display font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Info size={18} /> {showRandomAnswer ? 'Ẩn câu trả lời' : 'Xem câu trả lời'}
                  </button>
                </div>

                <AnimatePresence>
                  {showRandomAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="mt-8 text-left space-y-4"
                    >
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#26de81] text-[10px] font-bold uppercase">✅ Trả lời CÓ</span>
                          <button onClick={() => {
                            const url = `${AUDIO_BASE_URL}${randomVerb.category.meta.folder}/${randomVerb.verb.audio.yes}`;
                            new Audio(url).play();
                          }} className="p-1 hover:bg-white/10 rounded-full"><Play size={14} /></button>
                        </div>
                        <p className="text-sm">{randomVerb.verb.scripts.yes}</p>
                        <p className="text-[10px] text-white/60 italic">{randomVerb.verb.vi_scripts.yes}</p>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#FF6B6B] text-[10px] font-bold uppercase">❌ Trả lời KHÔNG</span>
                          <button onClick={() => {
                            const url = `${AUDIO_BASE_URL}${randomVerb.category.meta.folder}/${randomVerb.verb.audio.no}`;
                            new Audio(url).play();
                          }} className="p-1 hover:bg-white/10 rounded-full"><Play size={14} /></button>
                        </div>
                        <p className="text-sm">{randomVerb.verb.scripts.no}</p>
                        <p className="text-[10px] text-white/60 italic">{randomVerb.verb.vi_scripts.no}</p>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#4A90D9] text-[10px] font-bold uppercase">💬 Hỏi thêm</span>
                          <button onClick={() => {
                            const url = `${AUDIO_BASE_URL}${randomVerb.category.meta.folder}/${randomVerb.verb.audio.follow}`;
                            new Audio(url).play();
                          }} className="p-1 hover:bg-white/10 rounded-full"><Play size={14} /></button>
                        </div>
                        <p className="text-sm">{randomVerb.verb.scripts.follow}</p>
                        <p className="text-[10px] text-white/60 italic">{randomVerb.verb.vi_scripts.follow}</p>
                      </div>
                      
                      <div className="bg-white/5 rounded-2xl p-4">
                        <VerbTable core={randomVerb.verb.core} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {categories.map(cat => (
            activeTab === cat.meta.id && (
              <div key={cat.meta.id} className="space-y-6">
                <div 
                  className="rounded-3xl p-6 text-white shadow-lg flex items-center gap-6"
                  style={{ background: `linear-gradient(135deg, ${cat.meta.color}, ${cat.meta.color}BB)` }}
                >
                  <div className="text-5xl">{cat.meta.label.split(' ')[0]}</div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{cat.meta.label.split(' ').slice(1).join(' ')}</h2>
                    <p className="text-sm opacity-90">Luyện tập các câu hỏi về chủ đề này</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.verbs.map(v => (
                    <VerbCard 
                      key={v.id} 
                      verb={v} 
                      category={cat} 
                      onSeen={handleSeen} 
                    />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </main>

      {/* Footer Hint */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-navy/5 p-3 text-center z-50">
        <p className="text-[10px] text-gray-soft uppercase tracking-widest font-bold">
          💡 Mẹo: Bấm vào thẻ để xem V1, V2, V3 và nghe phát âm!
        </p>
      </footer>
    </div>
  );
}
