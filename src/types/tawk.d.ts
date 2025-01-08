declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatMessageVisitor?: (messageObj: TawkMessage) => void;
      onMessage?: (messageObj: TawkMessage) => void;
      setAttributes?: (attrs: TawkAttributes, callback: () => void) => void;
      addEvent?: (name: string, data: TawkEventData) => void;
      popup?: (options: TawkPopupOptions) => void;
      sendMessage?: (message: string) => void;
    };
    Tawk_LoadStart?: Date;
  }
}

interface TawkMessage {
  message: string;
  attachments?: Array<{
    fileName: string;
    fileType: string;
    fileUrl: string;
  }>;
}

interface TawkAttributes {
  name?: string;
  email?: string;
  [key: string]: string | undefined;
}

interface TawkEventData {
  message: string;
  [key: string]: unknown;
}

interface TawkPopupOptions {
  message: string;
}

export {};
