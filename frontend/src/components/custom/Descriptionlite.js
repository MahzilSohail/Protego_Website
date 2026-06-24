"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ProtegoTabs() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div style={container}>
            <nav style={nav}>
                <ul style={tabsContainer}>
                    {tabs.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#f3f3f3" : "white",
                            }}
                            style={tab}
                            onClick={() => setSelectedTab(item)}
                        >
                            {item.label}
                            {item === selectedTab ? (
                                <motion.div
                                    style={underline}
                                    layoutId="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <main style={contentContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={contentBox}
                    >
                        <p style={text}>{selectedTab ? selectedTab.text : ""}</p>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 500,
    height: "auto",
    minHeight: "45vh",
    borderRadius: 10,
    background: "#fff",
    boxShadow:
        "0 4px 8px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Inter, sans-serif",
};

const nav= {
    background: "#fafafa",
    borderBottom: "1px solid #eee",
    padding: "5px 10px",
};

const tabsContainer = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
};

const tab = {
    flex: 1,
    textAlign: "center",
    padding: "10px 15px",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    fontWeight: 600,
    color: "#333",
};

const underline = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    background: "#0070f3",
    borderRadius: 3,
};

const contentContainer = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px 30px",
    textAlign: "justify",
};

const contentBox = {
    width: "100%",
    lineHeight: 1.6,
    color: "#222",
};

const text = {
    whiteSpace: "pre-line",
    fontSize: 15,
};

/**
 * ==============   Data   ================
 */

const tabs = [
    {
        label: "Description",
        text: `Stay protected in style with our Protego ring — sleek design, smart security, and comfortable wear. Perfect for everyday confidence and effortless safety wherever you go.Whether it’s a late-night walk, a solo trip, or a daily commute — Protego ensures help is always one touch away.`,
    },
    {
        label: "Care",
        text: `• Do not tamper with electronic components.
• Do not immerse in water; wipe clean with a soft cloth.
• Avoid dropping or strong impacts.
• Charge only via supported solar or kinetic methods.
• Keep away from magnetic fields or high-voltage sources.
• Store in a safe, dry place when not in use.
• Use the mobile app for firmware updates and safe route settings.`,
    },
    {
        label: "Features",
        text: `• SOS Trigger
• Real-Time Location Sharing
• Live Audio Recording
• AI Sound Detection
• Voice-Command SOS
• False Alert Prevention (5 sec)
• Solar/Kinetic Charging Support
• Geo-fencing Alerts
• Safe Route Suggestion (via App)
• Haptic Communication
• Guardian Integration
• Trusted Ride Mode
• App Support`,
    },
    {
        label: "How to Use",
        text: `Press the small button located beneath the ring to activate it. Once pressed, your guardians will immediately receive an emergency notification on their mobile devices. At the same time, the ring will start recording audio and video automatically. It also activates a mild electric current feature designed for emergency self-protection.`,
    },
];
