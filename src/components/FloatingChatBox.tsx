"use client";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { useRouter } from "next/navigation";

const AI_QUESTIONS = [
    "1. Summarize my recent publications",
    "2. Suggest new research topics",
    "3. Improve my research abstract",
    "4. Find similar researchers",
    "5. Explain this paper simply",
    "6. Generate project ideas",
    "7. Help with methodology",
    "8. Create presentation outline",
    "9. Find citation gaps",
    "10. Write a research email",
];

const MESSAGES = [
    {
        name: "John Miller",
        role: "Researcher",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        link: "/messages/john-miller",
    },
    {
        name: "Emma Roy",
        role: "Scientist",
        img: "https://randomuser.me/api/portraits/women/52.jpg",
        link: "/messages/emma-roy",
    },
    {
        name: "Alfredo",
        role: "Professor",
        img: "https://randomuser.me/api/portraits/men/46.jpg",
        link: "/messages/alfredo",
    },
    {
        name: "Susan",
        role: "Teacher",
        img: "https://randomuser.me/api/portraits/women/53.jpg",
        link: "/messages/susan",
    },
];

export default function FloatingChatBox() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"messages" | "ai">("messages");

    return (
        <div className={`floating-chat ${open ? "open" : "minimized"}`}>
            <div className="chat-header" onClick={() => setOpen(!open)}>
                <div className="chat-title">
                    <MdOutlineMail />
                    <span>Messages</span>
                </div>
                <div className="chat-header" onClick={() => setOpen(!open)}>
                    {open ? (
                        <HiChevronDown className="chat-toggle" />
                    ) : (
                        <HiChevronUp className="chat-toggle" />
                    )}
                </div>
            </div>
            {/* BODY */}
            {open && (
                <div className="chat-body">
                    {/* ===== TOP TABS ===== */}
                    <div className="chat-top-tabs">
                        <button
                            className={activeTab === "messages" ? "active" : ""}
                            onClick={() => setActiveTab("messages")}
                        >
                            New Messages
                        </button>
                        <button
                            className={activeTab === "ai" ? "active" : ""}
                            onClick={() => setActiveTab("ai")}
                        >
                            AI
                        </button>
                    </div>

                    {/* ===== TAB CONTENT ===== */}
                    {activeTab === "messages" && (
                        <div className="chat-list">
                            {MESSAGES.map((user, index) => (
                                <a
                                    key={index}
                                    href={user.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="chat-user"
                                >
                                    <img src={user.img} alt={user.name} />
                                    <div>
                                        <h6>{user.name}</h6>
                                        <p>{user.role}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                    {activeTab === "ai" && (
                        <div className="ai-question-list">
                            {AI_QUESTIONS.map((q, index) => (
                                <div key={index} className="ai-question">
                                    {q}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
