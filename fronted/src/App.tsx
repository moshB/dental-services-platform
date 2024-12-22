import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainNav } from "./components/MainNav";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Search from "./pages/practices/Search";
import Directory from "./pages/practices/Directory";
import DentistProfile from "./pages/practices/DentistProfile";
import PracticeDetails from "./pages/practices/PracticeDetails";
import ProcedureDetails from "./pages/practices/ProcedureDetails";
import PracticeResources from "./pages/practices/PracticeResources";
import Catalog from "./pages/materials/Catalog";
import MarketInsights from "./pages/data/MarketInsights";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/legal/Privacy";
import Cookie from "./pages/legal/Cookie";
import Terms from "./pages/legal/Terms";
import MaterialsPractice from "./pages/practice/MaterialsPractice";
import PatientDashboard from "./pages/patient/PatientDashboard";
import InventoryManagement from "./pages/practice/InventoryManagement";
import Orders from "./pages/practice/Orders";
import FAQs from "./pages/FAQs";
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupplierProducts from "./pages/supplier/SupplierProducts";
import PracticeSettings from "./pages/practice/PracticeSettings";
import StaffManagement from "./pages/practice/StaffManagement";
import Scheduling from "./pages/practice/Scheduling";
import Training from "./pages/practice/Training";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userType = localStorage.getItem("userType");
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  if (userType === "supplier") {
    return <Navigate to="/supplier/dashboard" replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster />
            <Sonner />
            <MainNav />
            <main className="flex-1 px-4 md:px-0">
              <Routes>
                <Route path="/" element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                } />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/practices/search" element={<Search />} />
                <Route path="/practices/directory" element={<Directory />} />
                <Route path="/practices/:id" element={<PracticeDetails />} />
                <Route path="/practices/dentist/:id" element={<DentistProfile />} />
                <Route path="/practices/procedures/:id" element={<ProcedureDetails />} />
                <Route path="/practices/resources" element={<PracticeResources />} />
                <Route path="/materials/catalog" element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                } />
                <Route path="/data/insights" element={<MarketInsights />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/legal/privacy" element={<Privacy />} />
                <Route path="/legal/cookie" element={<Cookie />} />
                <Route path="/legal/terms" element={<Terms />} />
                <Route path="/practice/materials" element={<MaterialsPractice />} />
                <Route path="/practice/inventory" element={<InventoryManagement />} />
                <Route path="/practice/orders" element={<Orders />} />
                <Route path="/practice/settings" element={<PracticeSettings />} />
                <Route path="/practice/staff" element={<StaffManagement />} />
                <Route path="/practice/scheduling" element={<Scheduling />} />
                <Route path="/practice/training" element={<Training />} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
                <Route path="/supplier/products" element={<SupplierProducts />} />
                <Route path="/supplier/orders" element={<Orders />} />
                <Route path="/supplier/analytics" element={<SupplierDashboard />} />
                <Route path="/supplier/settings" element={<SupplierDashboard />} />
                <Route path="/faqs" element={<FAQs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;