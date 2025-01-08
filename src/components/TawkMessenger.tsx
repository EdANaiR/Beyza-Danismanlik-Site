"use client";

import { useEffect } from "react";

export default function TawkMessenger() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const autoResponses: Record<string, string> = {
      merhaba: "Merhaba! Size nasıl yardımcı olabilirim?",
      randevu:
        "Randevu almak için formumuzu doldurabilir veya bizi arayabilirsiniz. Tel: +90 (532) 162 48 92",
      fiyat: "Fiyat bilgisi için lütfen bizi arayınız veya mail atınız.",
      "çalışma saatleri":
        "Hafta içi 09:00-18:00 saatleri arasında hizmet vermekteyiz.",
      adres:
        "Adres bilgilerimiz için iletişim sayfamızı ziyaret edebilirsiniz.",
      teşekkür: "Rica ederim! Başka bir konuda yardımcı olabilir miyim?",
    };

    const handleMessage = (messageObj: { message: string }) => {
      console.log("Gelen mesaj objesi:", messageObj);

      if (
        messageObj &&
        messageObj.message &&
        typeof messageObj.message === "string"
      ) {
        const lowerMessage = messageObj.message.toLowerCase();
        console.log("İşlenen mesaj:", lowerMessage);

        for (const [key, response] of Object.entries(autoResponses)) {
          if (lowerMessage.includes(key)) {
            console.log("Eşleşme bulundu:", key);
            setTimeout(() => {
              window.Tawk_API?.sendMessage?.(response);
            }, 1000);
            break;
          }
        }
      }
    };

    window.Tawk_API = {
      onLoad: function () {
        console.log("Tawk yüklendi");

        window.Tawk_API?.setAttributes?.(
          {
            name: "Uzm. Aile Danışmanı",
            email: "Sedef Yıldız",
          },
          function () {
            console.log("Özellikler ayarlandı");
            window.Tawk_API?.addEvent?.("welcome-message", {
              message: "Merhaba! Size nasıl yardımcı olabilirim?",
            });
          }
        );

        setTimeout(() => {
          window.Tawk_API?.popup?.({
            message: "Size yardımcı olabilir miyim? 🤗",
          });
        }, 30000);
      },

      onChatMessageVisitor: handleMessage,
      onMessage: handleMessage,
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/677d4f84af5bfec1dbe7eeb6/1ih0nt79r";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}
