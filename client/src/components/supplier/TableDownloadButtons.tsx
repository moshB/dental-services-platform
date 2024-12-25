import { Button } from "@/components/ui/button";
import { FileSpreadsheet, FileText } from "lucide-react";
// import * as XLSX from 'xlsx';
import { useToast } from "@/components/ui/use-toast";
import { PrintToPdfButton } from "@/components/PrintToPdfButton";

interface TableDownloadButtonsProps {
  data: any[];
  filename: string;
  tableRef: React.RefObject<HTMLElement>;
}

export const TableDownloadButtons = ({ data, filename, tableRef }: TableDownloadButtonsProps) => {
  const { toast } = useToast();

  // const downloadExcel = () => {
  //   try {
  //     const ws = XLSX.utils.json_to_sheet(data);
  //     const wb = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //     XLSX.writeFile(wb, `${filename}.xlsx`);

  //     toast({
  //       title: "Success",
  //       description: "Excel file downloaded successfully",
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to download Excel file",
  //       variant: "destructive",
  //     });
  //   }
  // };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        // onClick={downloadExcel}
        className="flex items-center gap-2"
      >
        <FileSpreadsheet className="h-4 w-4" />
        Export Excel
      </Button>
      <PrintToPdfButton targetRef={tableRef} filename={filename} />
    </div>
  );
};