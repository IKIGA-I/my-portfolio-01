export const About = () => {

    const embeddedSkills = [
        "Arduino", 
        "STM32", 
        "ESP-32", 
        "IOT",
        "Embedded-C",
        "C++",
        "DSA"
    ];

    const vlsiSkills = [
        "Verilog",
        "System Verilog",
        "Testbench",
        "UVM",
        "Cadence Incisive"
    ];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>
            
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        3rd Year @ Xiamen University Malaysia. 
                        Studying Electrical and Electronics Engineering. 
                        Web Developer. Electronic Enthusiast
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Embedded </h3>
                            <div className="flex flex-wrap gap-2">
                                {embeddedSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadown-[0_2px_8px_rgba(59, 130,2246,0.2)] transition
                                                    "
                                    >
                                        {tech}

                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">VLSI </h3>
                            <div className="flex flex-wrap gap-2">
                                {vlsiSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadown-[0_2px_8px_rgba(59, 130,2246,0.2)] transition
                                                    "
                                    >
                                        {tech}

                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
}