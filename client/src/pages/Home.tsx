import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Terminal as TerminalIcon, User, Code, Smartphone, HelpCircle } from "lucide-react";
import avatarImg from "@assets/favicon.jpg";

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    "welcome to my console",
    "type 'help' to see available commands"
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = "available cmds: bio, skills, projects, clear, whoru";
        break;
      case "bio":
        response = "smooth. web automation specialist. learning c++ n lua/python expert.";
        break;
      case "skills":
        response = "c++, python, lua, curl_cffi, tls_fingerprinting, reverse_eng, and much more";
        break;
      case "projects":
        response = "have_no_public_ones_rn";
        break;
      case "whoru":
        response = "smooth";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `command not found: ${cmd}`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="font-mono text-[12px] bg-black/40 rounded border border-white/10 p-4 h-[200px] flex flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 scrollbar-hide text-white/70">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-white/40" : "text-white/90"}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="mt-2 flex items-center gap-2">
        <span className="text-white/40">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none flex-1 text-white"
          autoFocus
        />
      </form>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "home", icon: User },
    { id: "projects", label: "projects", icon: Code },
    { id: "skillset", label: "skillset", icon: Smartphone },
    { id: "contact", label: "contact", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-black text-white/80 selection:bg-white/10 flex flex-col items-center justify-center p-4">
      {/* Background Star Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[560px] bg-[#080808] border border-white/10 rounded-lg overflow-hidden relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  activeTab === tab.id ? "text-white underline underline-offset-8" : "text-white/30 hover:text-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <HelpCircle className="w-4 h-4 text-white/20 cursor-help" />
        </div>

        <div className="p-8 md:p-10 space-y-10">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6">
                  <img 
                    src={avatarImg} 
                    alt="avatar" 
                    className="w-16 h-16 rounded border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <h1 className="text-3xl font-display text-white mb-2 leading-none">smooth</h1>
                    <p className="text-[12px] text-white/40 font-mono">mid level full stack dev specializing in web automation, with exp in asynchronous programming</p>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 p-4 rounded text-[13px] leading-relaxed text-white/60">
                  currently focusing on <span className="text-white">web automation</span>, <span className="text-white">tls fingerprinting</span> and <span className="text-white">anti-bot bypasses</span>. learning c++ and an expert in lua and python.
                </div>

                <div className="space-y-4">
                  <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">console</h2>
                  <Terminal />
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-display text-white">projects</h2>
                <div className="grid gap-4">
                  {[
                    { title: "none", desc: "idh any public rn teehee" },
                    //{ title: "request_engine", desc: "tls fingerprinting in c++" },
                    //{ title: "curl_cffi_wrapper", desc: "mastered optimized request library" }
                  ].map((p, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded group hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[14px] font-bold text-white/80">{p.title}</span>
                        <Code className="w-3 h-3 text-white/20" />
                      </div>
                      <p className="text-[12px] text-white/40">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "skillset" && (
              <motion.div
                key="skillset"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-display text-white">skillset</h2>
                <div className="flex flex-wrap gap-2">
                  {["python", "lua", "c++", "curl_cffi", "requests", "playwright", "camoufox", "reverse_eng", "tls_client"].map((s, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/[0.05] border border-white/5 text-[11px] rounded font-mono text-white/60">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-display text-white">get in touch</h2>
                <div className="flex gap-4">
                  <a href="https://github.com/smoothtf" className="p-4 bg-white/[0.02] border border-white/5 rounded hover:bg-white/[0.05] transition-all flex-1 text-center group">
                    <Github className="w-5 h-5 mx-auto mb-2 text-white/20 group-hover:text-white" />
                    <span className="text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white">github</span>
                  </a>
                  <a href="mailto:smooth4suree@gmail.com" className="p-4 bg-white/[0.02] border border-white/5 rounded hover:bg-white/[0.05] transition-all flex-1 text-center group">
                    <Mail className="w-5 h-5 mx-auto mb-2 text-white/20 group-hover:text-white" />
                    <span className="text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white">email</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-white/5 bg-black/40 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold">system online</span>
          </div>
          <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">smooth_os v1.0.0</span>
        </div>
      </motion.div>

      {/* Retro Status Text */}
      <div className="mt-8 flex gap-8">
        {["C++", "Python", "Lua", "Automation"].map((t, i) => (
          <span key={i} className="text-[10px] uppercase tracking-[0.4em] text-white/10 font-bold hover:text-white/30 transition-colors cursor-default">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}