import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LoginFormProps {
  role: string;
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm = ({ role, onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Card className="p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor={`${role}-email`}>
            {role === "practice" || role === "supplier" ? "Business Email" : "Email"}
          </Label>
          <Input 
            id={`${role}-email`}
            type="email" 
            placeholder={`${role}@example.com`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${role}-password`}>Password</Label>
          <Input 
            id={`${role}-password`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}</Button>
      </form>
    </Card>
  );
};