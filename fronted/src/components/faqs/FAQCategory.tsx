import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";

interface FAQCategoryProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FAQCategory = ({ title, children, className = "" }: FAQCategoryProps) => {
  return (
    <Card className={`p-6 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Accordion type="single" collapsible>
        {children}
      </Accordion>
    </Card>
  );
};

export default FAQCategory;