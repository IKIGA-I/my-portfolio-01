import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Dual Axis Solar Tracker</h3>
                        <p className="text-gray-400 mb-4">Tinkercad Arduino Projects to detect and move a solar panel accoridng to the direction of sunlight</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Tinkercad", "Arduino", "C programming"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadown-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all
                                            "
                                >
                                {tech}

                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://www.tinkercad.com/things/dTIRl99FHes-dual-axis-solar-tracker/editel" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            > 
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">555 IC Timer</h3>
                        <p className="text-gray-400 mb-4">A custom PCB design with schematic of a 555 IC timer circuit following Shawns tutorial on youtube</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["KiCAD", "PCB Design", "Schematic Design"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadown-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all
                                            "
                                >
                                {tech}

                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://drive.google.com/file/d/1aEZS_jyC7kZ_E9NJXyy1yIboQEUYtJph/view?usp=sharing" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            > 
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Personal Microcontroller</h3>
                        <p className="text-gray-400 mb-4">Custom PCB deisgn and schematic of making a microcontroller board from scratch using KiCAD and other stuff</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["KiCAD", "PCB Design", "Schematic Design"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadown-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all
                                            "
                                >
                                {tech}

                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://drive.google.com/drive/folders/1XhobOuxp1SOvKT87nNRfPh5NA_tJMd9L?usp=sharing" 
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            > 
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}