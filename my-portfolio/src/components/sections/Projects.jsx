
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Escape HQ Embedded Control Systems
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Developing and integrating embedded control systems
                                for interactive escape room puzzles using Raspberry Pi,
                                ESP32, and Arduino. Working on replacing legacy control
                                software with TypeScript-based server applications,
                                implementing WebSocket communication, OTA firmware
                                updates, GPIO control, and hardware troubleshooting.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Raspberry Pi",
                                    "ESP32",
                                    "Arduino",
                                    "TypeScript",
                                    "WebSockets",
                                    "GPIO",
                                    "OTA"
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                ATmega32U4 Bare-Metal MacroPad
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Developing bare-metal firmware for a custom MacroPad
                                using the ATmega32U4 microcontroller. Implemented
                                GPIO-based keypad matrix scanning and switch testing
                                using Embedded C, AVR-GCC, and Make, with a focus on
                                direct hardware control without relying on the
                                Arduino framework.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "ATmega32U4",
                                    "Embedded C",
                                    "AVR-GCC",
                                    "Bare-Metal",
                                    "GPIO",
                                    "Make"
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Custom Microcontroller PCB
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Designed a custom microcontroller board using KiCad,
                                including schematic capture and PCB layout. The
                                project provided practical experience with electronic
                                component selection, circuit design, and translating
                                schematics into a PCB design.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "KiCad",
                                    "PCB Design",
                                    "Schematic Design",
                                    "Electronics"
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
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

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                555 Timer IC PCB Design
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Designed a 555 timer circuit PCB using KiCad,
                                following an electronics design tutorial.
                                Developed the schematic and PCB layout to gain
                                practical experience with circuit design,
                                component placement, and PCB routing.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "KiCad",
                                    "PCB Design",
                                    "Schematic Design",
                                    "555 Timer"
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
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

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
