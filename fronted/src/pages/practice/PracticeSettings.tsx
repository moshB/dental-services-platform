import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { getPracticeDetails } from "@/data/practiceDetails";
import { ImageUpload } from "@/components/practice/ImageUpload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoSettings } from "@/components/settings/BasicInfoSettings";
import { OpeningHoursSettings } from "@/components/settings/OpeningHoursSettings";
import { TagsSettings } from "@/components/settings/TagsSettings";
import { FacilitiesSettings } from "@/components/settings/FacilitiesSettings";
import { PaymentMethodsSettings } from "@/components/settings/PaymentMethodsSettings";
import { PricingSettings } from "@/components/settings/PricingSettings";
import { CertificationsSettings } from "@/components/settings/CertificationsSettings";

const formSchema = z.object({
  name: z.string().min(1, "Practice name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  description: z.string().min(1, "Description is required"),
  openingHours: z.record(z.object({
    open: z.string(),
    close: z.string()
  })),
  tags: z.array(z.string()),
  facilities: z.record(z.array(z.string())),
  paymentMethods: z.record(z.array(z.string())),
  pricing: z.record(z.number().min(0)),
  certifications: z.record(z.array(z.string()))
});

const PracticeSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const practice = getPracticeDetails("1");
  const [images, setImages] = useState(practice.images);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: practice.name,
      address: practice.address,
      phone: practice.phone,
      description: practice.description,
      openingHours: {
        Monday: { open: "9", close: "17" },
        Tuesday: { open: "9", close: "17" },
        Wednesday: { open: "9", close: "17" },
        Thursday: { open: "9", close: "17" },
        Friday: { open: "9", close: "17" },
        Saturday: { open: "10", close: "14" },
        Sunday: { open: "", close: "" }
      },
      tags: practice.tags,
      facilities: {},
      paymentMethods: {},
      pricing: {},
      certifications: {}
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitting values:", values);
    toast({
      title: "Settings updated",
      description: "Your practice settings have been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/practice/materials")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">Practice Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Tabs defaultValue="basic" className="space-y-6">
                <TabsList className="grid grid-cols-4 lg:grid-cols-7 h-auto">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="hours">Hours</TabsTrigger>
                  <TabsTrigger value="tags">Tags</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>

                <TabsContent value="basic">
                  <BasicInfoSettings form={form} />
                </TabsContent>

                <TabsContent value="hours">
                  <OpeningHoursSettings form={form} />
                </TabsContent>

                <TabsContent value="tags">
                  <TagsSettings form={form} />
                </TabsContent>

                <TabsContent value="facilities">
                  <FacilitiesSettings form={form} />
                </TabsContent>

                <TabsContent value="payment">
                  <PaymentMethodsSettings form={form} />
                </TabsContent>

                <TabsContent value="pricing">
                  <PricingSettings form={form} />
                </TabsContent>

                <TabsContent value="certifications">
                  <CertificationsSettings form={form} />
                </TabsContent>
              </Tabs>

              <Button type="submit" className="w-full">Save Changes</Button>
            </form>
          </Form>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Practice Images</h2>
            <ImageUpload
              images={images}
              onImagesChange={setImages}
              maxImages={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSettings;