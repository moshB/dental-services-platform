import { useRef } from "react";
import { FileText } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { PrintToPdfButton } from "../PrintToPdfButton";

interface Document {
  id: number;
  name: string;
  date: string;
  type: string;
}

interface DashboardDocumentsProps {
  isOpen: boolean;
  onToggle: () => void;
  documents: Document[];
}

export const DashboardDocuments = ({ isOpen, onToggle, documents }: DashboardDocumentsProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Documents
          </h2>
          <p className="text-muted-foreground">Access your dental documents and forms</p>
        </div>
        <PrintToPdfButton targetRef={contentRef} filename="documents" />
      </div>
      <div ref={contentRef} className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <div>
              <h3 className="font-medium">{doc.name}</h3>
              <p className="text-sm text-muted-foreground">{doc.type}</p>
            </div>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};