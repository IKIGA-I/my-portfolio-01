
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    const projects = [
        {
            title: "Embedded Control Systems — Escape HQ",
            description:
                "Hands-on development of embedded control systems for interactive puzzle experiences. Working with Raspberry Pi, ESP32, and Arduino to integrate physical hardware with TypeScript-based server applications, implement OTA firmware updates, and troubleshoot communication and reliability issues.",
            technologies: [
                "Raspberry Pi",
                "ESP32",
                "Arduino",
                "TypeScript",
                "WebSockets",
                "GPIO",
                "Wi-Fi / OTA"
            ],
        },
        {
            title: "ATmega32U4 Bare-Metal MacroPad",
            description:
                "Developing firmware for a custom MacroPad using the ATmega32U4. The project focuses on direct microcontroller programming, matrix keypad scanning, hardware timers, interrupt-driven rotary encoder input, and building firmware using the AVR-GCC toolchain without relying on the Arduino framework.",
            technologies: [
                "ATmega32U4",
                "Embedded C",
                "AVR-GCC",
                "Bare-Metal",
                "GPIO",
                "Interrupts",
                "Make"
            ],
        },
        {
            title: "NIOS II Frequency Relay — FreeRTOS",
            description:
                "An embedded control project combining the NIOS II soft-core processor with FreeRTOS. Focuses on real-time task execution, interrupt handling, concurrent software tasks, and deterministic control behaviour in a microprocessor-based system.",
            technologies: [
                "NIOS II",
                "FreeRTOS",
                "Embedded C",
                "Interrupts",
                "Real-Time Systems"
            ],
        },
        {
            title: "Interactive Electronic Wand",
            description:
                "A microcontroller-based interactive electronics project using PIC16 firmware. Focuses on reading hardware inputs, implementing control logic, and coordinating electronic outputs to create responsive behaviour.",
            technologies: [
                "PIC16",
                "Embedded C",
                "Microcontrollers",
                "Digital I/O",
                "Hardware Integration"
            ],
        },
        {
            title: "Safety-Critical Cruise Control System",
            description:
                "An embedded control project exploring cruise control behaviour and safety-oriented system design. Focuses on control logic, handling operating conditions, and considering how a system should respond to changing inputs and potential fault conditions.",
            technologies: [
                "Embedded Systems",
                "C Programming",
                "Control Logic",
                "System Testing",
                "Safety-Oriented Design"
            ],
        },
    ];

    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
