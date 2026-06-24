"use client";

import dynamic from "next/dynamic";

const LiveChatWidget = dynamic(
  () => import("@/components/widgets/LiveChatWidget").then((m) => m.LiveChatWidget),
  { ssr: false }
);

const AIAssistantWidget = dynamic(
  () => import("@/components/widgets/AIAssistantWidget").then((m) => m.AIAssistantWidget),
  { ssr: false }
);

export function Widgets() {
  return (
    <>
      <LiveChatWidget />
      <AIAssistantWidget />
    </>
  );
}
