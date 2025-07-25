import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: { [key: string]: string } = {
  "skills": "Tshepiso specializes in software development, data science, and cloud technologies. His main skills include React, Python, machine learning, AWS, and game development with Unity.",
  "experience": "Tshepiso has over 3 years of experience in software development, with expertise in full-stack development, data analytics, and cloud infrastructure.",
  "education": "Tshepiso has a strong background in computer science and data science, with continuous learning in emerging technologies like AI and cloud computing.",
  "projects": "You can view Tshepiso's featured projects in the Projects section above, including AI analytics dashboards, cloud-native platforms, and game development work.",
  "contact": "You can reach Tshepiso through the contact form above, via email at tshepiso.rammala@example.com, or connect on LinkedIn and GitHub.",
  "default": "I'm here to help you learn more about Tshepiso! You can ask me about his skills, experience, projects, or how to get in touch with him."
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you learn more about Tshepiso. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Check for greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! I'm Tshepiso's assistant. I can tell you about his skills, experience, projects, or how to contact him. What interests you?";
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputValue),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-card/95 backdrop-blur-sm border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-primary">Chat with Tshepiso's Assistant</CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? "bg-primary/10 text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t border-primary/20">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Tshepiso..."
                  className="flex-1 border-primary/20 focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}