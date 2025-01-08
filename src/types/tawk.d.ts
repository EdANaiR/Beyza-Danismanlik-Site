declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatMessageVisitor?: (messageObj: {
        message: string;
        attachments?: any[];
      }) => void;
      onMessage?: (messageObj: {
        message: string;
        attachments?: any[];
      }) => void;
      setAttributes?: (attrs: any, callback: () => void) => void;
      addEvent?: (name: string, data: any) => void;
      popup?: (options: { message: string }) => void;
      sendMessage?: (message: string) => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export {};
