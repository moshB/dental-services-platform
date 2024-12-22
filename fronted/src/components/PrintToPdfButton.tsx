import { Button } from "./ui/button";
import { Printer } from "lucide-react";
import { useToast } from "./ui/use-toast";
import ReactToPdf from 'react-to-pdf';

interface PrintToPdfButtonProps {
  targetRef: React.RefObject<HTMLElement>;
  filename?: string;
}

export const PrintToPdfButton = ({ targetRef, filename = "document" }: PrintToPdfButtonProps) => {
  const { toast } = useToast();

  const handlePrint = async () => {
    try {
      if (!targetRef.current) return;
      
      await ReactToPdf(() => targetRef.current, {
        filename: `${filename}.pdf`,
        page: {
          margin: 20,
        },
      });

      toast({
        title: "Success",
        description: "PDF has been generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handlePrint} variant="outline" size="sm">
      <Printer className="mr-2 h-4 w-4" />
      Print to PDF
    </Button>
  );
};